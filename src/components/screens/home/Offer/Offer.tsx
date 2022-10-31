import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import OfferContent from './OfferContent';
import OfferImages from './OfferImages';

import styles from './Offer.module.scss';

const Offer: FC = () => {
    return (
        <section className={styles.section} id="section-offer">
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