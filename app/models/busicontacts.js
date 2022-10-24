import mongoose from 'mongoose';

//this works similar to class but it is called schema
const Schema= mongoose.Schema;

const ContactsSchema = new Schema({
    name: String,
    number: Number,
    email: String
    
}, {
    timestamps: true,   //to see the changes in the business contacts db
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactsSchema);  //model called 'Contacts' with contacts schema