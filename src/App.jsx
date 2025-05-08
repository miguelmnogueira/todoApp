import "./App.css";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-background w-screen h-screen pl-[260px] flex justify-center items-center">
      <Sidebar />
      <div className="w-full h-full py-3 pr-3">
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
