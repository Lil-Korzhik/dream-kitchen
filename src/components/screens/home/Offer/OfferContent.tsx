import { FC } from 'react';
import Image from 'next/image';

import Button from '@components/ui/Button/Button';

import offerData from '@data/offerData.json';
import styles from './Offer.module.scss';

const OfferContent: FC = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                {offerData.title} <span className={styles.color_title}>{offerData.colorTitle}</span>
            </h1>
            <p className={styles.description}>{offerData.description}</p>
            <Button type="anchor" text={offerData.buttonText} href="#consultation" className="theme" customClass={styles.button} />
        </div>
    );
}

export default OfferContent;