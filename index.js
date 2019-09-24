const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{


    fs.readFile(path.join('public',req.url),(err,content)=>{

        let contentType =  "text/html";
        switch(path.extname(req.url)){
            case '.css' : 
                contentType = "text/css";
                break;
            case '.js' :
                contentType = "application/javascript";

        };

        res.writeHead(200,{"Content-type":contentType});

        res.end(content,'utf-8');
        

        //res.writeHead(200,{"Content-type":"text/html"});
	    //res.end(`<h1>${path.join('public',req.url)}<h1>`);
    });

	


    
});

server.listen(5500,()=>console.log('Listening on port 5500'));
