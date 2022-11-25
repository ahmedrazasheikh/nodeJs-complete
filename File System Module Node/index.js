import * as fs from "fs/promises"
// try {
    
// await fs.mkdir('C:\\Users\\MH\\Desktop\\Backend\\File System Module Node\\raza\\raza.pys' , {recursive : true})
// console.log("File Has  Been Created Succesfully")
// } catch (error) {
//     console.log(error)
// }



// Read Doucument
try {
    
const  data = await fs.readdir('C:\Users\MH\Desktop\Backend\File System Module Noe Node\raza')
for(let file of data)
console.log(file)

} catch (error) {
        console.log(error)
    
}
