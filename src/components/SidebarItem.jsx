import React from "react";
import { MdOutlineSchool } from "react-icons/md";

const SidebarItem = ({ name, selectedList, setSelectedList, list }) => {
	console.log(selectedList);
	return (
		<li
			className={`text-white flex text-[15px] w-full h-12 items-center gap-2 px-3
				hover:bg-selected rounded-lg cursor-pointer
				${selectedList.id == list.id ? "bg-selected" : ""}`}
			title={name}
			onClick={() => setSelectedList(list)}
		>
			<MdOutlineSchool className="text-[30px]" />
			<span className="text-ellipsis whitespace-nowrap overflow-hidden">
				{name}
			</span>
		</li>
	);
};

export default SidebarItem;
