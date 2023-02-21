import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@danocto-tickets/common-tickets";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}


