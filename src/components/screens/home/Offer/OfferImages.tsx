import { FC } from 'react';
import Image from 'next/image';

import { IOfferImage } from '@shared/interfaces/Offer/IOfferImage';

import offerData from '@data/offerData.json';
import styles from './Offer.module.scss';

const OfferImages: FC = () => {
    const firstColumnImages: IOfferImage[] = offerData.images.filter(({column}) => column === 1),
          secondColumnImages: IOfferImage[] = offerData.images.filter(({column}) => column === 2);

    return (
        <div className={styles.images}>
            <div className={styles.images_column}>
                {firstColumnImages.map(({url, width, height, alt}, index) => (
                    <div className={styles.image} key={index}>
                        <Image src={url} blurDataURL={url} placeholder="blur" width={width} height={height} alt={alt} />
                    </div>
                ))}
            </div>
            <div className={styles.images_column}>
                {secondColumnImages.map(({url, width, height, alt}, index) => (
                    <div className={styles.image} key={index}>
                        <Image src={url} blurDataURL={url} placeholder="blur" width={width} height={height} alt={alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfferImages;