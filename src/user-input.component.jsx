import React, {useState} from 'react';

const UserInput = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue(' ');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                onChange={(e) => setValue(e.target.value)} 
                value={value}
            />
            <button type='submit' />
        </form>
    )
}

export default UserInput;