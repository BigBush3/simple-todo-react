import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'
function App() {
	const [todos, setTodos] = React.useState([
		{ id: 1, completed: false, title: 'Купить хлеб' },
		{ id: 2, completed: false, title: 'Купить масло' },
		{ id: 3, completed: false, title: 'Купить курагу' },
	])

	function toggleTodo(id) {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			}))
	}
	function removeTodo(id) {
		console.log(id)
		setTodos(todos.filter(todo => todo.id !== id))
	}
	function addTodo(title) {
		setTodos(todos.concat([{
			title,
			id: Date.now(),
			completed: false
		}]))
	}

	return (
		<Context.Provider value={{ removeTodo }}>
			<div>
				<div className="header">
					<div className="container">
						<div className="logo">ToDo List</div>
						<AddTodo onCreate={addTodo} />
					</div>
				</div>
				<TodoList todos={todos} onToggle={toggleTodo} />
			</div>
		</Context.Provider>

	);
}

export default App;
