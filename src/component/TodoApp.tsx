import React,{useState} from 'react'
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState<string>('')

    const handleAddTodo = ()=> {
        if(inputValue.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue.trim(),
            status: "Inprogress"
        }

        setTodos([...todos, newTodo]);
        setInputValue(" ");
    }

    const handleEditTodo = (id: number, newText: string) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, text:newText} : todo));
    }

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id ));
    }

    const handleStatusChange = (id: number, newStatus: "Inprogress"|"pause"|"done") => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, status: newStatus} : todo ));
    }

    return (
        <div className='mt-12 mx-auto'>
            <h1 className='text-5xl text-orange-400 font-bold'>Todo APP</h1>
            <div className='w-full flex items-center justify-between mt-6'>
            <input
              type= 'text'
              className='mt-4 border-orange-400 py-4 px-2 w-[90%] rounded-lg text-red-950 text-xl'
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
            className='bg-orange-400 mt-4 border-gray-200 py-4 px-2 rounded-lg text-red-950 text-xl'
            onClick={() => handleAddTodo()}>Add Todo</button>
            </div>
            <TodoList
              todos = {todos}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
              onStatusChange={handleStatusChange}
            />
        </div>
    )

}

export default TodoApp;