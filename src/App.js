import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"ivan"}/>
      <ProductCard title={"Producto 1"} price={200} isRed={false}/>
      <ProductCard title={"Producto 2"} price={300} isRed={true}/>
      <Footer />
    </div>
  );
}

export default App;
