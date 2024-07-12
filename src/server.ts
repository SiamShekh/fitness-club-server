import mongoose from "mongoose";
import envoroments from "./config/_ENV";
import app from "./app";

async function main() {
    await mongoose.connect(envoroments.mongodb as string);

    app.listen(envoroments.port, () => {
        console.log(`SEVER RUNING AT ${envoroments.port}`);
    })
}

main();