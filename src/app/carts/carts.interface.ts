
export interface TCarts {
    user: String,
    product: String,
    price: String,
    discount: Number,
    deliveryAddress: {
        FullName: String,
        Phone: String,
        Area: String,
        Address: String
    },
    thumnail: String,
    isCancel: Boolean
}