import {
  ExpirationCompleteEvent,
  Listener,
  OrderStatus,
  Subjects,
} from "@danocto-tickets/common-tickets";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";
import { natsWrapper } from "../../nats-wrapper";
import { OrderCancelledPublisher } from "../publishers/order-cancelled-publisher";
import { queueGroupName } from "./queue-group-name";

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
  queueGroupName = queueGroupName;
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

  async onMessage(data: ExpirationCompleteEvent["data"], msg: Message) {
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error("order not found");
    }

    order.set({
      status: OrderStatus.Cancelled,
      ticket: null,
    });
    await order.save();

    new OrderCancelledPublisher(this.client).publish({
      id: order.id,
      version: order.version,
      ticket: {
        id: order.ticket?.id,
      },
    });
  }
}
