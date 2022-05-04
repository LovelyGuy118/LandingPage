import "./style.css";
import Home from "./components/home";
import About from "./components/about";
import Layout from "./components/layout";

export default function App() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}
