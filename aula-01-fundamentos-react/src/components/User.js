//  Expressões Javascript dentro do HTML

const User = () => {
    // Criadno variáveis para o component

    const name = "João Paulo";

    return(
        <>
            {/* Comentário em JSX */}
            <div> Usuário logado: <strong>{name}</strong> </div>
        </>
    )
}

export default User;