import React from 'react'
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onEdit: (id: number, newText: string) => void;
    onDelete: (id: number) => void;
    onStatusChange: (id: number, 
        newStatus: "Inprogress" | "pause" | "done") => void;
}

const TodoList:React.FC<TodoListProps> = ({todos, onEdit, onDelete, onStatusChange}) => {
    return (
        <div className='mt-12'>
            {todos.map((todo) => (
                <TodoItem
                 key = {todo.id}
                 todo = {todo}
                 onEdit={onEdit}
                 onDelete={onDelete}
                 onStatusChange={onStatusChange}
                />
            ))}
        </div>
    );

}

export default TodoList