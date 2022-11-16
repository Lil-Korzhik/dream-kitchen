import IFaqSection from './IFaqSection';
import IFaqItem from './IFaqItem';

export default interface IFaq {
    section?: IFaqSection;
    list: IFaqItem[]
}