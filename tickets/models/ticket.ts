import mongoose from "mongoose";

interface TicketAttrs {
    title: string;
    price: number;
    userId: string

}
//needed for document(only one element=>> model is a array or elements)
interface TicketDoc extends mongoose.Document {
    title: string;
    price: number;
    userId: string
}
//needed for ts validation of props
interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    //need for tranfrom data
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    }
})
//because only of ts
ticketSchema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket(attrs)
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema)

export { Ticket }