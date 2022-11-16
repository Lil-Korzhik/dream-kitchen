import IContactsLink from './IContactsLink';
import ISocialsItem from './ISocialsItem';

export default interface IContacts {
    place: string;
    phone: string;
    text: string;
    link: IContactsLink
    socials: ISocialsItem[]
}