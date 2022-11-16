import { FC } from 'react';

import ContactsData from '@data/contacts.json';
import IContacts from '@shared/interfaces/Contacts/IContacts';
import ISocialsItem from '@shared/interfaces/Contacts/ISocialsItem';

import FooterSocialsItem from './FooterSocialsItem';

import styles from './Footer.module.scss';

const FooterSocials: FC = () => {
    const socials: ISocialsItem[] = ContactsData.socials;
    
    return (
        <ul className={styles.socials}>
            {socials.map(({href, image}, index) => (
                <FooterSocialsItem href={href} image={image} key={index} />
            ))}
        </ul>
    );
}

export default FooterSocials;