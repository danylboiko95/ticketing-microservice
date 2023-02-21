import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@danocto-tickets/common-tickets";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
