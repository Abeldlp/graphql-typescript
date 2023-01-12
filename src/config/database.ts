import { DataSource } from "typeorm";
import { Task } from "../entities/Task";

export const databaseConnection = new DataSource({
  type: "postgres",
  database: process.env.DATABASE_NAME || "graphql-db",
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "postgres",
  host: process.env.DATABASE_HOST || "apollo-db",
  port: parseInt(process.env.DATABASE_TYPE as string) || 5432,
  logging: true,
  synchronize: true,
  entities: [Task],
});
