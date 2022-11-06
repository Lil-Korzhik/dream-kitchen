import { FC, MouseEvent } from 'react';
import Image from 'next/image';

import IReceiveItem from '@shared/interfaces/Receive/IReceiveItem';

import styles from './Receive.module.scss';

interface Props extends IReceiveItem {
    isActive: boolean;
    hover: (e: MouseEvent) => void;
}

const ReceiveItem: FC<Props> = ({title, description, image, isActive, hover}) => {
    const {url, alt} = image;

    return (
        <li className={`${styles.item} ${isActive ? styles.active : ''}`} onMouseOver={hover}>
            <div className={styles.image}>
                <Image src={url} blurDataURL={url} alt={alt} layout="fill" placeholder="blur" />
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default ReceiveItem;