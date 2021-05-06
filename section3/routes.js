const fs = require('fs');

const requestHandler = (req, res) =>{
    const url = req.url;
    const method  = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My Form</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="Submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('UserInput.txt', message, (err) => {
                console.log(err);
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();        
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from Node Server!</body>');
    res.write('</html>');
    res.end();    
};

// module.exports = requestHandler;

/* module.exports = {
    handler : requestHandler,
    someText: 'Some hardcoded text'
} */

/* module.exports.handler = requestHandler;
module.exports.someText = 'This is some hardcoded text'; 
*/

exports.handler = requestHandler;
exports.someText = 'Indu is really tired of waiting';