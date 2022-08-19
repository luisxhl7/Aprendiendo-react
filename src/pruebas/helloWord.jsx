import '../estilos/helloWord.css'
export const HelloWord = ({titulo, anio}) => {
    return (
        <>
            <h1 className='titulo'>{titulo}</h1>
            <h3>{anio}</h3>
        </>
    );
}