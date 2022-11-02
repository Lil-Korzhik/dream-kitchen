import { FC } from 'react';
import Image from 'next/image';

import Button from '@components/ui/Button/Button';

import IOfferContent from '@shared/interfaces/Offer/IOfferContent';
import offerData from '@data/offer.json';

import styles from './Offer.module.scss';

const OfferContent: FC = () => {
    const {title, description, button}: IOfferContent = offerData.content;

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                {title.text} 
                <span className={styles.color_title}>
                    {title.dedicated}
                </span>
            </h1>
            <p className={styles.description}>{description}</p>
            <Button type="anchor" 
                    text={button.text} 
                    href={button.anchor} 
                    className="theme" 
                    customClass={styles.button} />
        </div>
    );
}

export default OfferContent;