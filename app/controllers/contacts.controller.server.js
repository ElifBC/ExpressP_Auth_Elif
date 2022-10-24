import contactsModel from '../models/busicontacts.js';

export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Contact List', page: 'contacts/list', contacts: contactsCollection  }); // later add ---displayName: UserDisplayName(req)

    })
}