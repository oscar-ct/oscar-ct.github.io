
const projects = [
    {   id: 1,
        name: 'Pokémon-J',
        primary_languages: 'jQuery, Javascript',
        description: 'Pokémon-J is a front-end jQuery focused app providing users with a fun interactive interface to learn more about Pokémon using RESTful API requests from PokéAPI.'

    },
    {
        id: 2,
        name: 'Flix',
        primary_languages: 'Javascript',
        description: 'Flix is a front-end web app that allows users to search thousands of film titles using OMDb API.  Users have the ability to save and view their favorite films to/from a json-server hosted by Glitch. Flix is built using vanilla JavaScript and CSS.'
    },
    {
        id: 3,
        name: 'Simply Weather',
        primary_languages: 'Javascript',
        description: 'Simply Weather is a front-end web app, providing users a 7-day forecast to a location of their choosing.  Simply Weather is designed to be intuitive and simple, but still providing users with a plethora of info.  Built with vanilla JavaScript, CSS, and OpenWeather API.'
    },
    {
        id: 4,
        name: 'GamerHaven',
        primary_languages: 'Java',
        description: 'GamerHaven is a full-stack social media site created for gamers across the world!  Built by a team of 5, users can search over 500,000 game titles, follow other users, create posts, leave comments and much more.  GamerHaven is built on Spring Boot, structured using MVC, supported by Java and MySQL, deployed via Dokku.  Front-end supported by ThymeLeaf, JavaScript, JQuery, CSS, and Bootstrap.'
    },
    {
        id: 5,
        name: 'GameLister',
        primary_languages: 'Java',
        description: 'GameLister is a Craigslist-like full-stack web application that allows users to create and search for ads with full CRUD functionality.  Built by a team of 3, GameLister is structured with MVC design and programmed using Java, Servlets, JSP, JSTL, MySQL, Javascript, jQuery, CSS, and Bootstrap.'
    }
]


$(document).ready(function(){
    $('.toggle').click(function(){
        $('.menu').toggleClass('active');
    });
});