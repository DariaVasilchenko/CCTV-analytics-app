import React from "react";
import './LogInPage.css';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import CCTVApiService from "../../services/CCTVApiService";
import { API } from "../../http-common";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import config from "../../config";

export const LogInPage = () => {
    const userData = {
        login: "",
        token: ""
    };
    const [data, setData] = useState<typeof userData>(userData);
    let navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const getAuthentication = () => {
        if ((data.login == "")||(data.token == "")) {
            var error = document.getElementById('error');
            error!.innerHTML = "Заполните все поля";
            return;
        }
        CCTVApiService.getUserByLogin(data.login)
        .then(responce => {
            config.role = responce.data.role!;
            config.token = data.token;
            API.defaults.headers.common['Authorization'] = data.token;
            CCTVApiService.getSpecifications()
            .then(responce => {
                if (config.role == "admin") {
                    navigate("/MenuPage");
                } else if (config.role == "user") {
                    navigate("/MenuPage_2");
                }
            })
            .catch((e: Error) => {
                console.log('Ошибка getSpecifications', e);
                config.token = "";
                var error = document.getElementById('error');
                error!.innerHTML = "Неправильный токен";
            })
        })
        .catch((e: Error) => {
            if (e.message == 'Request failed with status code 404') {
                var error = document.getElementById('error');
                error!.innerHTML = "Неправильный логин";
            }
            console.log('Ошибка', e);
        });
    };
  
  const getToken = () => {
    window.open('http://ml-iu5.local.bmstu.ru:8060/auth/token', '_blank');
  }

    return (
        <div className={"main-box"}>
            <div className={"box"}>
                <Typography variant="h6">
                    Вход
                </Typography>
                <TextField required id="outlined-basic" name="login" label="Логин" defaultValue={data.login} variant="outlined" onChange={handleInputChange}/>
                <TextField required id="outlined-basic" name="token" label="Токен" defaultValue={data.token} variant="outlined" onChange={handleInputChange}/>
                <Typography id="error" variant="subtitle1"></Typography>
                <Button variant={"contained"} onClick={getToken}>
                    Получить токен
                </Button>
                <Button variant={"contained"} onClick={getAuthentication}>
                    Далее
                </Button>
            </div>
        </div>
    );
}