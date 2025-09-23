// props = propriedades
// Serve p/ transferir informações entre componentes.

const Description = (props) => {
    // props (propriedades de componente)
    // props é um objeto {} e possui chaves e valores
    // Ex: props.city = "Registro"

    return (
        <>
        <div>
            <p>Cidade: {props.city}</p>
            <p>Idade: {props.age} anos</p>
            <p>E-mail: {props.email}</p>
        </div>
        </>
    )
}

export default Description;