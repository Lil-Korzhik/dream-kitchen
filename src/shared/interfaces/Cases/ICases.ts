import ICasesButton from './ICasesButton';
import ICasesImage from './ICasesImage';
import ICasesImages from './ICasesImages';

export default interface ICases {
    sectionTitle: string;
    button: ICasesButton,
    image: ICasesImage,
    images: ICasesImages
}