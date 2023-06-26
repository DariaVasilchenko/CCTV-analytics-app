import {API} from "../http-common";
import { DangerList, UserList, EventList, UserDetail, UserCreate, SpecificationList, EventDetail } from "../types/cctv-api";

const getAllDangers = () => {
    return API.get<Array<DangerList>>("/dangers");
};

const getUsersByOrganizationID = (id:number) => {
    return API.get<Array<UserList>>(`/users/${id}/`);
};

const getEventsByOrganizationID = (id:number) => {
    return API.get<Array<EventList>>(`/events/organizationID=${id}/`);
};

const getUserByLogin = (login: string) => {
    return API.get<UserDetail>(`/user/${login}`);
};

const getSpecifications = () => {
    return API.get<Array<SpecificationList>>("/specifications/");
}

const addUser = (data: UserCreate) => {
    return API.post<UserCreate>('/user/', data);
};

const addEvent = (data: FormData) => {
    return API.post<number>('/event/', data);
};

const updateUser = (id: number, data: UserDetail) => {
    return API.put<UserDetail>(`/user/${id}`, data);
};

const updateEvent = (id: number, data: FormData) => {
    return API.put<EventDetail>(`/event/update/${id}`, data);
};

const removeUser = (id: number) => {
    return API.delete(`/user/${id}`);
};

const CCTVApiService = {
    getAllDangers,
    getUsersByOrganizationID,
    getEventsByOrganizationID,
    getUserByLogin,
    getSpecifications,
    addUser,
    addEvent,
    updateUser,
    updateEvent,
    removeUser
};

export default CCTVApiService;