export default interface IOfferImage {
    columns: number;
    items: {
        url: string;
        width: number;
        height: number;
        alt: string;
        column: number;
    }[]
}