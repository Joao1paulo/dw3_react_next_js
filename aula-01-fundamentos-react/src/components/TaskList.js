const TaskList = ({ tasks }) => {

    // Retorno Condicional

    if ((tasks.lenght) === 0) {
        return <p> Não Há tarefas para Mostrar </p>
    }

    return (

        <>
            <div>
                <h4>Lista de Tarefas: </h4>
                <ol>
                    {tasks.map((task) => (
                        <li key={task.id}> {task.id} - {task.text} </li>
                    ))}
                </ol>
            </div>
        </>
    );
};

export default TaskList;