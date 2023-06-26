import React from "react";
import '../TopComponent.css'
import {TopComponent} from "../TopComponent";
import {ImageNavigation} from "./ImageNavigation";
import { useState } from "react";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { Tensor, InferenceSession } from "onnxruntime-web";
import cv from "@techstark/opencv-js";
import Loader from "./loader";
import Typography from '@mui/material/Typography';
import CCTVApiService from "../../services/CCTVApiService";

export const ImageDetection_2 = () => {
    const [file, setFile] = useState<File>();
    const [session, setSession] = useState<InferenceSession>();
    const [loading, setLoading] = useState("");

    const modelName = "./best1.onnx";
    const modelInputShape = [1, 3, 640, 640];

    cv["onRuntimeInitialized"] = async () => {
        // create session
        console.log("Loading YOLOv7 model...");
        setLoading("Пожалуйста, подождите, идет загрузка модели...");
        const yolov7 = await InferenceSession.create(modelName);

        // warmup main model
        console.log("Warming up model...");
        const tensor = new Tensor(
            "float32",
            new Float32Array(modelInputShape.reduce((a, b) => a * b)),
            modelInputShape
        );
        await yolov7.run({ images: tensor });

        setSession(yolov7);
        console.log("Сессия создана и подготовлена");
        setLoading("");
    };

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Выбор файла');
        const target = event.target as HTMLInputElement;
        if (target) setFile(target.files![0]);
    }

    const onFileUpload = async () => {
        if ((file == undefined)||(file?.type != "image/jpeg")) {
            var header = document.getElementById('header');
            header!.innerHTML = "Загрузите картинку в формате jpg";
            return;
        }

        setLoading("Анализ изображения...");

        const image = new Image;
        image.src = URL.createObjectURL(file!);

        image.onload = async () => {
            var canvas = document.getElementById('img1') as HTMLCanvasElement;
            var ctx = canvas!.getContext('2d', { willReadFrequently: true });

            canvas.width = image.width;
            canvas.height = image.height;

            var xRatio1 = canvas.width / 640;
            var yRatio1 = canvas.height / 640;

            ctx!.drawImage(image!, 0, 0, canvas.width, canvas.height);

            const [modelWidth, modelHeight] = modelInputShape.slice(2);
            const [input, xRatio, yRatio] = preprocessing(image!, modelWidth, modelHeight);
            const tensor = new Tensor("float32", new cv.Mat(input).data32F, modelInputShape); // to ort.Tensor
            const start = new Date();
            const { output } = await session!.run({ images: tensor }); // run session and get output layer
            const end = new Date();
            const boxes = [];

            // looping through output
            for (let r = 0; r < output.size; r += output.dims[1]) {
                const data = output.data.slice(r, r + output.dims[1]); // get rows
                const x0 = data.slice(1)[0];
                const y0 = data.slice(1)[1];
                const x1 = data.slice(1)[2];
                const y1 = data.slice(1)[3];
                const classId = data.slice(1)[4];
                const score = data.slice(1)[5];

                const w = Number(x1) - Number(x0),
                h = Number(y1) - Number(y0);

                boxes.push({
                    classId: classId,
                    probability: score,
                    bounding: [Number(x0) * Number(xRatio) * Number(xRatio1), Number(y0) * Number(yRatio) * Number(yRatio1), w * Number(xRatio) * Number(xRatio1), h * Number(yRatio) * Number(yRatio1)],
                });
            }

            boxes.forEach((box) => {
                const [x1, y1, width, height] = box.bounding;
                ctx!.strokeStyle = '#1a2edb'; // тёмно-синий цвет
                ctx!.lineWidth = 5; // толщина линии в 5px
                ctx!.strokeRect(x1, y1, width, height);
            });
            
            if ((output != null || output != undefined) && (output.size != 0)) {
                var header = document.getElementById('header');
                header!.innerHTML = "Обнаруженные угрозы (холодное оружие):";

                canvas.toBlob((blob) => {
                    let file1 = new File([blob!], file.name, { type: "image/jpeg" })
                    const formData = new FormData();
                    formData.append('img', file1);
                    formData.append('danger', '1');
                    formData.append('camera', '1');
                    addEvent(formData);
                }, 'image/jpeg')
            } else {
                var header = document.getElementById('header');
                header!.innerHTML = "Угроз (холодное оружие) не обнаружено:";
            }
            setLoading("");

            const inferenceTime = (end.getTime() - start.getTime())/1000;
            console.log(inferenceTime);
        }
    }

    const preprocessing = (source: HTMLImageElement, modelWidth: number, modelHeight: number) => {
        const mat = cv.imread(source); // read from img tag
        const matC3 = new cv.Mat(mat.rows, mat.cols, cv.CV_8UC3); // new image matrix
        cv.cvtColor(mat, matC3, cv.COLOR_RGBA2BGR); // RGBA to BGR
      
        // padding image to [n x n] dim
        const maxSize = Math.max(matC3.rows, matC3.cols); // get max size from width and height
        const xPad = maxSize - matC3.cols, // set xPadding
          xRatio = maxSize / matC3.cols; // set xRatio
        console.log('matC3.cols ', matC3.cols);
        const yPad = maxSize - matC3.rows, // set yPadding
          yRatio = maxSize / matC3.rows; // set yRatio
        console.log('matC3.rows ', matC3.rows);
        console.log('maxSize ', maxSize);
        const matPad = new cv.Mat(); // new mat for padded image
        cv.copyMakeBorder(matC3, matPad, 0, yPad, 0, xPad, cv.BORDER_CONSTANT); // padding black
      
        const input = cv.blobFromImage(
          matPad,
          1 / 255.0, // normalize
          new cv.Size(modelWidth, modelHeight), // resize to model input size
          new cv.Scalar(0, 0, 0),
          true, // swapRB
          false // crop
        ); // preprocessing image matrix
      
        // release mat opencv
        mat.delete();
        matC3.delete();
        matPad.delete();
      
        return [input, xRatio, yRatio];
      };

      const addEvent = (data: FormData) => {
        console.log('data: ', data);
        CCTVApiService.addEvent(data)
        .then(responce => {
            console.log('id ', responce.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };
      
  return (
      <div>
          <div>
              <TopComponent/>
          </div>
          <div className={"nav"}>
              <ImageNavigation/>
          </div>
          <div>
            <Input type="file" onChange={onFileChange}/>
          </div>
          <div>
            <Button variant={"contained"} onClick={onFileUpload}>
                Анализ
            </Button>
            <div>{loading && <Loader>{loading}</Loader>}</div>
            <div id="placehere"></div>
            <br></br>
            <Typography id="header" variant="body1"></Typography>
            <canvas id="img1"></canvas>
          </div>
      </div>
  )
}