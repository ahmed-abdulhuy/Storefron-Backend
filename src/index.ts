import app from "./server";

const HOST = "0.0.0.0",
  PORT = 3000;

  app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
  });
  