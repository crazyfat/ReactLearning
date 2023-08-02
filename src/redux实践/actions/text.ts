import {textConfig} from "../constants";
const {CLEAR, CONCAT} = textConfig;
export const clearText = () => ({ type: CLEAR, data:'' });
export const concatText = (value: string) => ({ type: CONCAT, data: value })