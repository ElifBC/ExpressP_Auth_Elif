import contactsModel from '../models/busicontacts.js';

export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Contact List', page: 'contacts/list', contacts: contactsCollection  }); // later add ---displayName: UserDisplayName(req)  to all

    })
}
export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contacts/edit', bcontact: {} });
}
 
export function ProcessContactsAddPage(req, res, next){
    let newBContact = contactsModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
        
    });

    contactsModel.create(newBContact, (err, bcontact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/list')
    })
}

export function DisplayContactsEditPage(req, res, next){
    let id = req.params.id;

    contactsModel.findById(id, (err, bcontact) => {
        if(err){
            console.error(err);
            res.ens(err);
        }

        res.render('index', { title: 'Edit Contacts', page: 'contacts/edit', bcontact: bcontact });
    })
   
}
export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    let newBContact = contactsModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
        
    });

    contactsModel.updateOne( {_id: id}, newBContact, (err, bcontact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/list')
    })
}
export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/list');
    })
}

