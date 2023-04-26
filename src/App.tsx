import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyOutlet from "./pages/MyOutlet";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyOutlet />}>
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
