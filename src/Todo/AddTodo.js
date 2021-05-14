import React, { useState } from 'react'

function AddTodo({ onCreate }) {
	const [value, setValue] = useState('')

	function submitHandler(event) {
		event.preventDefault()

		if (value.trim()) {
			onCreate(value)
			setValue('')
		}
	}
	return (
		<form className="form" onSubmit={submitHandler}>
			<input type="text" value={value} onChange={event => setValue(event.target.value)} />
			<button tupe='submit' className="btn">Add a new task</button>
		</form>
	)
}

export default AddTodo;