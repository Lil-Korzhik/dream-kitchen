import { FC } from 'react';

import ReviewsData from '@data/reviews.json';
import IReviews from '@shared/interfaces/Reviews/IReviews';

import styles from './Reviews.module.scss';
import Button from '@components/ui/Button/Button';
import ReviewsItem from './ReviewsItem';

const Reviews: FC = () => {
    const {sectionTitle, list, button}: IReviews = ReviewsData;
    const listFilter = list.filter((item, index) => index <= 3);

    const buttonOptions = {
        text: button.text,
        href: button.href,
        className: 'theme_ghost'
    }

    return (
        <section className={styles.section} id="reviews">
            <div className="container">
                <div className={styles.section_row}>
                    <h2 className={styles.section_title}>{sectionTitle}</h2>
                    <Button type="link" {...buttonOptions} customClass={styles.section_button} />
                </div>

                <ul className={styles.list}>
                    {listFilter.map(({image, title, description, href}, index) => (
                        <ReviewsItem image={image} title={title} description={description} href={href} key={index} />
                    ))}
                </ul>

                <Button type="link" {...buttonOptions} customClass={styles.section_button_mobile} />
            </div>
        </section>
    );
}

export default Reviews;