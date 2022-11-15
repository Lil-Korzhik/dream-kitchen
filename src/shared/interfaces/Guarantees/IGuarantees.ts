import ISection from '../ISection';
import IGuaranteesItem from './IGuaranteesItem';

export default interface IGuarantees {
    section: ISection;
    list: IGuaranteesItem[]
}