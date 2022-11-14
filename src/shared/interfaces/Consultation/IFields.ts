import { MutableRefObject } from "react";

export default interface IFields {
    [key: string]: {
        smile: string; 
        text: string;
        value: string;
        target: MutableRefObject<HTMLInputElement> | HTMLInputElement;
    }
}