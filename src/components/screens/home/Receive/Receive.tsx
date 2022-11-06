import { FC, useEffect, useRef, useState, MouseEvent } from 'react';
import reverseSign from '@helpers/reverseSign';

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
        setItemWidth(listRef.current.children[0].clientWidth + 30);
    }, [listRef]);

    let scrollOptions: ScrollToOptions = {
        behavior: 'smooth',
        left: 0
    }

    const prev = () => {
        const scrollLeft = listNode.scrollLeft;

        if(activeIndex === 0) {
            scrollOptions.left = listNode.clientWidth + 20;
            setActiveIndex(list.length - 1);
        } else {
            scrollOptions.left = reverseSign(scrollLeft > itemWidth ? scrollLeft - itemWidth : itemWidth);
            setActiveIndex(activeIndex - 1);
        }

        listNode.scrollBy(scrollOptions);
    }

    const next = () => {
        const scrollLeft = listNode.scrollLeft;

        if(activeIndex + 1 === list.length) {
            scrollOptions.left = reverseSign(scrollLeft);
            setActiveIndex(0);
        } else {
            scrollOptions.left = itemWidth;
            setActiveIndex(activeIndex + 1);
        }

        listNode.scrollBy(scrollOptions);
    }

    const hover = (e: MouseEvent) => {
        const target = (e.target as HTMLLIElement).closest('li');
        const targetIndex = [...listNode.children].indexOf(target);

        const scrollLeft = listNode.scrollLeft;
        const offsetLeft = target.offsetLeft;

        scrollOptions.left = scrollLeft > offsetLeft ? reverseSign(scrollLeft - offsetLeft) : offsetLeft;
        scrollOptions.left -= 20;
        listNode.scrollBy(scrollOptions);

        setActiveIndex(targetIndex);
    }

    return (
        <section className={styles.section} id="what-client-receive">
            <div className="container">
                <div className={styles.section_row}>
                    <h2 className={styles.section_title}>{sectionTitle}</h2>
                    <div className={styles.arrows}>
                        <button type="button" className={styles.arrows_prev} onClick={prev} aria-label="Previous Item"></button>
                        <button type="button" className={styles.arrows_next} onClick={next} aria-label="Next Item"></button>
                    </div>
                </div>

                <ul className={styles.list} ref={listRef}>
                    {list.map(({title, description, image}, index) => (
                        <ReceiveItem title={title} 
                                     description={description} 
                                     image={image} 
                                     isActive={activeIndex === index}
                                     hover={hover} 
                                     key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Receive;