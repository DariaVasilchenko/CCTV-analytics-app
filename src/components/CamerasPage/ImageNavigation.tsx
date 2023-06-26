import React from "react";
import {Breadcrumbs} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

export const ImageNavigation = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/MenuPage">
                Меню
            </Link>
            <Typography color="text.primary">
                Анализ изображения
            </Typography>
        </Breadcrumbs>
    )
}