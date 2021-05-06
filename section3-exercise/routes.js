

const requestHandler = (req, resp) => {
    const method = req.method;
    const url = req.url;    
    if(url === '/users'){
        resp.write('<html>');
        resp.write('<head><title> Routes User page </title> </head>');
        resp.write('<body>Users Page');
        resp.write("<ul><li>Tom</li><li>Maggie</li><li>Ellen</li></ul>")
        resp.write('<form action="/"><button name="home" type="Submit">Go Home</button></form></body>');
        resp.write('</html>');
        return resp.end();
    } 
    if(url === '/create-user' && method === 'POST'){
        const input = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            input.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(input).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);
            resp.statusCode = 302;
            resp.setHeader('Location', '/');
            return resp.end();
        });        
    }
    resp.setHeader('Content-type', 'text/html');
    resp.write('<html>');
    resp.write('<head><title> This is Routes Exercise 1 </title> </head>');
    resp.write('<body><form method="post" action="/create-user"><input type="text" name="user"/><button type="Submit">Add Users</button></form></body>');
    resp.write('</html>');
    return resp.end();

};

exports.handler = requestHandler;