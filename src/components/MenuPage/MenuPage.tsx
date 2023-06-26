import React from "react";
import {UsersButton} from "./UsersButton";
import {CamerasButton} from "./CamerasButton";
import {ReportButton} from "./ReportButton";
import { ImageButton } from "./ImageButton";
import './MenuPage.css'
import {TopComponent} from "../TopComponent";
import '../TopComponent.css'

export const MenuPage = () => {
    return (
        <div>
            <div>
                <TopComponent/>
            </div>
            <div className="menuBox">
                <div className={"menu"}>
                    <UsersButton/>
                    <CamerasButton/>
                    <ImageButton/>
                    <ReportButton/>
                </div>
            </div>
        </div>
    )
}