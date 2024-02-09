import express from "express";
import { getServerClient } from "./server/client";
import { nextApp, nextHandler } from "./next-utils";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const init = async () => {
  const payload = await getServerClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`ADMIN URL: ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info(`Ready on http://localhost:${PORT}`);
    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

init();
