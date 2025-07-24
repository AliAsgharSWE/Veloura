import express from "express";
import indexRoutes from "./routes/index";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);

app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
