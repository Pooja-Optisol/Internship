/*
const fs = require('fs');
const requestHandler = (req,res) => {
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
            // To send the response only after writing to the file
            fs.writeFile('message.txt',message,err => {     
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            })
        })
    }
}
//module.exports = requestHandler;
exports.handler = requestHandler;
*/