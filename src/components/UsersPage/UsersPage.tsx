import React from "react";
import { useState } from "react";
import {UsersTable} from "./UsersTable";
import {TopComponent} from "../TopComponent";
import '../TopComponent.css'
import {Navigation} from "./Navigation";
import {AddUserButton} from "./AddUserButton";
import Typography from "@mui/material/Typography";
import './UsersPage.css'
import { useEffect } from "react";
import { UserList } from "../../types/cctv-api";
import CCTVApiService from "../../services/CCTVApiService";

export const UsersPage = () => {
    const [data, setData] = useState<Array<UserList>>();

    useEffect(() => {
        getUsers(1);
    });
    
    const getUsers = (id: number) => {
        CCTVApiService.getUsersByOrganizationID(id)
        .then(responce => {
            var userResronse: UserList[] = [];
            responce.data.map((user) => {
                if (user.role == "user") {
                    userResronse.push(user);
                }
            });
            setData(userResronse);
            console.log(userResronse);
            console.log("Data: ", data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    return (
        <div>
            <div>
                <TopComponent/>
            </div>
            <div className={"nav"}>
                <Navigation/>
            </div>
            <div className={"users"}>
                <Typography variant={"h6"}>
                    Список пользователей
                </Typography>
                <UsersTable data={data!}/>
                <AddUserButton/>
            </div>
        </div>
    )
}