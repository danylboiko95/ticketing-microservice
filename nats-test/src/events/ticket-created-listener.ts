import { Message } from "node-nats-streaming";
import { Listener } from "../../../common/src/events/base-listener";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName: string = "payment-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message): void {
    console.log("Event data!", data);

    msg.ack();
  }
}
