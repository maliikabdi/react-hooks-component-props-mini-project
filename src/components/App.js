import React from "react";
import blogData from "../data/blog"; // assuming blogData has properties: name, image, about, and posts

// Import the components
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      {/* Header component, passing blog name */}
      <Header name={blogData.name} />

      {/* About component, passing image and about text */}
      <About image={blogData.image} about={blogData.about} />

      {/* ArticleList component, passing posts array */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
