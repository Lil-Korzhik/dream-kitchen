import { FC } from 'react';
import Image from 'next/image';

import IProudItem from '@shared/interfaces/Proud/IProudItem';

import styles from './Proud.module.scss';

const ProudItem: FC<IProudItem> = ({title, description, image}) => {
    return (
        <li className={styles.item}>
            <div className={styles.image}>
                <Image src={image} blurDataURL={image} layout="fill" placeholder="blur" />
            </div>

            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default ProudItem;