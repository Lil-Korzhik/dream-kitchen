import { MutableRefObject } from 'react';

export default interface IField {
    smile?: string; 
    text?: string;
    value?: string;
    target: MutableRefObject<HTMLInputElement> | HTMLInputElement;
}