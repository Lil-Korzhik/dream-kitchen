import { FC } from 'react';

import proudData from '@data/proud.json';
import IProud from '@shared/interfaces/Proud/IProud';

import ProudItem from './ProudItem';

import styles from './Proud.module.scss';
import Image from 'next/image';

const Proud: FC = () => {
    const {sectionTitle, list}: IProud = proudData;

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.section_title}>{sectionTitle}</h2>
                <ul className={styles.list}>
                    {list.map(({title, description, image}, index) => (
                        <ProudItem title={title} description={description} image={image} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Proud;