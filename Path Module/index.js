// console.log('Ahemd Raza ');
// import path from 'path'
const raza = require('path')
// console.log(raza)
// console.log(raza.basename('C:\\Users\\MH\\Desktop\\Backend\\Path Module\\index.js'))
// console.log(__filename)
// console.log(raza.basename(__filename))
// console.log(raza.basename(__filename), '.js')
// console.log()

// directy name
// console.log(raza.dirname('C:\Users\MH\Desktop\Backend\Path Module\index.js'))
// console.log(raza.dirname(__filename))



// console.log(raza.extname(__filename))
console.log(raza.basename(__filename))


// Result
// index.js



// For Find Extension 

// console.log(raza.extname(__filename))



// Join 


// console.log(raza.join('/ahmed', '/raza/saad' , 'hassan', 'nadeem/saima'))


// Result \ahmed\raza\saad\hassan\nadeem\saima

// One level up
// console.log(raza.join('/ahmed', '/raza/saad'
// , 'hassan', 'nadeem/saima/raza' , '..'))


// Result \ahmed\raza\saad\hassan\nadeem\saima


// console.log(raza.join(__dirname, 'raza/saad/hassan/raza' , '..' ))

// C:\Users\MH\Desktop\Backend\Path Module\raza\saad\hassan


// normalize
// win32
// console.log(raza.normalize(__dirname, 'raza/saad/hassan/raza' , '..' ))

// console.log(raza.parse(__filename))
// console.log(raza.parse(__filename).base)
// console.log(raza.parse(__filename).name)
// console.log(raza.parse(__filename).ext)




