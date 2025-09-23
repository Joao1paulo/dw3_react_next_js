// Chama as propriedades da props direto (para visualizar as informções sem precisar ir na index)
const Pet = ({name, breed, age}) => {
    
    // Desestruturação de props:
    // Destructuring => props.name -> {name}
    return(
        <>
        <div>
            <p> informações do Pet: </p>
            <ul>
                <li>Nome: {name}</li>
                <li>Raça: {breed}</li>
                <li>Idade: {age}</li>
            </ul>
        </div>
        </>
    );
};

export default Pet;