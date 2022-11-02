import { FC } from 'react';
import Image from 'next/image';

import offerData from '@data/offer.json';
import IOfferImages from '@shared/interfaces/Offer/IOfferImages';

import styles from './Offer.module.scss';

const OfferImages: FC = () => {
    const {columns, items}: IOfferImages  = offerData.images;

    const columnsArray = [];
    for(let i = 0; i < columns; i++) columnsArray.push(i + 1);

    return (
        <div className={styles.images}>
            {columnsArray.map((column, index) => {
                const images = items.filter(item => item.column === column);
                return (
                    <div className={styles.images_column} key={index}>
                        {images.map(({url, width, height, alt}, index) => (
                            <div className={styles.image} key={index}>

                                <Image src={url} blurDataURL={url} 
                                       width={width} height={height} 
                                       alt={alt} placeholder="blur"  />
                                       
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

export default OfferImages;