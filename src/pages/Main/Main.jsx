import "./Main.scss";
import Header from "../../components/Header/Header";
import AddProduct from "../../components/AddProduct/AddProduct";

function Main() {
  return (
    <>
      <div className="background">
        <Header />
        <section className="add-container">
          <AddProduct />
        </section>
      </div>
    </>
  );
}

export default Main;
