import { FC, MouseEvent, MouseEventHandler } from 'react';
import Link from 'next/link';
import anchorClick from '@helpers/anchorClick';
import styles from './Button.module.scss';

type Props = {
    type: 'button' | 'submit' | 'anchor' | 'link',
    className?: string,
    text: string,
    href?: string,
    customClass?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

const Button: FC<Props> = ({type, className = '', text, href = '#', handleClick, disabled, customClass = ''}) => {
    const style = `${styles.default} ${styles[className]} ${customClass}`;

    return (
        <div className={styles.wrapper}>
            {type === 'button' &&
            <button type={type} className={style} onClick={handleClick} aria-label={text}>
                {text}
            </button>}

            {type === 'submit' &&
            <button type={type} className={style} onClick={handleClick} aria-label={text} disabled={!disabled ? false : disabled}>
                {text}
            </button>}

            {type === 'anchor' &&
            <a href={href} className={style} onClick={anchorClick}>
                {text}
            </a>}
            
            {type === 'link' &&
            <Link href={href}>
                <a className={style}>{text}</a>
            </Link>}
        </div>
    );
}

export default Button;