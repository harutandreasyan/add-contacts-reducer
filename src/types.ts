import { Dispatch } from "react";

export interface IContact {
    id: number;
    name: string;
    phone: string;
}

export interface IState {
    contacts: IContact[];
}

export interface IAction {
    type: Types;
    payload: unknown;
}

export enum Types {
    SET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
}

export interface IContext {
    state: IState;
    dispatch: Dispatch<IAction>;
}
