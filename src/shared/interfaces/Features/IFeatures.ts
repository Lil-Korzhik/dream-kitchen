import ISection from '../ISection';
import IFeaturesItem from './IFeaturesItem';

export default interface IFeatures {
    section: ISection;
    list: IFeaturesItem[];
}