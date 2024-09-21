import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import items from "../../mockData/items.json";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GetRelatedProducts from '../relatedProducts/RelatedProducts'

const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function ItemDetail() {
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Back</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="item-detail-info">
          {/* Product name, category, and availability on the same line */}
          <div className="item-info-line">
            <div className="item-name">{item.name}</div>
            <div className="item-category">Category: Man {item.category}</div>
            <div className="item-availability">
              Availability: {item.available ? "In Stock" : "Out of Stock"}
            </div>
          </div>

          {/* Cost and discount on the same line */}
          <div className="item-info-line">
            <div className="item-price">
              ${item.price}
            </div>
            {item.saleDiscount && (
              <div className="item-discount">Discount: -{item.saleDiscount}%</div>
            )}
          </div>

          {/* Size, color, and quantity on the same line */}
          <div className="item-selection-line">
            <select
              className="item-size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>

            <select
              className="item-color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Color</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Black">Black</option>
            </select>

            <div className="item-quantity">
              <label>Qty:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                max={item.available ? 10 : 0}
              />
            </div>
          </div>

          {/* Add to Cart and Wishlist buttons on the same line */}
          <div className="item-action-line">
            <button
              className="item-btn"
              disabled={isAdded}
              onClick={() => {
                addItemToCartList(item);
                setIsAdded(true);
              }}
            >
              {isAdded ? <Link to="/cart">Go to Cart</Link> : "Add To Bag"}
            </button>

            <button className="item-wishlist-btn">
              Add to Wishlist
            </button>
          </div>

          {/* Social media share */}
          <div className="social-media-share">
            <h4>Share:</h4>
            <a href={`https://facebook.com/sharer/sharer.php?u=example.com`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
            <a href={`https://twitter.com/intent/tweet?url=example.com`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a href={`https://instagram.com`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href={`https://linkedin.com/sharing/share-offsite/?url=example.com`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>

          {/* Item description */}
          <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pulvinar risus. Suspendisse imperdiet,</p>
        </div>
      </div>
      <GetRelatedProducts items={items}/>
    </div>
  );
}

export default ItemDetail;
