import { FC } from 'react';

import GuaranteesData from '@data/guarantees.json';
import IGuarantees from '@shared/interfaces/Guarantees/IGuarantees';

import styles from './Guarantees.module.scss';
import GuaranteesItem from './GuaranteesItem';

const Guarantees: FC = () => {
    const {section, list}: IGuarantees = GuaranteesData;

    return (
        <section className={styles.section} id={section.id}>
            <div className="container">
                <h2 className={styles.section_title}>{section.title}</h2>

                <ul className={styles.list}>
                    {list.map(({icon, title, description}, index) => (
                        <GuaranteesItem icon={icon} title={title} description={description} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Guarantees;