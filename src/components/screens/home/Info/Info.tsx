import { FC } from 'react';

import InfoData from '@data/info.json';
import IInfo from '@shared/interfaces/Info/IInfo';

import InfoItem from './InfoItem';
import styles from './Info.module.scss';

const Info: FC = () => {
    const {sectionId, list}: IInfo = InfoData;

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <ul className={styles.list}>
                    {list.map(({title, description}, index) => (
                        <InfoItem title={title} description={description} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Info;