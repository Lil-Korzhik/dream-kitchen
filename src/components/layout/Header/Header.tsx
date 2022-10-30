import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import Menu from '@components/ui/Menu/Menu';
import Button from '@components/ui/Button/Button';
import useWindowSize from '@hooks/useWindowSize';

import styles from './Header.module.scss';

const Header: FC = () => {
    const windowSize = useWindowSize();
    const [buttonText, setButtonText] = useState<string>('Discuss the kitchen');

    useEffect(() => {
        if(windowSize.width > 478) {
            setButtonText('Discuss the kitchen');
        } else {
            setButtonText('Discuss');
        }
    }, [windowSize]);

    return (
        <header className={styles.wrapper} id="header">
            <div className="container">
                <nav className={styles.navigation}>
                    <Link href='/'>
                        <a className={styles.logo}>Dream Kitchen</a>
                    </Link>

                    <div className={styles.right}>
                        <Menu place="header" />
                        <Button type="anchor" text={buttonText} href="#consultation" className="theme" customClass={styles.button} />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;