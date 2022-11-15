import { FC } from 'react';
import Image from 'next/image';

import IReviewsItem from '@shared/interfaces/Reviews/IReviewsItem';

import styles from './Reviews.module.scss';

const ReviewsItem: FC<IReviewsItem> = ({image, title, description, href}) => {
    const {url, alt} = image;

    return (
        <li className={styles.item}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <Image src={url} blurDataURL={url} alt={alt} layout="fill" placeholder="blur" />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>

            <a href={href} className={styles.link}>See on Yelp</a>
        </li>
    );
}

export default ReviewsItem;