import { FC, MouseEvent, useRef } from 'react';
import Link from 'next/link';

import MenuItem from './MenuItem';
import { IMenuItem } from '@shared/interfaces/IMenuItem';

import menuData from '@data/menuData.json';
import styles from './Menu.module.scss';

type Props = { 
    place: 'header' | 'footer'
}

const Menu: FC<Props> = ({place}) => {
    const list: IMenuItem[] = menuData[place];
    const listRef = useRef<HTMLUListElement | null>(null);

    const toggleMenu = (e: MouseEvent) => {
        document.body.classList.toggle('lock-scroll');
        listRef.current?.classList.toggle(styles.show);
        (e.target as HTMLButtonElement).classList.toggle(styles.close_btn);
    }

    return (
        <div>
            <ul className={styles[`list_` + place]} ref={listRef}>
                {list.map(({text, href}, index) => (
                    <MenuItem text={text} href={href} key={index} />
                ))}
            </ul>

            {place === 'header' ? 
            <button type="button" aria-label="Toggle Menu" className={styles.open_btn} onClick={e => toggleMenu(e)}></button> 
            : true}
        </div>
    );
}

export default Menu;