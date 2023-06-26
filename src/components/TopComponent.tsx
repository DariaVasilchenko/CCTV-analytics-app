import React from "react";
import Typography from "@mui/material/Typography";
import {TopMenu} from "./TopMenu";
import Button from "@mui/material/Button";
import config from "../config";
import { useNavigate } from 'react-router-dom';

export const TopComponent = () => {
    let navigate = useNavigate();

    const exit = () => {
        config.role = "";
        config.token = "";
        navigate("/");
    };

    return (
        <div className={"top"}>
            <TopMenu/>
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