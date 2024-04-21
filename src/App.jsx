import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import BlogProvider from "./contexts/BlogContext";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <BlogProvider>
        <AppHeader />
        <PageRoutes />
        <AppFooter />
      </BlogProvider>
    </>
  );
}

export default App;
