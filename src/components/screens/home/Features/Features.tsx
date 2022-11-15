import { FC } from 'react';

import FeaturesData from '@data/features.json';
import IFeatures from '@shared/interfaces/Features/IFeatures';

import FeaturesItem from './FeaturesItem';

import styles from './Features.module.scss';
import Image from 'next/image';

const Features: FC = () => {
    const {section, list}: IFeatures = FeaturesData;

    return (
        <section className={styles.section} id={section.id}>
            <div className="container">
                <h2 className={styles.section_title}>{section.title}</h2>
                <ul className={styles.list}>
                    {list.map(({title, description, image}, index) => (
                        <FeaturesItem title={title} description={description} image={image} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Features;