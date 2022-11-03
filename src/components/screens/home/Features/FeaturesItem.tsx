import { FC } from 'react';
import Image from 'next/image';

import IFeaturesItem from '@shared/interfaces/Features/IFeaturesItem';

import styles from './Features.module.scss';

const FeaturesItem: FC<IFeaturesItem> = ({title, description, image}) => {
    const {url, alt} = image;

    return (
        <li className={styles.item}>
            <div className={styles.image}>
                <Image src={url} blurDataURL={url} alt={alt} layout="fill" placeholder="blur" />
            </div>

            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default FeaturesItem;