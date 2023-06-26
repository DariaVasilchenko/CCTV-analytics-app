import React from "react";
import '../TopComponent.css'
import './UserInfoPage.css'
import {TopComponent} from "../TopComponent";
import {Navigation} from "./Navigation";
import Typography from "@mui/material/Typography";
import { UserDetail } from "../../types/cctv-api";
import {TextField} from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CCTVApiService from "../../services/CCTVApiService";
import config from "../../config";
import { useNavigate } from 'react-router-dom';

export const UserInfoPage = () => {
    const [newData, setNewData] = useState<UserDetail>();
    let navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewData({ ...newData!, [name]: value });
        var error = document.getElementById('error');
        error!.innerHTML = "";
    };

    const updateUser = () => {
        if ((newData!.login == "")||(newData!.firstName == "")||(newData!.lastName == "")) {
            var error = document.getElementById('error');
            error!.innerHTML = "Заполните все обязательные поля";
            return;
        }
        var error = document.getElementById('error');
        error!.innerHTML = "Сохранение изменений...";
        CCTVApiService.updateUser(newData!.userid!, newData!)
        .then(responce => {
            console.log(responce.data);
            var error = document.getElementById('error');
            error!.innerHTML = "Изменения сохранены";
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };

    const deleteUser = () => {
        var error = document.getElementById('error');
        error!.innerHTML = "Удаление...";
        CCTVApiService.removeUser(newData!.userid!)
        .then(response => {
            console.log(response.data);
            navigate("/UsersPage");
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };

    useEffect(() => {
        getUser(config.loginUserToUpdate);
    }, []);

    const getUser = (login: string) => {
        if (login == "") {
            navigate("/UsersPage");
            return;
        } else {
            CCTVApiService.getUserByLogin(login)
            .then(response => {
                setNewData(response.data);
                console.log(response.data);
                console.log("Data: ", newData);
            })
            .catch((e: Error) => {
                console.log(e);
            })
        }
    }

    if (newData != undefined) {
        return (
            <div>
                <div>
                    <TopComponent/>
                </div>
                <div className={"nav"}>
                    <Navigation/>
                </div>
                <div className={"box2"}>
                        <Typography variant="h5">
                            Пользователь
                        </Typography>
                        <Typography variant="subtitle1">
                            Обязательные поля отмечены *
                        </Typography>
                        <TextField required id="outlined-basic" name="login" label="Логин" defaultValue={newData.login} variant="outlined" onChange={handleInputChange}/>
                        <TextField required id="outlined-basic" name="lastName" label="Фамилия" defaultValue={newData.lastName} variant="outlined" onChange={handleInputChange}/>
                        <TextField required id="outlined-basic" name="firstName" label="Имя" defaultValue={newData.firstName} variant="outlined" onChange={handleInputChange}/>
                        <TextField id="outlined-basic" name="telephoneNumber" label="Телефон" defaultValue={newData.telephoneNumber} variant="outlined" onChange={handleInputChange}/>
                        <TextField id="outlined-basic" name="email" label="Email" defaultValue={newData.email} variant="outlined" onChange={handleInputChange}/>
                        <Typography id="error" variant="subtitle1"></Typography>
                        <Button variant={"contained"} onClick={updateUser}>
                            Изменить
                        </Button>
                        <Button variant={"contained"} onClick={deleteUser}>
                            Удалить
                        </Button>
                </div>
            </div>
        )
  } else {
        return (
            <div></div>
        )
    }
}