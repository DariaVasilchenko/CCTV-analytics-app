import React from "react";
import {Breadcrumbs} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

export const Navigation = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/MenuPage">
                Меню
            </Link>
            <Link underline="hover" color="inherit" href="/UsersPage">
                Управление пользователями
            </Link>
            <Typography color="text.primary">
                Информация о пользователе
            </Typography>
        </Breadcrumbs>
    )
}