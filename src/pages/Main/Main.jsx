import "./Main.scss";
import Header from "../../components/Header/Header";
import AddProduct from "../../components/AddProduct/AddProduct";

function Main() {
  return (
    <>
      <Header />
      <section className="add-container">
        <AddProduct />
      </section>
    </>
  );
}

export default Main;
