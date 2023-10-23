import express, { Request, Response } from "express";
import config from "./config";
import { printSomething } from "./helper";

const TEXT = "soup";

export function createServerApp() {
  const app = express();

  app.get("/", (req: Request, res: Response) => {
    console.log(printSomething(TEXT));
    console.log(printSomething(config.SECRET_MESSAGE));

    const json = {
      msg: TEXT,
      secret: config.SECRET_MESSAGE,
    };

    return res.json(json);
  });

  return app;
}
