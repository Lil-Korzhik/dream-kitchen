import { MouseEvent } from 'react';

const anchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = (e.target as HTMLAnchorElement);
    const anchor = document.querySelector(target.getAttribute('href'));

    anchor?.scrollIntoView({behavior: 'smooth'});

    e.preventDefault();
}

export default anchorClick;