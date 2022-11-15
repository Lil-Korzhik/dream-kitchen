import { FC, useState, useRef, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';

import consultationData from '@data/consultation.json';
import IConsultation from '@shared/interfaces/Consultation/IConsultation';
import IFields from '@helpers/tg-request/interfaces/IFields';

import Button from '@components/ui/Button/Button';

import {clearInput, clearInputs} from '@helpers/tg-request/clearInputs';
import submitHandle from '@helpers/tg-request/submitHandle';
import styles from './Consultation.module.scss';

import ReCAPTCHA from 'react-google-recaptcha';

const Consultation: FC = () => {
    const {section, description, button, image}: IConsultation = consultationData;
    const {url, alt} = image;

    const nameInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);

    const [fields, setFields] = useState<IFields | {}>({
        name: {text: 'Name', target: nameInputRef},
        phone: {text: 'Phone', target: phoneInputRef}
    });

    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = (e.target as HTMLInputElement);
        clearInput({target});
        
        const {name, value} = target;
        const text = target.dataset.text,
              smile = target.dataset.smile;

        setFields(prev => {
            return {...prev, [name]: {
                smile,
                text,
                value,
                target
            }};
        });
    }

    return (
        <section className={styles.section} id={section.id}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <Image src={url} blurDataURL={url} alt={alt} layout="fill" placeholder="blur" />
                    </div>

                    <form className={styles.content} onSubmit={e => submitHandle(e, fields)}>
                        <h2 className={styles.title}>{section.title}</h2>
                        <p className={styles.description}>{description}</p>

                        <div className={styles.input_wrapper}>
                            <input type="text" placeholder="Name" name="name" data-text="Name" data-smile="🧑" className={styles.input} ref={nameInputRef} onInput={handleChange} />
                            <p className={styles.error}>-</p>
                        </div>

                        <div className={styles.input_wrapper}>
                            <input type="tel" placeholder="Phone" name="phone" data-text="Phone" data-smile="📞" className={styles.input} ref={phoneInputRef} onInput={handleChange} />
                            <p className={styles.error}>-</p>
                        </div>

                        <Button type="submit" text={button.text} className="white_ghost" customClass={styles.button} disabled={isDisabled} />

                        <ReCAPTCHA 
                            sitekey={'6LdQVDofAAAAALRegj3qW45OiCuw0AlQeZN-YTRJ'} 
                            style={{marginTop: 20}}
                            onChange={() => setIsDisabled(!isDisabled)} />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Consultation;