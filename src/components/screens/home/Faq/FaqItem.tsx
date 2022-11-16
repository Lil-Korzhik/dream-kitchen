import { FC, useRef } from 'react';
import IFaqItem from '@shared/interfaces/Faq/IFaqItem';
import styles from './Faq.module.scss';

interface Props extends IFaqItem {
    onToggle: () => void;
    active: boolean;
}

const FaqItem: FC<Props> = ({question, answer, onToggle, active}) => {
    const answerWrapper = useRef<HTMLDivElement>(null);

    return (
        <li className={styles.item}>
            <button type="button" className={`${styles.button} ${active ? styles.button_active : ''}`} onClick={onToggle}>
                <p className={styles.question}>{question}</p>
            </button>
            <div ref={answerWrapper} className={styles.answer_wrapper} style={active ? {height: answerWrapper?.current?.scrollHeight} : {height: 0}}>
                <div className={styles.answer}>{answer}</div>
            </div>
        </li>
    );
}

export default FaqItem;