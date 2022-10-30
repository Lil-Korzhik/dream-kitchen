import { FC, MouseEventHandler } from 'react';
import Link from 'next/link';

import styles from './Button.module.scss';

type Props = {
    type: 'button' | 'anchor' | 'link',
    className?: string,
    text: string,
    href?: string,
    customClass?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Props> = ({type, className = '', text, href = '#', handleClick, customClass = ''}) => {
    const style = `${styles.default} ${styles[className]} ${customClass}`;

    return (
        <div className={styles.wrapper}>
            {type === 'button' ? 
            <button type={type} className={style} onClick={handleClick} aria-label={text}>
                {text}
            </button> : true}

            {type === 'anchor' ? 
            <a href={href} className={style}>
                {text}
            </a> : true}
            
            {type === 'link' ? 
            <Link href={href}>
                <a className={style}>{text}</a>
            </Link> : true}
        </div>
    );
}

export default Button;