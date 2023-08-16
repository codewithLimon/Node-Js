const http=require('http');
const port=3033;
const host='127.0.0.1'

const myServer=http.createServer((req,res)=>{
    res.end("<h1>Hey bro, What's up?</h1>");
});

myServer.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
})
