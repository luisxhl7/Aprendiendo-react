import PropTypes from 'prop-types'
export const Proptipos = ({titulo,subtitulo,tiempo})=> {
    return(
        <>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
            <p>{tiempo}</p>
        </>
    )
}

Proptipos.propTypes = {
    titulo: PropTypes.string,
    subtitulo: PropTypes.string.isRequired,
    tiempo: PropTypes.number.isRequired
}

Proptipos.defaultProps={
    titulo: 'propiedades',
    subtitulo: 'no hay datos',
    tiempo: 'no hay datos',
    lengua: "no hay datos"
}