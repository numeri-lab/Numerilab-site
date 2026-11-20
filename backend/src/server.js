import app from "./app.js";

const port = Number(process.env.PORT || 8138);
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`NumeriLab — http://${host === "0.0.0.0" ? "localhost" : host}:${port}`);
});
