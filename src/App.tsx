import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.css";
import Card from "./components/productCard/card";
import FilterMenu from "./components/filterMenu/filterMenu";
import Products from "./content/products.json";
import FilterMenuContent from "./content/FilterMenu.json";

import fast from "./components/assests/svg/fast.svg";
import sadFace from "./components/assests/svg/sadFace.svg";
import TheNewSB from "./components/assests/images/TheNewSOUNDBOKS.png";
import SB2 from "./components/assests/images/SOUNDBOKS2.png";
import RF50 from "./components/assests/images/SOUNDBOKSXRF50.png";
import SBMK from "./components/assests/images/SOUNDBOKSXMIKKELLER.png";
import EP from "./components/assests/images/ExplorePack.png";
import BP from "./components/assests/images/Backpack.png";
import OG from "./components/assests/images/OrangeGrill.png";
import WG from "./components/assests/images/WhiteGrill.png";
import BG from "./components/assests/images/BlackGrill.png";
import Charger from "./components/assests/images/CHARGER.png";
import GiftCard from "./components/assests/images/GiftCard.png";
import BB from "./components/assests/images/BATTERYBOKS.png";
import JBG from "./components/assests/images/SOUNDBOKSXJBG.png";

function App() {
  // convert JSON Array to string
  const stringProduct = JSON.stringify(Products);
  // Parse Objects from string to new array
  const products = JSON.parse(stringProduct);
  const productCards = products.map(
    (product: {
      title: string;
      price: string;
      info: string;
      policy: string;
      offer: string;
      product: string;
      reducedPrice: string;
      icon: string;
      image: string;
      link: string;
      stock: string;
      limited: boolean;
      type: string;
    }) => {
      return (
        <Card
          title={product.title}
          price={product.price}
          info={product.info}
          policy={product.policy}
          offer={product.offer}
          product={product.product}
          reducedPrice={product.reducedPrice}
          image={
            product.image === "TheNewSOUNDBOKS"
              ? TheNewSB
              : "" || product.image === "SOUNDBOKS2"
              ? SB2
              : "" || product.image === "ExplorePack"
              ? EP
              : "" || product.image === "SOUNDBOKSXMIKKELLER"
              ? SBMK
              : "" || product.image === "SOUNDBOKSXRF50"
              ? RF50
              : "" || product.image === "SOUNDBOKSXJBG"
              ? JBG
              : "" || product.image === "OrangeGrill"
              ? OG
              : "" || product.image === "WhiteGrill"
              ? WG
              : "" || product.image === "BlackGrill"
              ? BG
              : "" || product.image === "CHARGER"
              ? Charger
              : "" || product.image === "BATTERYBOKS"
              ? BB
              : "" || product.image === "GiftCard"
              ? GiftCard
              : "" || product.image === "Backpack"
              ? BP
              : ""
          }
          icon={
            product.icon === "fast"
              ? fast
              : "" || product.icon === "sadFace"
              ? sadFace
              : ""
          }
          link={product.link}
          stock={product.stock}
          limited={product.limited}
          type={product.type}
        />
      );
    }
  );
  return (
    <div className="App">
      <div className="AppContainer">
        <Header />
                <FilterMenu
        menuItem1={FilterMenuContent.menuItem1}
        menuItem2={FilterMenuContent.menuItem2}
        menuItem3={FilterMenuContent.menuItem3}
        menuItem4={FilterMenuContent.menuItem4}
        menuItem5={FilterMenuContent.menuItem5}
      />
        <div className="Container">
          <div className="GridWrapper">{productCards}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
