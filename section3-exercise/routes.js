

const requestHandler = (req, resp) => {
    const method = req.method;
    const url = req.url;    
    if(url === '/users' && method === 'POST'){
        resp.write('<html>');
        resp.write('<head><title> Routes User page </title> </head>');
        resp.write('<body>Users Page');
        resp.write("<ul><li>Tom</li><li>Maggie</li><li>Ellen</li></ul>")
        resp.write('<form action="/"><button name="home" type="Submit">Go Home</button></form></body>');
        resp.write('</html>');
        return resp.end();
    } 
    resp.setHeader('Content-type', 'text/html');
    resp.write('<html>');
    resp.write('<head><title> This is Routes Exercise 1 </title> </head>');
    resp.write('<body><form method="post" action="/users"><button name="users" type="Submit">Display Users</button></form></body>');
    resp.write('</html>');
    return resp.end();

};

exports.handler = requestHandler;