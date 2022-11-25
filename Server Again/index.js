
import http from 'http'
const PORT = process.env.PORT || 9000 
const server  = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
res.end("Server Response scsac")
})

server.listen(PORT,'localhost' , ()=>{
    console.log('Server running at http://localhost:9000')
})
