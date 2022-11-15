import ISection from '../ISection';
import IReceiveItem from './IReceiveItem';

export default interface IReceive {
    section: ISection;
    list: IReceiveItem[]
}