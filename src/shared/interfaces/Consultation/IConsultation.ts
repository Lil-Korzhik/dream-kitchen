import ISection from '../ISection';
import IConsultationButton from './IConsultationButton';
import IConsultationImage from './IConsultationImage';

export default interface IConsultation {
    section: ISection;
    description: string;
    button: IConsultationButton;
    image: IConsultationImage;
}