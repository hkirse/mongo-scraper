# mongo-scraper

This is a New York Times Mongo scraper application.  The app has the ability to scrape articles from the New York Times, and give the user the ability to save articles, comment on articles and delete their comments.

Mongo Scraper App can be found here: https://warm-plains-76609.herokuapp.com/

The application requires various middleware, such as Morgan which provides the ability to log request details.  Some new packages we are using for this assignment are requiring Mongoose, Cheerio and Axios.

    Axios is a promised based HTTP browser for the client and node.js.
    Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure.
    Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

Some other requirements we are using in this application are express, body-parser, express-handlebars, and require.  These have all been used in our previous assignments.

What the application does:
The New York Times Scraper application uses a NoSQL database, Mongo.  It will scrape the New York Times API and pull in the headlines and display them on the page after the on click event of "Scrape Articles" on the top of the navigation bar.

We then add buttons next to the displayed headlines giving the user the ability to save an article or to place a comment for the article.  If the user does save the article, it will display on the "Saved Articles" page which can be accessed on the navigation bar at the top.

For the front end of the application we use handlebars mixed with some css for styling.  Bootstrap was used to provide the layout.



