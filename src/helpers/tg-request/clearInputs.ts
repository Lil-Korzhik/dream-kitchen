import IFields from '@shared/interfaces/Consultation/IFields';

const clearInputs = (fields: IFields) => {
    for(const key in fields) {
        const field = fields[key];
        const target = 'current' in field.target ? field.target.current : field.target;

        target.classList.remove('wrong');
        target.nextElementSibling.innerHTML = '';
    }
}

export default clearInputs;