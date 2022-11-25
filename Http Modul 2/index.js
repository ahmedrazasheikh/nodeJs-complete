import http from 'http'
const PORT = process.env.PORT || 9000 
const server  = http.createServer((req,res)=>{
res.end("Server Response Ahmed Raza")
res.writeHead(200,"Ahmed Raza", {'Content-Type': 'text/plain'})
})

server.listen(PORT,'localhost' , ()=>{
    console.log('Server running at http://localhost:9000')
})
