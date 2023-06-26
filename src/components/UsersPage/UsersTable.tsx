import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import { UserList } from "../../types/cctv-api";
import CCTVApiService from "../../services/CCTVApiService";
import config from "../../config";
import { useNavigate } from 'react-router-dom';

interface Props {
    data: Array<UserList>;
}

export const UsersTable: React.FC<Props> = (props) => {
    let navigate = useNavigate();

    const updateUser = (user: UserList) => {
        config.loginUserToUpdate = user.login;
        navigate("/UserInfoPage");
    };

    const deleteUser = (user: UserList) => {
        CCTVApiService.removeUser(user.userid!)
        .then(response => {
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    };

    if (props.data != undefined) {
        return (
            <TableContainer>
                <Table sx={{ maxWidth: 950 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Логин</TableCell>
                            <TableCell>Фамилия</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((row) => (
                                <TableRow>
                                    <TableCell>{row.login}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.telephoneNumber}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <Button variant={"outlined"} onClick={() => updateUser(row)}>
                                        Изменить
                                    </Button>
                                    <Button variant={"outlined"} onClick={() => deleteUser(row)}>
                                        Удалить
                                    </Button>
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