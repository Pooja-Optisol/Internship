/*
const fs = require('fs');
fs.writeFileSync('hello.txt','Hello from NodeJS');
*/
/*
const http = require('http');
const server = http.createServer((req,res) => {
    console.log(req);
    console.log(req.headers,req.method,req.url);
    //process.exit(); Used to terminate the event loop
})
server.listen(3000);
*/
/*
Sending a response
const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Greeting</title></head><body><h1>Hello, World!</h1></body></html>');
    res.end();  //Cannot write after this line as Node.js will send the response to the browser once this line is encountered.
})
server.listen(3000);
*/
/*
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
     if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Writing to a file</title></head>');
        res.write('<body><form action = "/message" method = "POST"> <input type="text" name= "message"> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
  }
    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedText = Buffer.concat(body).toString();
            console.log(parsedText);
            const message = parsedText.split("=")[1];
            fs.writeFileSync('message.txt',message);
        })
        res.statusCode = 302;   Executes even before the write operation is performed.
        res.setHeader('Location', '/');
        return res.end();
    }
})
server.listen(3000);
*/
/*
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Writing to a file</title></head>');
        res.write('<body><form action = "/message" method = "POST"><input type="text" name = "msg"/> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedText = Buffer.concat(body).toString();
            const message = parsedText.split("=")[1];
            fs.writeFile('message.txt',message,err => {     // Tp send the response only after writing to the file
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            })
        })
    }
})
server.listen(3000);
*/
/*
Exports and Imports
const http = require('http');
const route = require('./route');
//const server = http.createServer(route); 
const server = http.createServer(route.handler); 
server.listen(3000);
*/
/*
//Assignment for the module
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Greet</title></head>');
        res.write('<body><h1>Hello! Nice to meet you!</h1><br/><form action="/create-user" method = "POST"><input type ="text" name="username"/><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users')
    {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User 1: Brendan</li> <li>User 2: Emelia</li> <li>User 3: Reece</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user')
    {
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedText = Buffer.concat(body).toString();
            const user = parsedText.split("=")[1];
            console.log(user);
            res.setHeader('Location','/users');
            res.statusCode = 302;
            return res.end();
        })
    }
})
server.listen(3000);
*/

/*
// Express JS
//const http = require('http');
const express = require('express');
const { runInNewContext } = require('vm');
const app = express();
app.use('/users',(req,res,next) => {
    console.log('In the users page middleware');
    res.send('<html><h1>Welcome,Users!</h1></html>'); 
    //next(); //Allows request to funnel to the next middleware
});
app.use('/', (req,res,next) => {
    console.log('In the default page middleware');
    res.send('<html><h1>Hello, from Express JS! </h1></html>');
});
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
*/

/*
//const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));   //Parses the request body to extract the body at a later stage and calls next() at the end to allow the router middleware to be executed

app.use('/addProduct',(req,res,next) => {
    res.send('<form action = "/product" method="POST"><input type="text" name="title"></input><button type="submit">Send</button></form>');
})
app.post('/product', (req,res,next) => {    //While app.use allows get and post requests app.get/app.post would only allow that specific kind of request
    console.log(req.body);  //Yields an object(key value pairs) containing the sent data. body is accessible since we called bodyParser.urlencoded();
    console.log(req.body.title);
    res.redirect('/');
});
app.use('/', (req,res,next) => {
    res.send('<html><h1>Hello, from Express JS! </h1></html>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
*/
/*
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}));   //Parses the request body to extract the body at a later stage and calls next() at the end to allow the router middleware to be executed

app.use(adminRoutes);   //Order matters since you don't want to execute / first and you are using app.use. Since I changed it to app.get in admin.js and shop.js, now it doesn't really matter
app.use(shopRoutes);

app.use((req,res,next) => { //404 Page not found error added at the end
    res.status(404).send('<html><h3>Page not found!</h3></html>');
})
app.listen(3000);
*/

/*
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname,'public'))); //Used to serve static readonly public folders in the browser
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/page-not-found');
app.use(bodyParser.urlencoded({extended:false}));   //Parses the request body to extract the body at a later stage and calls next() at the end to allow the router middleware to be executed

app.use('/admin',adminRoutes);   //Filtering paths. In admin.js /admin need not be added to the path again but now in the browser and in the form action the admin directory should be included as localhost 3000 followed by admin followed by addProduct
app.use(shopRoutes);

app.use(pageNotFound);
app.listen(3000);
*/
/*
//Sharing data and requests across Users
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','views');
// const expressHbs = require('express-handlebars');   //Since handlebars is not built in
// app.engine('hbs',expressHbs({layoutsDir:'views/layouts',defaultLayout:'main-layout',extname:'hbs'})); //layoutsDir is by default views/layouts. Use the attribute if you want to change it. hbs is the file extension of all files except the layout whereas extname sets the file extension for the layout as well. The default file extesnion for layouts is handlebar and not hbs. So, we have to include that attribute here
// app.set('view engine', 'hbs');
// app.set('views','views');

// app.set('view engine','pug');   //Set the view engine to the pug template built inengine installed
// app.set('views','views');
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname,'public'))); //Used to serve static readonly public folders in the browser
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/page-not-found');
app.use(bodyParser.urlencoded({extended:false}));   //Parses the request body to extract the body at a later stage and calls next() at the end to allow the router middleware to be executed

app.use('/admin',adminRoutes);   //Filtering paths. In admin.js /admin need not be added to the path again but now in the browser and in the form action the admin directory should be included as localhost 3000 followed by admin followed by addProduct
app.use(shopRoutes);

app.use(pageNotFound);
app.listen(3000);
*/

const path = require('path');
const express = require('express');
const app = express();

const db = require('./utils/database');
db.execute('SELECT * FROM products').then(result => {
    console.log(result);
}).catch(error => {
    console.log(err);
});

app.set('view engine','ejs');
app.set('views','views');

const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname,'public'))); //Used to serve static readonly public folders in the browser
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/page-not-found');
app.use(bodyParser.urlencoded({extended:false}));   //Parses the request body to extract the body at a later stage and calls next() at the end to allow the router middleware to be executed

app.use('/admin',adminRoutes);   //Filtering paths. In admin.js /admin need not be added to the path again but now in the browser and in the form action the admin directory should be included as localhost 3000 followed by admin followed by addProduct
app.use(shopRoutes);

app.use(pageNotFound);
app.listen(3000);