import { config } from "dotenv";

config();

export default{
    app:{
        PORT: process.env.PORT || 8080
    },
    mongo:{
        URL: process.env.MONGO_URL
    }
}