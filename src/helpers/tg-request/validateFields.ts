import IFields from '@helpers/tg-request/interfaces/IFields';
import {clearInputs} from './clearInputs';
import showError from './showError';

const validateFields = (fields: IFields) => {
    let result = true;

    clearInputs(fields);
    for(const key in fields) {
        const field = fields[key];
        const target = 'current' in field.target ? field.target.current : field.target;

        if(!field.value || !field.text || !field.smile) {
            if(result !== false) result = false;
            showError(`Write your ${field.text}`, field.target);
        }
    }

    return result;
}

export default validateFields;