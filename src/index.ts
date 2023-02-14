import Fastify from "fastify";
import { routes } from "./routes";

const fastify = Fastify({ logger: true });

fastify.register(routes);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`🔥 server listening on ${address}`);
});
