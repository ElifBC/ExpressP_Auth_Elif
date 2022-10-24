/*Elif Bilge Canatan- 301245216-COMP229-F2022-402 */

// Index Controller

export function displayHomePage(req, res, next){
    res.render('index', {title: 'Elif B. Canatan -301245216', page: 'home'});

};

export function displayAboutPage(req, res, next){
    res.render('index', {title: 'About', page: 'about'});
};

export function displayContactPage(req, res, next){
    res.render('index', {title: 'Contact', page: 'contact'});

};

export function displayHobbiesPage(req, res, next){
    res.render('index', {title: 'Hobbies', page: 'hobbies'});

};

export function displayProjectsPage(req, res, next){
    res.render('index', {title: 'Projects', page: 'projects'});

};
