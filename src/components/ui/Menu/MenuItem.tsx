import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import { IMenuItem } from '@shared/interfaces/IMenuItem';

import styles from './Menu.module.scss';

interface Props extends IMenuItem {
    toggleMenu: () => void;
}

const MenuItem: FC<Props> = ({text, href, type, toggleMenu}) => {
    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const anchor = document.querySelector(href);

        if(window.screen.width < 993) toggleMenu();
        anchor?.scrollIntoView({behavior: 'smooth'});

        e.preventDefault();
    }
    
    return (
        <li className={styles.item}>
            {type === 'link' &&
            <Link href={href}>
                <a className={styles.link}>{text}</a>
            </Link>}

            {type === 'anchor' &&
            <a href={href} className={styles.link} onClick={anchorHandleClick}>
                {text}
            </a>}
        </li>
    );
}

export default MenuItem;