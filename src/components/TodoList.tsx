import React, { useEffect } from "react";
import Todo from "./Todo";
import { ITodo } from "../types/types";

type TodoListProps = {
	todos: ITodo[];
	removeTodo: (id: number) => void;
};

const TodoList = ({ todos, removeTodo }: TodoListProps) => {
	return (
		<div>
			{todos.map((todo, index) => {
				return (
					<Todo
						key={index / 2}
						id={todo.id}
						index={index}
						title={todo.title}
						removeTodo={removeTodo}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;