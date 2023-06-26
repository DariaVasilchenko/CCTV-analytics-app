import React from "react";
import '../TopComponent.css'
import './AddUserPage.css'
import {TopComponent} from "../TopComponent";
import {Navigation} from "./Navigation";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import { UserCreate } from "../../types/cctv-api";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import CCTVApiService from "../../services/CCTVApiService";

export const AddUserPage = () => {
    const initialDataState = {
        login: "",
        firstName: "",
        lastName: "",
        receivingNotification: "telegram",
        telephoneNumber: "",
        email: "",
        telegram: "",
        role: "user",
        organization: 1
    };
    const [data, setData] = useState<UserCreate>(initialDataState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const newUser = () => {
        setData(initialDataState);
        setSubmitted(false);
    };

    const saveUser = () => {
        if ((data.login == "")||(data.firstName == "")||(data.lastName == "")) {
            var error = document.getElementById('error');
            error!.innerHTML = "Заполните все обязательные поля";
            return;
        }
        var error = document.getElementById('error');
        error!.innerHTML = "Добавление пользователя...";
        CCTVApiService.getUserByLogin(data.login)
        .then(response => {
            var error = document.getElementById('error');
            error!.innerHTML = "Пользователь с таким логином уже существует";
            return;
        })
        .catch((e: Error) => {
            console.log(e);
            console.log('data: ', data);
            CCTVApiService.addUser(data)
            .then(responce => {
                console.log(responce.data);
                setSubmitted(true);
            })
            .catch((e: Error) => {
                console.log(e);
            });
        });
    };
    
  return (
    <div>
          <div>
              <TopComponent/>
          </div>
          <div className={"nav"}>
              <Navigation/>
          </div>
          <div>
            {submitted ? (
                <div>
                    <Typography variant="h5">
                        Пользователь добавлен
                    </Typography>
                    <Button variant={"contained"} onClick={newUser}>
                        Добавить еще одного пользователя
                    </Button>
                </div>
            ) : (
                <div className={"box2"}>
                    <Typography variant="h5">
                        Новый пользователь
                    </Typography>
                    <Typography variant="subtitle1">
                        Обязательные поля отмечены *
                    </Typography>
                    <TextField required id="outlined-basic" name="login" label="Логин" defaultValue={data.login} variant="outlined" onChange={handleInputChange}/>
                    <TextField required id="outlined-basic" name="lastName" label="Фамилия" defaultValue={data.lastName} variant="outlined" onChange={handleInputChange}/>
                    <TextField required id="outlined-basic" name="firstName" label="Имя" defaultValue={data.firstName} variant="outlined" onChange={handleInputChange}/>
                    <TextField id="outlined-basic" name="telephoneNumber" label="Телефон" defaultValue={data.telephoneNumber} variant="outlined" onChange={handleInputChange}/>
                    <TextField id="outlined-basic" name="email" label="Email" defaultValue={data.email} variant="outlined" onChange={handleInputChange}/>
                    <Typography id="error" variant="subtitle1"></Typography>
                    <Button variant={"contained"} onClick={saveUser}>
                        Добавить
                    </Button>
                </div>
            )}
          </div>
      </div>
  )
}