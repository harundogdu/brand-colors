import { Routes, Route } from "react-router-dom";
import Sidebar from "components/Sidebar";
import HomePage from "views/HomePage";
import Collection from "views/Collection";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection/:slug" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
