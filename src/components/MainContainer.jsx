import React from "react";
import TaskCategory from "./TaskCategory";

const MainContainer = ({ selectedList, setLists }) => {
	console.log("selectedList:", selectedList);
	console.log("category:", selectedList?.category);
	return (
		<div className="bg-background h-full w-full border-border border-1 rounded-2xl flex pt-24 px-48">
			{selectedList.category.map((category, index) => (
				<TaskCategory key={index} category={category} />
			))}
		</div>
	);
};

export default MainContainer;
