import IReviewsItem from './IReviewsItem';
import IReviewsButton from './IReviewsButton';

export default interface IReviews {
    sectionTitle: string;
    list: IReviewsItem[],
    button: IReviewsButton
}