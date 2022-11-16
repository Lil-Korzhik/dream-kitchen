import { FC } from 'react';

import ContactsData from '@data/contacts.json';
import IContacts from '@shared/interfaces/Contacts/IContacts';

import FooterSocials from './FooterSocials';

import styles from './Footer.module.scss';

const FooterContacts: FC = () => {
    const {place, phone}: IContacts = ContactsData;
    const phoneReplaced = phone.replace(/[^+\d]/g, '');

    return (
        <div className={styles.contacts}>
            <p className={styles.place}>{place}</p>
            <a href={`tel:${phoneReplaced}`} className={styles.phone}>{phone}</a>
            
            <FooterSocials />
        </div>
    );
}

export default FooterContacts;