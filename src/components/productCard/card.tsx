import "./card.css";
interface Card {
  title: string;
  price: string;
  info: string;
  policy: string;
  offer: string;
  product: string;
  reducedPrice: string;
  image: string;
  icon: string;
  link: string;
}

const ProductCard = ({
  title,
  price,
  info,
  policy,
  offer,
  product,
  reducedPrice,
  image,
  icon,
  link,
}: Card) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={policy === "Out of Stock" ? "CardBox2" : "CardBox"}>
        <div className="CardHeader">
          <div className={icon !== "" ? "CardTitleColumn" : "CardTitleRow"}>
            <p
              className={
                policy !== "Out of Stock" ? "CardText" : "OutOfStockText"
              }
            >
              {policy}
            </p>
            <p className={offer !== "" ? "CardText1" : "NoOffer"}>{offer}</p>
          </div>
          <div className="IconBox">
            <img
              src={icon}
              className={icon !== "" ? "Icon" : "NoIcon"}
              alt="icon"
            />
          </div>
        </div>
        <div
          className={
            policy === "Out of Stock" ? "BuyButtonBox2" : "BuyButtonBox"
          }
        >
          <p className="BuyText">Køb</p>
        </div>
        <div className="CardImageBox">
          <img src={image} className="Image" alt="product" />
        </div>
        {reducedPrice === "" ? (
          <div className="CardTitle2">
            <p className="CardText2">{product}</p>
            <p className="CardText2">{price}</p>
          </div>
        ) : (
          <div className="CardTitle2">
            <p className="CardText2">{product}</p>
            <div className="ReducedPrice">
              <p className="CardText22">{price}</p>{" "}
              <p className="CardText23">{reducedPrice}</p>
            </div>
          </div>
        )}

        <div className="CardInfo">
          <p className="CardText3">{info}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
