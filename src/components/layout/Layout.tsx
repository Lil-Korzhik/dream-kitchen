import { FC, ReactNode, useEffect } from 'react';

import { useAppDispatch } from '@store/hook';
import { hideLoader } from '@store/slices/loaderSlice';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from '@components/ui/Loader/Loader';

type Props = {children: ReactNode}

const Layout: FC<Props> = ({children}) => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(hideLoader());
    }, []);

    return (
        <div className="next-layout">
            <Loader />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;