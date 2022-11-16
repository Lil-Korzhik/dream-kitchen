import IFaqTitle from './IFaqTitle';

export default interface IFaqSection {
    title: IFaqTitle;
    description: string;
    id?: string;
}