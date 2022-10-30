import { FC } from 'react';
import Link from 'next/link';
import { IMenuItem } from '@shared/interfaces/IMenuItem';

import styles from './Menu.module.scss';

const MenuItem: FC<IMenuItem> = ({text, href}) => {
    const handleClick = () => {

    }
    
    return (
        <li className={styles.item}>
            <Link href={href}>
                <a className={styles.link} onClick={handleClick}>{text}</a>
            </Link>
        </li>
    );
}

export default MenuItem;