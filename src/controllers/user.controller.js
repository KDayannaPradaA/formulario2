import bcrypt from "bcrypt";
const saltRounds = 10;

export async function crearCuenta(req, res) {
    
try {
    const {correo, contraseña, confirmacontraseña} = req.body;
   
    if(clave == confirmacontraseña){
        //encriptar la contraseña

        const hashed = await bcrypt.hash (contraseña, saltRounds);
        console.log(hashed);     

        res.json({isOK:true, msj: "El usuario ingreso satisfactoriamente"})
 
    } else {
        //envia mensaje de error
        res.json({isOK: false, msj: "la contraseña y su confirmacion no coninciden"})
    }

} catch (error) {
    
}


}