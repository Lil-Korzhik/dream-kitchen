import { FC } from 'react';
import IInfoItem from '@shared/interfaces/Info/IInfoItem';
import styles from './Info.module.scss';

const InfoItem: FC<IInfoItem> = ({title, description}) => {
    return (
        <li className={styles.item}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default InfoItem;