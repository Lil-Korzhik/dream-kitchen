import { FC, useRef, useState } from 'react';

import receiveData from '@data/receive.json';
import IReceive from '@shared/interfaces/Receive/IReceive';

import ReceiveItem from './ReceiveItem';

import styles from './Receive.module.scss';

const Receive: FC = () => {
    const {sectionTitle, list}: IReceive = receiveData;
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const listRef = useRef<HTMLUListElement>(null);

    const prev = () => {
        if(activeIndex === 0) {
            setActiveIndex(list.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }

    const next = () => {
        if(activeIndex + 1 === list.length) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }

    return (
        <section className={styles.section} id="what-client-receive">
            <div className="container">
                <div className={styles.section_row}>
                    <h2 className={styles.section_title}>{sectionTitle}</h2>
                    <div className={styles.arrows}>
                        <button type="button" className={styles.arrows_prev} onClick={prev}></button>
                        <button type="button" className={styles.arrows_next} onClick={next}></button>
                    </div>
                </div>

                <ul className={styles.list} ref={listRef}>
                    {list.map(({title, description, image}, index) => (
                        <ReceiveItem title={title} description={description} image={image} key={index} isActive={activeIndex === index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Receive;