import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { Listener } from "../../common/src/events/base-listener";
import { TicketCreatedListener } from "./events/ticket-created-listener";
console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("connected listener1");

  stan.on("close", () => {
    console.log("nats connection close");
    process.exit();
  });
  new TicketCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
