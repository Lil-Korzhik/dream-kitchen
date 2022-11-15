import IField from '@helpers/tg-request/interfaces/IField';
import IFields from '@helpers/tg-request/interfaces/IFields';

const clearInput = (field: IField) => {
    const target = 'current' in field.target ? field.target.current : field.target;
    target.classList.remove('wrong');
    target.nextElementSibling.classList.remove('error_show');
}

const clearInputs = (fields: IFields) => {
    for(const key in fields) {
        const field = fields[key];
        const target = 'current' in field.target ? field.target.current : field.target;

        clearInput(field);
    }
}

export {clearInput, clearInputs};