/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [isBlog, setIsBlog] = useState(false);

  const handleSetIsBlogTrue = () => {
    setIsBlog(true);
  };

  const handleSetIsBlogFalse = () => {
    setIsBlog(false);
  };

  return (
    <BlogContext.Provider
      value={{ isBlog, handleSetIsBlogTrue, handleSetIsBlogFalse }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
