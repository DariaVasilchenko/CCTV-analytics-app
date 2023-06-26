import React from "react";
import {CamerasButton} from "./CamerasButton";
import { ImageButton } from "./ImageButton";
import './MenuPage.css'
import {TopComponent_2} from "../TopComponent_2";
import '../TopComponent.css'

export const MenuPage_2 = () => {
    return (
        <div>
            <div>
                <TopComponent_2/>
            </div>
            <div className={"menu"}>
                <CamerasButton/>
                <ImageButton/>
            </div>
        </div>
    )
}