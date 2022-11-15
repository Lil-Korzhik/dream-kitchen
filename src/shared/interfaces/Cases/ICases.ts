import ISection from '../ISection';
import ICasesButton from './ICasesButton';
import ICasesImage from './ICasesImage';
import ICasesImages from './ICasesImages';

export default interface ICases {
    section: ISection;
    button: ICasesButton;
    image: ICasesImage;
    images: ICasesImages;
}