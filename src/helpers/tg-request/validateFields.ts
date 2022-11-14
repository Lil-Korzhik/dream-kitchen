import IFields from '@shared/interfaces/Consultation/IFields';
import clearInputs from './clearInputs';

const validateFields = (fields: IFields) => {
    let result = true;

    clearInputs(fields);
    for(const key in fields) {
        const field = fields[key];
        const target = 'current' in field.target ? field.target.current : field.target;

        if(!field.value || !field.text || !field.smile) {
            if(result !== false) result = false;
            target.classList.add('wrong');
            target.nextElementSibling.innerHTML = `Write your ${field.text}`;
        }
    }

    return result;
}

export default validateFields;