//const { token, ApplicationId } = require("../config.json");
const dotenv = require("dotenv");
//dotenv.config({ path: "../.env" }); //Loads .env file contents into process.env by default. If DOTENV_KEY is present, it smartly attempts to load encrypted .env.vault file contents into process.env. /// Det truong hop no o thu muc khac thi phai kem path vao nhe

dotenv.config();
console.log(process.env.BOT_TOKEN);
