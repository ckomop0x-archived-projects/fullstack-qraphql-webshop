import React, { Component } from "react";
import PropTypes, { number } from "prop-types";
import Link from "next/link";
import Title from "../components/styles/Title";
import ItemStyles from "../components/styles/ItemStyles";
import PriceTag from "../components/styles/PriceTag";
import formatMoney from "../lib/formatMoney";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: "/item",
              query: { id: item.id }
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>

        <div>{}</div>

        <div>{item.image}</div>
        <div>{item.largeImage}</div>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>

        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: item.id }
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <button>Add to cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    largeImage: PropTypes.string,
    price: number
  })
};

export default Item;
