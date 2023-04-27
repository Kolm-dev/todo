import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ITodo } from "../types/types";
import style from "../styles/Todo.module.scss";

type TypeTodoProps = ITodo & {
	removeTodo: (id: number) => void;
	index: number;
};

const Todo = ({ id, title, index, removeTodo }: TypeTodoProps) => {
	const [completed, setCompleted] = useState(false);
	const completeHandler = (statusComplete: boolean): void => {
		setCompleted(prev => !prev);
	};

	return (
		<div className={style.todo}>
			<h4
				className={style.todoHeader}
				onClick={() => completeHandler(completed)}
				style={{ textDecorationLine: completed ? "line-through" : "none" }}>
				{`#${index + 1}. ${title}`}
			</h4>
			<AiFillDelete
				className={style.deleteButton}
				onClick={() => removeTodo(id)}
			/>
		</div>
	);
};

export default Todo;