import { Route, Routes } from "react-router-dom";
import { NavBar } from "./pages/NavBar";
import { UserPage } from "./pages/UserPage";
import { TaskPage } from "./pages/TaskPage";
import "./styles.css";
import { PostsPage } from "./pages/PostsPage";

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </div>
  );
};
