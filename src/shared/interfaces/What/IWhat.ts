import ISection from '../ISection';
import IWhatItem from './IWhatItem';

export default interface IWhat {
    section: ISection;
    list: IWhatItem[]
}