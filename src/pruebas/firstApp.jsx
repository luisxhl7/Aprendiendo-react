const nombre = "luis";
const numero = 777;
const arreglo =["lucho","marta"];
const objeto = {
    nombre: "juan",
    apellido: "herrera"
}
const funcion = (pagina) => {
    return "la pagina mas visitada es " + pagina;
}


export const FirstApp = () => {
    return (
        <>
            <p>{nombre}</p>
            <p>{numero}</p>
            <p>{arreglo[0]}</p>
            <p>{objeto.nombre + " " + objeto.apellido}</p>
            <p>{JSON.stringify(objeto)}</p>
            <p>{funcion("google.com")}</p>
        </>
    );
}