import { FC } from 'react';

import FaqData from '@data/faq.json';
import IFaq from '@shared/interfaces/Faq/IFaq';
import IFaqSection from '@shared/interfaces/Faq/IFaqSection';

import FaqContent from './FaqContent';
import FaqList from './FaqList';

import styles from './Faq.module.scss';

const Faq: FC = () => {
    const {section, list}: IFaq = FaqData;
    const {title, description}: IFaqSection = section;

    return (
        <section className={styles.section} id={section.id}>
            <div className="container">
                <div className={styles.wrapper}>
                    <FaqContent title={title} description={description} />
                    <FaqList list={list} />
                </div>
            </div>
        </section>
    );
}

export default Faq;