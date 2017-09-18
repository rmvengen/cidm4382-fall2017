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
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Group Sized Pizza', 'Gluten Free Option', 'Calzones'],
            coords: {
                lat: 34.980335,
                lng: -101.918800
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

/* GET 'Add review' page */
module.exports.pizzaaddReview = function(req, res) {
    res.render('pizza-review-form', {
        title: 'Review La Bella on Pizzeriar',
        pageHeader: {
            title: 'Review La Bella'
        }
    });
};