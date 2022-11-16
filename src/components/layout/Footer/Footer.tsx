import { FC } from 'react';

import Logo from '@components/ui/Logo/Logo';
import Menu from '@components/ui/Menu/Menu';

import FooterContacts from './FooterContacts';
import FooterInfo from './FooterInfo';

import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <Logo />
                        <Menu place="footer" />
                    </div>
                    <FooterContacts />
                </div>

                <FooterInfo />
            </div>
        </footer>
    );
}

export default Footer;