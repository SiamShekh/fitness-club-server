export interface Tuser {
    name: String,
    email: String,
    phone: String,
    shiping: {
        street_address: String,
        city: String,
        state: String,
        postal: String,
        country: String
    },
    billing: {
        street_address: String,
        city: String,
        state: String,
        postal: String,
        country: String
    }
}