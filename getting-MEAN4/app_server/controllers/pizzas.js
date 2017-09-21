/* GET 'home' page */
module.exports.pizzahomelist = function(req, res) {
    res.render('pizzas-list', {
        title: 'Find a pizzeria in Canyon',
        pageHeader: {
            title: 'Pizza locator',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for pizza in Canyon? Look no further!",
        locations: [{
            name: 'La Bella',
            address: '700 23rd Ave., Canyon, TX ',
            rating: 3,
            facilities: ['Group Sized Pizza', 'Gluten Free Option', 'Calzones'],
            distance: 'Walking Distance'
        }, {
            name: 'Pizza Hut',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Premium Pizza', 'Meat Option', 'Vegetarian Option'],
            distance: 'Walking Distance'
        }, {
            name: 'Dominos',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Premium Pizza', 'Gluten Free Option', 'Vegetarian Option'],
            distance: 'Walking Distance'
        }]
    });
};

/* GET 'Location info' page */
module.exports.pizzaInfo = function(req, res) {
    res.render('pizza-info', {
        title: 'La Bella',
        pageHeader: {
            title: 'La Bella'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'La Bella',
            address: '700 23rd St, Canyon, TX 79015',
            rating: 3,
            facilities: ['Group Sized Pizza', 'Gluten Free Option', 'Calzones'],
            coords: {
                lat: 34.976402,
                lng: -101.919655
            },
            openingTimes: [{
                days: 'Monday - Thursday',
                opening: '11:00am',
                closing: '12:00am',
                closed: false
            }, {
                days: 'Friday - Saturday',
                opening: '11:00am',
                closing: '1:00am',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            
            
           
            reviews: [{
                author: 'Prince Philip',
                rating: 5,
                timestamp: '16 July 2017',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Salutan Aladdin',
                rating: 3,
                timestamp: '16 June 2017',
                reviewText: 'It was not magic carpet ride, but better than street food!'
            }]
        }

        
    });
};


//Attempt at fixing the pages
/* GET 'Location info' page */
module.exports.pizzaInfo2 = function(req, res) {
    res.render('pizza-info2', {
        title: 'Pizza Hut',
        pageHeader: {
            title: 'Pizza Hut'
        },
        sidebar: {
            context: 'is on Loc8r because it has great pizza and great variety!',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Pizza Hut',
            address: '110 23rd St., Canyon, TX ',
            rating: 3,
            facilities: ['Premium Pizza', 'Meat Option', 'Vegetarian Options'],
            coords: {
                lat: 34.980335,
                lng: -101.918800
            },
            openingTimes: [{
                days: 'Sunday - Thursday',
                opening: '11:00am',
                closing: '10:00pm',
                closed: false
            }, {
                days: 'Friday - Saturday',
                opening: '11:00am',
                closing: '11:00pm',
                closed: false
            }, ],
            reviews: [{
                author: 'Princess Jasmine',
                rating: 5,
                timestamp: '16 July 2017',
                reviewText: 'What a great place! No one out Pizzas the Hut!'
            }, {
                author: 'Prince Philip',
                rating: 3,
                timestamp: '16 August 2017',
                reviewText: 'I thought it would be better since it had Pizza in the name. Felt like my princess slept a life time before we got our food.'
            }]
        }
    });
};


//Pizza info for Domino's


//Attempt at fixing the pages
/* GET 'Location info' page */
module.exports.pizzaInfo3 = function(req, res) {
    res.render('pizza-info3', {
        title: 'Domino\'s',
        pageHeader: {
            title: 'Domino\'s'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Domino\'s',
            address: '301 N 23rd St Ste B, Canyon, TX 79015',
            rating: 3,
            facilities: ['Premium', 'Gluten Free Option', 'Vegetarian Option'],
            coords: {
                lat: 34.984657,
                lng: -101.919288
            },
            openingTimes: [{
                days: 'Sunday - Thursday',
                opening: '10:30am',
                closing: '12:00am',
                closed: false
            }, {
                days: 'Friday - Saturday',
                opening: '10:30am',
                closing: '1:00am',
                closed: false
            }],
            reviews: [{
                author: 'Prince Adam',
                rating: 5,
                timestamp: '19 July 2017',
                reviewText: 'It was good, not as good as the Princess Belle I know. But I guess that\'s the difference in La Bella and my lovely Belle.'
            }, {
                author: 'Salutan Aladdin',
                rating: 3,
                timestamp: '16 June 2017',
                reviewText: 'It was not magic carpet ride, but better than street food!'
            }]
        }
    });
};





/* GET 'Add review' page */
module.exports.pizzaaddReview = function(req, res) {
    res.render('pizza-review-form', {
        title: 'Review La Bella on Pizzeriar',
        pageHeader: {
            title: 'Review La Bella'
        }
    });
};