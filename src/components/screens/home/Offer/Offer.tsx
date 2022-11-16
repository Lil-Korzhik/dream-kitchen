import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import offerData from '@data/offer.json';
import OfferContent from './OfferContent';
import OfferImages from './OfferImages';

import styles from './Offer.module.scss';

const Offer: FC = () => {
    const {sectionId} = offerData;

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <div className={styles.wrapper}>
                    <OfferContent />
                    <OfferImages />
                </div>
            </div>
        </section>
    );
}

export default Offer;