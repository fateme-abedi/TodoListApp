import React, {useState} from 'react'

interface TodoItemProps {
    todo: Todo;
    onEdit: (id: number, newText: string) => void;
    onDelete: (id: number) => void;
    onStatusChange: (id: number, newStatus: "Inprogress" | "pause" | "done") => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onEdit, onDelete, onStatusChange}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleSave = ()=> {
        onEdit(todo.id, editedText);
        setIsEditing(false)
    }

    return (
        <div className='flex text-orange-400 text-lg w-full
         items-center my-4 border-orange-300
          border-4 rounded-lg py-2 px-3'>
            {isEditing ? (
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  onBlur={handleSave}
                  className='rounded-md py-2 px-3'

                />
            ):(
                <div
                className='font-bold text-white'
                 style={{textDecoration: todo.status 
                === 'done' ? 'line-through' : "none"}}>
                    {todo.text}
                </div>
            )}
            <div className='ml-auto flex items-center justify-end gap-2'>
            <select
            className={` mt-4 border-gray-200
             py-2 px-3 rounded-lg text-black text-xl font-bold
             ${todo.status === 'done' ? 'bg-green-700' :
                todo.status === 'pause' ? 'bg-red-700':
                'bg-orange-100'
             }`}
            value={todo.status}
            onChange={(e) => onStatusChange(todo.id, 
                e.target.value as 'Inprogress' | 'pause' | 'done')}
            >
                <option value='Inprogress' >In progress</option>
                <option value='pause' >Pause</option>
                <option value='done' >Done</option>
            </select>
            <button 
            onClick={() => setIsEditing(!isEditing)}
            className='bg-orange-400 mt-4 border-gray-200
             py-2 px-3 rounded-lg text-red-950 text-xl'
                >Edit</button>
            <button 
            onClick={() => onDelete(todo.id)}
            className='bg-orange-400 mt-4 border-gray-200
             py-2 px-3 rounded-lg text-red-950 text-xl hover:bg-red-600'
            >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;