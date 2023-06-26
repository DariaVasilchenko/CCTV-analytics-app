import React from "react";
import {Breadcrumbs} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

export const VideoNavigation = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/MenuPage_2">
                Меню
            </Link>
            <Typography color="text.primary">
                Анализ видео
            </Typography>
        </Breadcrumbs>
    )
}