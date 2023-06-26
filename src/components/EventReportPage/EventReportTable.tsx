import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import { EventList } from "../../types/cctv-api";

interface Props {
    data: Array<EventList>;
}

export const EventReportTable: React.FC<Props> = (props) => {

    const downloadImg = (img: string) => {
        window.open(img, '_blank');
    }

    if (props.data != undefined) {
        return (
            <TableContainer>
                <Table sx={{ maxWidth: 850 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Что обнаружено</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Время</TableCell>
                            <TableCell>Имя файла изображения</TableCell>
                            <TableCell>Изображение</TableCell>
                            <TableCell>Имя файла видео</TableCell>
                            <TableCell>Видео</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((row) => (
                                <TableRow>
                                    <TableCell>{row.danger}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.time}</TableCell>
                                    <TableCell>{row.img.replace('http://ml-iu5.local.bmstu.ru:9000/cctv/','')}</TableCell>
                                    <TableCell>
                                        <img src={row.img} height={150} onClick={() => downloadImg(row.img)}></img>
                                    </TableCell>
                                    <TableCell>{row.video ? (
                                        row.video.replace('http://ml-iu5.local.bmstu.ru:9000/cctv/','')
                                    ) : (
                                        'Нет'
                                    )}</TableCell>
                                    <TableCell>
                                    {row.video ? (
                                        <video src={row.video} height={150} loop controls></video>
                                    ) : (
                                        'Нет'
                                    )}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    } else {
        return (
            <div></div>
        )
    }
}