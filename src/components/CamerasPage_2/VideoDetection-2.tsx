import React from "react";
import '../TopComponent.css'
import {TopComponent_2} from "../TopComponent_2";
import {VideoNavigation} from "./VideoNavigation";
import { useState } from "react";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { Tensor, InferenceSession } from "onnxruntime-web";
import cv from "@techstark/opencv-js";
import Loader from "./loader";
import Typography from '@mui/material/Typography';
import CCTVApiService from "../../services/CCTVApiService";

export const VideoDetection_2_2 = () => {
    const [file, setFile] = useState<File>();
    const [session, setSession] = useState<InferenceSession>();
    const [loading, setLoading] = useState("");

    var count1 = 0;
    var idVar = 0;

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

    const onFileUpload = () => {
        if ((file == undefined)||(file?.type != "video/mp4")) {
            var header = document.getElementById('header');
            header!.innerHTML = "Загрузите видео в формате mp4";
            return;
        }
        document.querySelector('video')!.src = URL.createObjectURL(file!);

        setTimeout(() => onFileAnalysis(), 100);
    }

    const onFileAnalysis = () => {
        document.querySelector('video')?.pause();
        setLoading("Анализ видео...");
        var video = document.querySelector('video') as CanvasImageSource;

        var canvas = document.createElement("canvas");
        var ctx = canvas!.getContext('2d', { willReadFrequently: true });

        canvas.width = document.querySelector('video')!.videoWidth;
        canvas.height = document.querySelector('video')!.videoHeight;
        var duration = document.querySelector('video')!.duration;

        var header = document.getElementById('header');
        header!.innerHTML = "Обнаруженные угрозы (холодное оружие):";

        let timerId = setInterval(() => parseVideo(video, ctx!, canvas), 35000);
        setTimeout(() => { clearInterval(timerId); setLoading(""); }, Math.ceil(duration/5)*35000);
    }

    async function parseVideo(video: CanvasImageSource, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        count1 = (video as HTMLVideoElement).currentTime;
        const start = new Date();

        ctx!.drawImage(video!, 0, 0, canvas.width, canvas.height);
        console.log('current video time ', (video as HTMLVideoElement).currentTime);

        var xRatio1 = canvas.width / 640;
        var yRatio1 = canvas.height / 640;

        var image = new Image();
        image.src = canvas.toDataURL();

        image.onload = async () => {
            const [modelWidth, modelHeight] = modelInputShape.slice(2);
            const [input, xRatio, yRatio] = preprocessing(image!, modelWidth, modelHeight);

            const tensor = new Tensor("float32", new cv.Mat(input).data32F, modelInputShape); // to ort.Tensor
            const { output } = await session!.run({ images: tensor }); // run session and get output layer

            if ((output != null || output != undefined) && (output.size != 0)) {
                console.log('Обнаружена угроза');
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

                var image1 = new Image();
                image1.src = canvas.toDataURL();

                image1.onload = async () => {
                    document.getElementById('placehere')!.insertAdjacentHTML(
                        'beforeend',
                        `<br>
                        <br>
                        <Typography variant="body1">
                        <font face="Arial">
                            Время: ${(video as HTMLVideoElement).currentTime} сек
                        </Typography>`,
                    );
                    document.getElementById('placehere')!.appendChild(image1);
                }

                canvas.toBlob((blob) => {
                    let file1 = new File([blob!], file!.name.replace('.mp4', `(${count1}).jpg`), { type: "image/jpeg" })
                    const formData = new FormData();
                    formData.append('img', file1);
                    formData.append('danger', '1');
                    formData.append('camera', '1');
                    addEvent(formData, file!);
                }, 'image/jpeg')

            } else {
                console.log('Угроза не обнаружена');
            }

            document.querySelector('video')?.play();
            setTimeout(() => document.querySelector('video')?.pause(), 5000);

            const end = new Date();
            const inferenceTime = (end.getTime() - start.getTime())/1000;
            console.log('inferenceTime', inferenceTime);
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

      const addEvent = (data: FormData, file: File) => {
        CCTVApiService.addEvent(data)
        .then(responce => {
            idVar = responce.data;
            const formData = new FormData();
            formData.append('video', file!);
            CCTVApiService.updateEvent(responce.data, formData)
            .then(response => {
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };
      
  return (
      <div>
          <div>
              <TopComponent_2/>
          </div>
          <div className={"nav"}>
              <VideoNavigation/>
          </div>
          <div>
            <Input type="file" onChange={onFileChange}/>
          </div>
          <div>
            <Button variant={"contained"} onClick={onFileUpload}>
                Анализ
            </Button>
          </div>
            <div>{loading && <Loader>{loading}</Loader>}</div>
            <div>
                <video hidden id="videoElem" autoPlay />
                <canvas id="img1"></canvas>
                <video id="videoElem1" autoPlay />
            </div>
            <Typography id="header" variant="h6"></Typography>
            <div id="placehere"></div>
      </div>
  )
}