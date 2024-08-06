import mongoose from "mongoose";
import envoroments from "./config/_ENV";
import app from "./app";

async function main() {
    // await mongoose.connect(envoroments.mongodb as string);
    await mongoose.connect("mongodb+srv://Siam4201:Asik1234*@cluster0.yb7xjgu.mongodb.net/fitness-club");

    app.listen(envoroments.port, () => {
        console.log(`SEVER RUNING AT ${envoroments.port}`);
    })
}

main();