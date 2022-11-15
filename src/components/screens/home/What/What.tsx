import { FC } from 'react';

import WhatItem from './WhatItem';

import whatData from '@data/what.json';
import IWhat from '@shared/interfaces/What/IWhat';

import styles from './What.module.scss';

const What = () => { 
    const {section, list}: IWhat = whatData;

    return (
        <section className={styles.section} id={section.id}>
            <div className="container">
                <h2 className={styles.section_title}>{section.title}</h2>
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