import { MutableRefObject } from 'react';

const showError = (text: string, target: HTMLInputElement | MutableRefObject<HTMLInputElement>) => {
    const targetNode = 'current' in target ? target.current : target;

    targetNode.classList.add('wrong');
    targetNode.nextElementSibling.classList.toggle('error_show');
    targetNode.nextElementSibling.innerHTML = text;
}

export default showError;