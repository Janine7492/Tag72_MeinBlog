import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import BlogPage from "./pages/BlogPage.jsx";
import BlogEditor from "./pages/BlogEditor.jsx";
import Landing from "./pages/LandingPage.jsx";
import Loading from "./pages/LoadingPage.jsx";
import BlogDetail from "./components/blogDetail/BlogDetail.jsx";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9898/blog')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Landing />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/blog" element={<BlogPage setPosts={setPosts} posts={posts} />} />
          <Route path="/edit" element={<BlogEditor setPosts={setPosts} posts={posts} />} />
          <Route path="/detail/:id" element={<BlogDetail posts={posts} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
