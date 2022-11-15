import ISection from '../ISection';
import IReviewsItem from './IReviewsItem';
import IReviewsButton from './IReviewsButton';

export default interface IReviews {
    section: ISection;
    list: IReviewsItem[],
    button: IReviewsButton
}