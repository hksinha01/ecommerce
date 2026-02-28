import express from "express";
import catalogRouter from "./api/catalog.routes.js"

const app = express()

app.use("/", catalogRouter)

export default app;