import { FC } from 'react';
import Image from 'next/image';

import IWhatItem from '@shared/interfaces/What/IWhatItem';

import anchorClick from '@helpers/anchorClick';
import styles from './What.module.scss';

const WhatItem: FC<IWhatItem> = ({imgUrl, title, description}) => {
    return (
        <li className={styles.item}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <Image src={imgUrl} blurDataURL={imgUrl} alt={title} layout="fill" placeholder="blur" />
                </div>

                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>

            <a href="#consultation" className={styles.button} onClick={anchorClick}>Order now</a>
        </li>
    );
}

export default WhatItem;