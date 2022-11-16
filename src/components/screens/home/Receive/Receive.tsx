import { FC, useEffect, useRef, useState, MouseEvent, useMemo } from 'react';
import reverseSign from '@helpers/reverseSign';

import receiveData from '@data/receive.json';
import IReceive from '@shared/interfaces/Receive/IReceive';

import ReceiveItem from './ReceiveItem';

import styles from './Receive.module.scss';

type ClicksType = {
    prev: boolean,
    next: boolean,
    hover: boolean
    delay: number
}

const Receive: FC = () => {
    const {section, list}: IReceive = receiveData;

    const listRef = useRef<HTMLUListElement>(null);
    const listNode = listRef.current;

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [itemWidth, setItemWidth] = useState<number>(0);
    const [clicks, setClicks] = useState<ClicksType>({
        prev: true, 
        next: true, 
        hover: true, 
        delay: 300
    });

    useEffect(() => {
        setItemWidth(listRef.current.children[0].clientWidth + 30);
    }, [listRef]);

    let scrollOptions: ScrollToOptions = {
        behavior: 'smooth',
        left: 0
    }

    const prev = () => {
        if(!clicks.prev) return;
        const scrollLeft = listNode.scrollLeft;

        if(activeIndex === 0) {
            scrollOptions.left = listNode.clientWidth + 20;
            setActiveIndex(list.length - 1);
        } else {
            scrollOptions.left = reverseSign(scrollLeft > itemWidth ? scrollLeft - itemWidth : itemWidth);
            setActiveIndex(activeIndex - 1);
        }

        listNode.scrollBy(scrollOptions);

        if(window.screen.width < 769) {
            setClicks((prev: ClicksType) => ({...prev, prev: false}));
            setTimeout(() => {
                setClicks((prev: ClicksType) => ({...prev, prev: true}));
            }, clicks.delay);
        }
    }

    const next = () => {
        if(!clicks.next) return;
        const scrollLeft = 10000;

        if(activeIndex + 1 === list.length) {
            scrollOptions.left = reverseSign(scrollLeft);
            setActiveIndex(0);
        } else {
            scrollOptions.left = itemWidth;
            setActiveIndex(activeIndex + 1);
        }

        listNode.scrollBy(scrollOptions);

        if(window.screen.width < 769) {
            setClicks((prev: ClicksType) => ({...prev, next: false}));
            setTimeout(() => {
                setClicks((prev: ClicksType) => ({...prev, next: true}));
            }, clicks.delay);
        }
    }

    const hover = (e: MouseEvent) => {
        if(window.screen.width > 768) {
            const target = (e.target as HTMLLIElement).closest('li');
            const targetIndex = [...listNode.children].indexOf(target);
            
            setActiveIndex(targetIndex);
        }
    }

    return (
        <section className={styles.section} id={section.id}>
            <div className="container">
                <div className={styles.section_row}>
                    <h2 className={styles.section_title}>{section.title}</h2>
                    <div className={styles.arrows}>
                        <button type="button" className={styles.arrows_prev} onClick={prev} disabled={!clicks.prev} aria-label="Previous Item"></button>
                        <button type="button" className={styles.arrows_next} onClick={next} disabled={!clicks.next} aria-label="Next Item"></button>
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