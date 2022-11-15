import { FormEvent } from 'react';
import IFields from '@helpers/tg-request/interfaces/IFields';

import getCurrentDate from '@helpers/getCurrentDate';
import compareDate from '@helpers/compareDate';

import validateFields from './validateFields';
import createMessage from './createMessage';
import sendMessage from './sendMessages';
import Swal from 'sweetalert2';

const submitHandle = (e: FormEvent, fields: IFields) => {
    e.preventDefault();

    const formSubmitExpired = localStorage.getItem('formSubmitExpired');

    if(formSubmitExpired && !compareDate(formSubmitExpired)) {
        Swal.fire({
            title: 'Try in 1 minute!',
            text: `Don't submit the form so often.`,
            icon: 'error'
        });
        return;
    }

    const isValidate = validateFields(fields);
    if(isValidate) {
        const message = createMessage(fields);
        sendMessage(message);

        Swal.fire({
            title: `Congratulations ${fields.name.value}!`,
            text: `You signed up for a free consultation on the design and installation of the kitchen.`,
            confirmButtonText: 'Ready',
            icon: 'success'
        });

        localStorage.setItem('formSubmitExpired', getCurrentDate());
    }
}

export default submitHandle;