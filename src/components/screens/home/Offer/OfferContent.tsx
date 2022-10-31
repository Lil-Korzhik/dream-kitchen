import { FC } from 'react';
import Image from 'next/image';

import Button from '@components/ui/Button/Button';

import { IOfferContent } from '@shared/interfaces/Offer/IOfferContent';

import offerData from '@data/offerData.json';
import styles from './Offer.module.scss';

const OfferContent: FC = () => {
    const offerContent: IOfferContent = offerData.content;

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                {offerContent.title} <span className={styles.color_title}>{offerContent.colorTitle}</span>
            </h1>
            <p className={styles.description}>{offerContent.description}</p>
            <Button type="anchor" text={offerContent.buttonText} href={offerContent.buttonAnchor} className="theme" customClass={styles.button} />
        </div>
    );
}

export default OfferContent;