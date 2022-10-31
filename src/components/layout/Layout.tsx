import { FC, ReactNode, useState, useEffect, useRef } from 'react';

import { useAppDispatch } from '@store/hook';
import { hideLoader } from '@store/slices/loaderSlice';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from '@components/ui/Loader/Loader';

type Props = {children: ReactNode}

const Layout: FC<Props> = ({children}) => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);

    const headerRef = useRef<HTMLElement>(null);

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(hideLoader());
        setHeaderHeight(headerRef.current?.offsetHeight);

        window.addEventListener('scroll', () => {
            if(window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });
    }, []);

    return (
        <div className="next-layout">
            <Loader />
            <Header isSticky={isSticky} headerRef={headerRef} />
            <main style={{paddingTop: isSticky ? headerHeight : 0}}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;