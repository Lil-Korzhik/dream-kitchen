import { FC, useEffect, useRef, useState } from 'react';

import receiveData from '@data/receive.json';
import IReceive from '@shared/interfaces/Receive/IReceive';

import ReceiveItem from './ReceiveItem';

import styles from './Receive.module.scss';

const Receive: FC = () => {
    const {sectionTitle, list}: IReceive = receiveData;

    const listRef = useRef<HTMLUListElement>(null);
    const listNode = listRef.current;

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [itemWidth, setItemWidth] = useState<number>(0);

    useEffect(() => {
        setItemWidth(listRef.current.children[0].clientWidth);
    }, [listRef]);

    let scrollOptions: ScrollToOptions = {
        behavior: 'smooth',
        left: 0
    }

    const prev = () => {
        if(activeIndex === 0) {
            setActiveIndex(list.length - 1);
            scrollOptions.left = 10000;
        } else {
            setActiveIndex(activeIndex - 1);
            scrollOptions.left = (itemWidth + 30) * -1;
        }

        listNode?.scrollBy(scrollOptions);
    }

    const next = () => {
        if(activeIndex + 1 === list.length) {
            setActiveIndex(0);
            scrollOptions.left = -10000;
        } else {
            setActiveIndex(activeIndex + 1);
            scrollOptions.left = itemWidth + 30;
        }

        listNode?.scrollBy(scrollOptions);
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