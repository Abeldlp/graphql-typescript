import "reflect-metadata";
import express, { Express } from "express";
import { apolloServer } from "./config/apolloServer";
import { databaseConnection } from "./config/database";

const PORT = process.env.PORT || 8080;
const expressApp: Express = express();

databaseConnection.initialize();
apolloServer.withEndpoint("/graphql").initializeWith(expressApp);

expressApp.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
