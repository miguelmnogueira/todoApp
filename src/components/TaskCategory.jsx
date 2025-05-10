import React from "react";

const TaskCategory = ({ category }) => {
	return (
		<div className="max-w-48 rounded-lg flex flex-col">
			<span className="text-disabled-text">1 / 5</span>

			<p className="text-white max-w-56 text-wrap break-words">
				{category.name}
			</p>
		</div>
	);
};

export default TaskCategory;
