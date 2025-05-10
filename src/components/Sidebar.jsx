import React from "react";
import ItemsList from "./ItemsList";

const Sidebar = ({ lists, selectedList, addList, setSelectedList }) => {
	return (
		<aside className="fixed top-0 left-0 w-[260px] bg-background h-full flex flex-col justify-between">
			<div className="flex flex-col py-(--sidebar-spacing) gap-(--sidebar-spacing)">
				<h1
					href=""
					className="text-[24px] font-bold text-center text-white"
				>
					To-Do React App
				</h1>
				<div className="line"></div>
				<ItemsList
					addList={addList}
					lists={lists}
					selectedList={selectedList}
					setSelectedList={setSelectedList}
				/>
			</div>
		</aside>
	);
};

export default Sidebar;
