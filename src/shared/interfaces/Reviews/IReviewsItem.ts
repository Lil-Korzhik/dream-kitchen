import IReviewsImage from './IReviewsImage';

export default interface IReviewsItem {
    title: string;
    description: string;
    href: string;
    image: IReviewsImage;
}