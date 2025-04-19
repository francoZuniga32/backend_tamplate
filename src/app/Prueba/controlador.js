const controlador = {};

controlador.get = async(req, res)=>{
    res.send("hola soy una prueba");
}

module.exports = controlador;