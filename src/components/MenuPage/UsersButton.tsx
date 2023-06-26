import React from "react";
import Button from "@mui/material/Button";

export const UsersButton = () => {
    return (
        <Button variant={"outlined"} href={"/UsersPage"}>
            Управление пользователями
        </Button>
    )
}