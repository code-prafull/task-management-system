import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/db.js"; // path apne project ke hisab se

dotenv.config();

connectDB();

const PORT = process.env.PORT;
console.log("CLIENT_URL:", process.env.CLIENT_URL);
console.log("CLIENT_URL =", JSON.stringify(process.env.CLIENT_URL));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});