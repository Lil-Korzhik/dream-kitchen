import { FC } from 'react';
import ISocialsItem from '@shared/interfaces/Contacts/ISocialsItem';
import styles from './Footer.module.scss';

const FooterSocialsItem: FC<ISocialsItem> = ({href, image}) => {
    return (
        <li className={styles.item}>
            <a href={href} className={styles.link}>
                <img src={image.url} alt={image.alt} className={styles.icon} />
            </a>
        </li>
    );
}

export default FooterSocialsItem;