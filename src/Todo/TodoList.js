import React from 'react';
import TodoItem from './TodoItem'
import TodoRemoved from './TodoRemoved'

export default function TodoList(props) {
	return (
		<div className="container">
			<h2>
				<span>To Do</span>
				<span className="mask-num">{props.todos.length}</span>
			</h2>
			<div>
				{props.todos.map((todo) => {

					return <TodoItem todo={[todo.title, todo.id, todo.completed]} key={todo.id} onChange={props.onToggle}></TodoItem>
				}).filter(todo => {
					return !todo.props.todo[2]
				})}

			</div >

			<h2>
				<span>Done</span>
				<span className="mask-num">
					{props.todos.length}
				</span>
			</h2>
			<div>
				{props.todos.map((todo) => {
					return <TodoRemoved todo={[todo.title, todo.id, todo.completed]} key={todo.id}></TodoRemoved>
				}).filter(todo => {
					return todo.props.todo[2]
				})}

			</div >
		</div >

	)
}