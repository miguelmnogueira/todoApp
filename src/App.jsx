import "./App.css";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
	const [lists, setLists] = useState([]);
	const [selectedList, setSelectedList] = useState({
		id: "",
		category: [],
	});
	const addList = () => {
		const newList = {
			id: crypto.randomUUID(),
			name: "New List",
			category: [{ name: "School Tasks", tasks: [] }],
		};
		setLists([...lists, newList]);
	};
	return (
		<div className="bg-background w-screen h-screen pl-[260px] flex justify-center items-center">
			<Sidebar
				lists={lists}
				setSelectedList={setSelectedList}
				selectedList={selectedList}
				addList={addList}
			/>
			<div className="w-full h-full py-3 pr-3">
				<MainContainer
					setLists={setLists}
					selectedList={selectedList}
				/>
			</div>
		</div>
	);
}

export default App;
