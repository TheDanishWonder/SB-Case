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
  stock: string;
  limited: boolean;
  type: string;
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
  stock,
  limited,
  type,
}: Card) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="product" id={`tag:${type}`} data-tag={type}>
      <div className={policy === "Out of stock" ? `CardBox2` : `CardBox`}>
        <div className="CardHeader">
          <div
            className={
              icon !== "" && offer !== "left in stock"
                ? "CardTitleColumn"
                : "CardTitleRow"
            }
          >
            <p
              className={
                policy === ""
                  ? "NoOffer"
                  : policy === "Out of stock" || policy === "Artist Editions"
                  ? "OrangeText"
                  : policy === "Compatible with all SOUNDBOKS versions"
                  ? "BlackText"
                  : "CardText"
              }
            >
              {policy}
            </p>
            <p className={offer !== "" ? "CardText1" : "NoOffer"}>
              {stock} {offer}
            </p>
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
          <p className={policy === "Out of Stock" ? "BuyText2" : "BuyText"}>
            Køb
          </p>
        </div>
        <div className="CardImageBox">
          <img src={image} className="Image" alt="product" />
        </div>
        {reducedPrice === "" ? (
          <div className="CardTitle2">
            <p className="CardText2">{product}</p>
            <p className="CardText2">{price} kr.</p>
          </div>
        ) : (
          <div className="CardTitle2">
            <p className="CardText2">{product}</p>
            <div className="ReducedPrice">
              <p className="CardText22">{price} kr.</p>{" "}
              <p className="CardText23">{reducedPrice} kr.</p>
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
