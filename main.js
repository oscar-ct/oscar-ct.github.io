
const projects = [
    {   id: 1,
        name: 'Pokémon-J',
        tech_stack: 'jQuery, Javascript',
        description: 'Pokémon-J is a front-end web application, programmed using mostly jQuery. Utilizing AJAX and PokéAPI, users are met with a fun interactive interface providing lively pokémon sprites, along with pokémon stats.'

    },
    {
        id: 2,
        name: 'Flix',
        tech_stack: 'Javascript',
        description: 'Flix is a front-end web application programmed using vanilla JavaScript.  Utilizing OMDb API and Fetch API, users can search thousands of film titles and view relevant film data.  Additionally, users can favorite and unfavorite films.  This is accomplished by saving film data to a json-server hosted by Glitch.'
    },
    {
        id: 3,
        name: 'Simply Weather',
        tech_stack: 'Javascript',
        description: 'Simply Weather is a front-end web application programmed using vanilla JavaScript. Utilizing OpenWeather API and Fetch API, users can view a 7-day forecast of the location of their choosing.  Simply Weather is designed to be intuitive and simple, but still providing users with a plethora of data.'
    },
    {
        id: 4,
        name: 'GamerHaven',
        tech_stack: 'Java',
        description: 'GamerHaven is a full-stack social media app created for gamers across the world!  Built by a team of 5, users can search over 500,000 game titles, follow other users, create posts, leave comments, and much more.  GamerHaven is built on Spring, structured using MVC, programmed with Java and SQL, utilizes Spring JPA, and connected to MySQL.'
    },
    {
        id: 5,
        name: 'GameLister',
        tech_stack: 'Java',
        description: 'GameLister is a Craigslist like full-stack web application where users can create accounts, search listings, and post ads with full CRUD functionality.  Built by a team of 3, GameLister is structured using MVC, programmed with Java and SQL, utilizes Java Servlets and JDBC API, and connected to MySQL. Database security is achieved by utilizing prepared statements.'
    }
]


$(document).ready(function(){
    $('#main-section-name').addClass('animate-up');
    $('#main-section-title').addClass('animate-down');
    $('.toggle').click(function(){
        $('.menu').toggleClass('active');
    });
    $('.disabled').mouseover(function () {
        $(this).css('background', 'rgba(24, 24, 24, 0.51)')
        $(this).css('color', '#00b7c7')
    });
});



const scrollToElement = (targetEl) => {
    $('html, body').stop().animate({
        'scrollTop': (targetEl).offset().top
    }, 800, 'swing');
    // $('html, body').animate({
    //     scrollTop: $(targetEl).offset().top
    // }, 2000);
    $('.menu').toggleClass('active');
}

