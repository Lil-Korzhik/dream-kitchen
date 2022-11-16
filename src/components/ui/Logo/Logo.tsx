import { FC } from 'react';

import LogoData from '@data/logo.json';
import ILogo from '@shared/interfaces/ILogo';

import anchorClick from '@helpers/anchorClick';
import styles from './Logo.module.scss';

const Logo: FC = () => {
    const {title, description}: ILogo = LogoData;

    return (
        <a href="#offer" className={styles.wrapper} onClick={anchorClick}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </a>
    );
}

export default Logo;