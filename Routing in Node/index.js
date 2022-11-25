
import http from 'http'
import fs from 'fs'
import { error } from 'console'
const PORT = process.env.PORT  || 8000
const server  = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    if (req.url === '/') {

        fs.readFile('./Public1213/home.html', (error, data)=>{

if (error) {
    throw error
}else{
       res.end(data)
}
})
    }
    if (req.url === '/About') {

        fs.readFile('./Public1213/About.html', (error, data)=>{

if (error) {
    throw error
}else{
       res.end(data)
}
})
    }
    if (req.url ===  '/error') {

        fs.readFile('./Public1213/error.html', (error, data)=>{

if (error) {
    throw error
}else{
    
       res.end(data)
}
})
    }
})

server.listen(PORT,'localhost' , ()=>{
    console.log('Server running at http://localhost:8000')
})
