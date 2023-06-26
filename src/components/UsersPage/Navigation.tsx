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
            <Typography color="text.primary">
                Управление пользователями
            </Typography>
        </Breadcrumbs>
    )
}