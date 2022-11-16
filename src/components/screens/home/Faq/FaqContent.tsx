import { FC } from 'react';
import IFaqSection from '@shared/interfaces/Faq/IFaqSection';
import styles from './Faq.module.scss';

const FaqContent: FC<IFaqSection> = ({title, description}) => {
    const {text, color} = title;

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>{text} <span className={styles.title_color}>{color}</span></h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default FaqContent;