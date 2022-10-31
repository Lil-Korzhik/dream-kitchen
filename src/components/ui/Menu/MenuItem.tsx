import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import { IMenuItem } from '@shared/interfaces/IMenuItem';

import styles from './Menu.module.scss';

const MenuItem: FC<IMenuItem> = ({text, href, type}) => {
    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const anchor = document.querySelector(href);
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