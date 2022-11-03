import { FC } from 'react';

import FeaturesData from '@data/features.json';
import IFeatures from '@shared/interfaces/Features/IFeatures';

import FeaturesItem from './FeaturesItem';

import styles from './Features.module.scss';
import Image from 'next/image';

const Features: FC = () => {
    const {sectionTitle, list}: IFeatures = FeaturesData;

    return (
        <section className={styles.section} id="features">
            <div className="container">
                <h2 className={styles.section_title}>{sectionTitle}</h2>
                <ul className={styles.list}>
                    {list.map(({title, description, image, alt}, index) => (
                        <FeaturesItem title={title} description={description} image={image} alt={alt} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Features;