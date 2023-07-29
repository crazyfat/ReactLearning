import {SUBMIT} from "../constant";
import {PersonObj} from "../interface";

export const addPerson = (personObj: PersonObj) =>({ type: SUBMIT, data: personObj })
