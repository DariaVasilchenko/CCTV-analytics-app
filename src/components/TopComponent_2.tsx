import React from "react";
import Typography from "@mui/material/Typography";
import {TopMenu_2} from "./TopMenu_2";
import Button from "@mui/material/Button";
import config from "../config";
import { useNavigate } from 'react-router-dom';

export const TopComponent_2 = () => {
    let navigate = useNavigate();

    const exit = () => {
        config.role = "";
        config.token = "";
        navigate("/");
    };

    return (
        <div className={"top"}>
            <TopMenu_2/>
            <Typography variant={"h6"}>
                Аналитика
            </Typography>
            <div className={"exit"}>
                <Button variant={"text"} onClick={exit}>
                    Выход
                </Button>
            </div>
        </div>
    )
}