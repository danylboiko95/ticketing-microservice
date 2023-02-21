import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@danocto-tickets/common-tickets";

export class OrderCreatedPublished extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
