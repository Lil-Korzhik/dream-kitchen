import { FC } from 'react';

import ContactsData from '@data/contacts.json';
import IContacts from '@shared/interfaces/Contacts/IContacts';

import styles from './Footer.module.scss';

const FooterInfo: FC = () => {
    const {link, text}: IContacts = ContactsData;

    return (
        <div className={styles.info}>
            <a href={link.href} className={styles.link}>{link.text}</a>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default FooterInfo;