import { FC } from 'react';
import Image from 'next/image';

import { IWhatItem } from '@shared/interfaces/IWhatItem';

import styles from './What.module.scss';

const WhatItem: FC<IWhatItem> = ({imgUrl, title, description}) => {
    return (
        <li className={styles.item}>
            <div className={styles.image}>
                <Image src={imgUrl} blurDataURL={imgUrl} layout="fill" placeholder="blur" />
            </div>

            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>

            <a href="#consultation" className={styles.button}>Order now</a>
        </li>
    );
}

export default WhatItem;