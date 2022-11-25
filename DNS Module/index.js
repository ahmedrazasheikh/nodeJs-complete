// Dns Module


import dns from 'dns'
// dns.lookup('google.com', (error,address,family)=>{
// if(error){
//     throw error
// }
// else{
//     console.log(address)
//     console.log(family)
// }

// })
dns.resolve('youtube.com', 'MX' ,   (error,address)=>{
if(error){
    throw error
}
else{
    console.log(address)
}

})