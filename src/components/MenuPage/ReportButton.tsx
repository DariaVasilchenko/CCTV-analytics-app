import React from "react";
import Button from "@mui/material/Button";

export const ReportButton = () => {
    return (
        <Button variant={"outlined"} href={"/EventReportPage"}>
            Отчёт об обнаружении
        </Button>
    )
}