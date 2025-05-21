import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full p-6 flex flex-col items-center justify-center">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;
