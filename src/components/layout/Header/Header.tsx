import { FC, RefObject, useEffect, useState } from 'react';
import Link from 'next/link';

import Menu from '@components/ui/Menu/Menu';
import Button from '@components/ui/Button/Button';
import useWindowSize from '@hooks/useWindowSize';

import styles from './Header.module.scss';

type Props = {
    isSticky: boolean,
    headerRef: RefObject<HTMLElement>
}

const Header: FC<Props> = ({isSticky, headerRef}) => {
    const [buttonText, setButtonText] = useState<string>('Discuss the kitchen');
    const windowSize = useWindowSize();

    useEffect(() => {
        if(windowSize.width > 478) {
            setButtonText('Discuss the kitchen');
        } else {
            setButtonText('Discuss');
        }
    }, [windowSize]);

    return (
        <header className={`${styles.wrapper} ${isSticky ? styles.sticky : ''}`} id="header" ref={headerRef}>
            <div className="container">
                <nav className={styles.navigation}>
                    <span className={styles.logo}>
                        <Link href='/'>
                            Dream Kitchen
                        </Link>
                        <p className={styles.logo_desc}>Orient LLC</p>
                    </span>
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