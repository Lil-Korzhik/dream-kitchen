import { FC } from 'react';

import WhatItem from './WhatItem';
import IWhatItem from '@shared/interfaces/IWhatItem';

import whatData from '@data/what.json';

import styles from './What.module.scss';

const What = () => { 
    const list: IWhatItem[] = whatData.list;

    return (
        <section className={styles.section} id="what-we-offer">
            <div className="container">
                <h2 className={styles.section_title}>{whatData.sectionTitle}</h2>
                <ul className={styles.list}>
                    {list.map(({imgUrl, title, description}, index) => (
                        <WhatItem imgUrl={imgUrl} title={title} description={description} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default What;