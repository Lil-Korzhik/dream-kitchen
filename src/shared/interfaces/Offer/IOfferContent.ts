import IOfferTitle from './IOfferTitle';
import IOfferButton from './IOfferButton';

export default interface IOfferContent {
    title: IOfferTitle;
    description: string;
    button: IOfferButton;
}