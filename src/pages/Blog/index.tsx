import React from "react";
import BlogBox from "../../components/BlogBox";

const Blog: React.FC = () => {
  return (
    <div className="px-5 py-4 flex flex-col">
      <h1 className="font-bold text-head-04 font-sans">Blog</h1>
      <div className="mt-3">
        <BlogBox title="first blog">This is my first blog</BlogBox>
      </div>
    </div>
  );
};
export default React.memo(Blog);
