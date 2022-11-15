import { FC } from 'react';
import Image from 'next/image';

import IGuaranteesItem from '@shared/interfaces/Guarantees/IGuaranteesItem';
import IGuaranteesIcon from '@shared/interfaces/Guarantees/IGuaranteesIcon';

import styles from './Guarantees.module.scss';
import hexToRGBA from '@helpers/hexToRGBA';

const GuaranteesItem: FC<IGuaranteesItem> = ({icon, title, description}) => {
    const {url, alt, color}: IGuaranteesIcon = icon;
    console.log(color)
    return (
        <li className={styles.item}>
            <div className={styles.icon_wrapper} style={{borderColor: hexToRGBA(color, 0.2)}}>
                <div className={styles.icon} style={{backgroundColor: hexToRGBA(color, 0.4)}}>
                    <Image src={url} blurDataURL={url} alt={alt} width={24} height={24} placeholder="blur" />
                </div>
            </div>

            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default GuaranteesItem;