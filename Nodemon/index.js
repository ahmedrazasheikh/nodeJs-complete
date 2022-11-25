
import http from 'http'
const PORT = process.env.PORT  || 8000
const server  = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
res.end("You Are Requested at Ahmed Raza Server")
})

server.listen(PORT,'localhost' , ()=>{
    console.log('Server running at http://localhost:8000')
})
