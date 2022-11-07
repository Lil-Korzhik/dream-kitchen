import { FC } from 'react';
import Image from 'next/image';

import consultationData from '@data/consultation.json';
import IConsultation from '@shared/interfaces/Consultation/IConsultation';

import Button from '@components/ui/Button/Button';

import styles from './Consultation.module.scss';

const Consultation: FC = () => {
    const {title, description, button, image}: IConsultation = consultationData;
    const {url, alt} = image;

    return (
        <section className={styles.section} id="consultation">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <Image src={url} blurDataURL={url} alt={alt} layout="fill" placeholder="blur" />
                    </div>

                    <form className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>

                        <input type="text" placeholder="Name" name="ex-name" className={styles.input} />
                        <input type="tel" placeholder="Phone" name="ex-phone" className={styles.input} />

                        <Button type="button" text={button.text} className="white_ghost" customClass={styles.button} />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Consultation;