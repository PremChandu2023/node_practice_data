// Routing refers to the process of determining how an application responds to a specific URL or endpoint requested by a user. 
// Import required modules
var express = require('express');
// Create an instance of the Express application
var app = express();
// Define the route for displaying blog posts
app.get('/posts', function (req, res) {
    // Logic to fetch blog posts from a database or any other data source
    var posts = [
        { id: 1, title: 'First Post', content: 'This is the first blog post.' },
        { id: 2, title: 'Second Post', content: 'This is the second blog post.' }
    ];
    // Send the blog posts as a response
    res.json(posts);
});
app.get('/', function (req, res) {
    res.send("Welcome to home page");
});
app.get('/about', function (req, res) {
    res.send("Welcome to about page");
});
app.get('/contact', function (req, res) {
    res.send("Welcome to contact page");
});
app.get('/temp', function (req, res) {
    res.send("Welcome to temp page");
});
//difference between get and post
//Data Submissio : HTTP POST is commonly used for submitting form data or any other structured data to a server.
//Data Modification: TTP POST can also be used for modifying existing resources on the server. For instance, when a user updates their profile information.
//Security considerations : Security Considerations: POST requests are generally considered more secure than GET requests because the data is sent in the request body rather than being appended to the URL. 
app.use(express.json());
app.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    res.send("login succesfull");
});
app.listen(8081, function () {
    console.log("server started");
});
