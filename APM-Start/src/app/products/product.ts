export interface IProduct{
    productId:      number,
    productName:    string,
    productCode:    string,
    //FIXME: Date is not supported as string
    releaseDate:    string,
    description:    string,
    price:          number,
    starRating:     number,
    imageUrl:       string
    calculateDiscount(percent: number): number;
}