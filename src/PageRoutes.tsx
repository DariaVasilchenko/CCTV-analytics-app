import React from "react";
import { Route }  from 'react-router';
import { Routes } from "react-router";
import {UsersPage} from "./components/UsersPage/UsersPage";
import {LogInPage} from "./components/LogInPage/LogInPage";
import {EventReportPage} from "./components/EventReportPage/EventReportPage";
import {MenuPage} from "./components/MenuPage/MenuPage";
import {AddUserPage} from "./components/AddUserPage/AddUserPage";
import {UserInfoPage} from "./components/UserInfoPage/UserInfoPage";
import { VideoDetection_2 } from "./components/CamerasPage/VideoDetection-2";
import { ImageDetection_2 } from "./components/CamerasPage/ImageDetection-2";
import { MenuPage_2 } from "./components/MenuPage_2/MenuPage_2";
import { VideoDetection_2_2 } from "./components/CamerasPage_2/VideoDetection-2";
import { ImageDetection_2_2 } from "./components/CamerasPage_2/ImageDetection-2";

export const PageRoutes = () => {
  return (
    <Routes>
        <Route element={<LogInPage/>} path={'/'}/>
        <Route element={<UsersPage/>} path={'/UsersPage'}/>
        <Route element={<VideoDetection_2/>} path={'/VideoDetectionPage'}/>
        <Route element={<ImageDetection_2/>} path={'/ImageDetectionPage'}/>
        <Route element={<EventReportPage/>} path={'/EventReportPage'}/>
        <Route element={<MenuPage/>} path={'/MenuPage'}/>
        <Route element={<AddUserPage/>} path={'/AddUserPage'}/>
        <Route element={<UserInfoPage/>} path={'/UserInfoPage'}/>
        <Route element={<MenuPage_2/>} path={'/MenuPage_2'}/>
        <Route element={<VideoDetection_2_2/>} path={'/VideoDetectionPage_2'}/>
        <Route element={<ImageDetection_2_2/>} path={'/ImageDetectionPage_2'}/>
    </Routes>
  )
}