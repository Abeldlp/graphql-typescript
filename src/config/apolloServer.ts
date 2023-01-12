import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { Express } from "express";
import { TaskResolver } from "../resolvers/task";
import { buildSchema } from "type-graphql";

class ApolloBuilder {
  private apolloServer: ApolloServer;
  private endpoint: string = "/graphql";

  withEndpoint(endpoint: string) {
    this.endpoint = endpoint;
    return this;
  }

  async initializeWith(app: Express) {
    this.apolloServer = await this.buildApolloServer();
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({ app, path: this.endpoint });
  }

  private async buildApolloServer() {
    return new ApolloServer({
      schema: await buildSchema({
        resolvers: [TaskResolver],
        validate: false,
      }),
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });
  }
}

export const apolloServer = new ApolloBuilder();
