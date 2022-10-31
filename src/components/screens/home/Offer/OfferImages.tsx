import { FC } from 'react';
import Image from 'next/image';

import styles from './Offer.module.scss';

const OfferImages: FC = () => {
    return (
        <div className={styles.images}>
            <div className={styles.images_column}>
                <div className={styles.image}>
                    <Image src="/img/home/offer/img-1.jpg" width={305} height={350} />
                </div>
                <div className={styles.image}>
                    <Image src="/img/home/offer/img-2.jpg" width={200} height={102} />
                </div>
            </div>
            <div className={styles.images_column}>
                <div className={styles.image}>
                    <Image src="/img/home/offer/img-3.jpg" width={390} height={210} />
                </div>
                <div className={styles.image}>
                    <Image src="/img/home/offer/img-4.jpg" width={285} height={110} />
                </div>
                <div className={styles.image}>
                    <Image src="/img/home/offer/img-3.jpg" width={390} height={164} />
                </div>
            </div>
        </div>
    );
}

export default OfferImages;