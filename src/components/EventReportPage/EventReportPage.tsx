import React from "react";
import '../TopComponent.css'
import {TopComponent} from "../TopComponent";
import {Navigation} from "./Navigation";
import {EventReportTable} from "./EventReportTable";
import { useEffect, useState } from "react";
import { EventList } from "../../types/cctv-api";
import CCTVApiService from "../../services/CCTVApiService";

export const EventReportPage = () => {
    const [data, setData] = useState<Array<EventList>>();

    useEffect(() => {
        getEvents(1);
    });

    const getEvents = (id: number) => {
        CCTVApiService.getEventsByOrganizationID(id)
        .then((responce) => {
            setData(responce.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

  return (
      <div>
          <div>
              <TopComponent/>
          </div>
          <div className={"nav"}>
              <Navigation/>
          </div>
          <div>
              <EventReportTable data={data!}/>
          </div>
      </div>
  )
}