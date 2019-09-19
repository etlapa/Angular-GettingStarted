export interface IProduct{
    productId:      Number,
    productName:    String,
    productCode:    String,
    //FIXME: Date is not supported as string
    releaseDate:    String,
    description:    String,
    price:          Number,
    starRating:     Number,
    imageUrl:       String;
    // calculateDiscount(percent: Number): Number;
}