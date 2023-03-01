import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from "@danocto-tickets/common-tickets";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
