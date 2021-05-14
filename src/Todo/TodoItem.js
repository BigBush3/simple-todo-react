import React, { useContext } from 'react'
import Context from '../context'

export default function TodoItem({ todo, onChange }) {
	const { removeTodo } = useContext(Context)
	return (
		<ul className="mask-list">
			<li>
				<div>
					<input
						type="checkbox"
						onChange={() => onChange(todo[1])}
					/>
					<span>{todo[0]}</span>
				</div>
				<button className="btn-remove" onClick={removeTodo.bind(null, todo[1])}>
					REMOVE
          </button>
			</li>
		</ul>
	)
}