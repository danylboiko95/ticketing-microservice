import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@danocto-tickets/common-tickets";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
