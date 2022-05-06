import express from "express";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import studentRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import staffuserRoutes from "./routes/staffuserRoutes.js";
import resultcheckerRoutes from "./routes/resultcheckerRoutes.js";
import jss1resultRoutes from "./routes/jss1resultRoutes.js";
import jss1result2ndtermRoutes from "./routes/jss1result2ndtermRoutes.js";
import ss1resultRoutes from "./routes/ss1resultRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/staffusers", staffuserRoutes);
app.use("/api/resultcheckers", resultcheckerRoutes);
app.use("/api/jss1results", jss1resultRoutes);
app.use("/api/jss1results2ndterm", jss1result2ndtermRoutes);
app.use("/api/ss1results", ss1resultRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT || 5000;
// app.listen(process.env.PORT || 3000, function () {
//   console.log(
//     "Express server listening on port %d in %s mode",
//     this.address().port,
//     app.settings.env
//   );
// });
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build/index.html"))
);
