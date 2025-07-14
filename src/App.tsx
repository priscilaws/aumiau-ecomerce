import Header from "./components/Header";
import { GlobalCss } from "./styles";
import ProductsList from "./components/ProductsList";
import { createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

const routes = createBrowserRouter([
  {
    path: "",
    element: <></>,
  },
]);

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <ProductsList title={"Nossos Produtos"} background={"gray"} />
        <Footer />
      </div>
    </>
  );
}

export default App;
