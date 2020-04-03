import express from "express";
import compression from "compression";
import indexRoute from "./routes";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(compression());
console.log(__dirname);
app.use(express.static(__dirname + "/public"));

//Routes
app.use("/", indexRoute);

const port = process.env.PORT || 9000;

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}`)
});
