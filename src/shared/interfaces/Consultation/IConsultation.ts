import IConsultationButton from './IConsultationButton';
import IConsultationImage from './IConsultationImage';

export default interface IConsultation {
    title: string;
    description: string;
    button: IConsultationButton,
    image: IConsultationImage
}