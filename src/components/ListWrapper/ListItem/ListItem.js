import React from "react";
import "./ListItem.css";
import PropsTypes from "prop-types";

const ListItem = ({ name, description, image, link }) => (
  <li className="listItem__wrapper">
    <img src={image} alt="" className="listItem__image" />
    <div>
      <h2 className="listItem__name">{name}</h2>
      <p className="listItem__description">{description}</p>
      <a href={link} className="listItem__button">
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propsTypes = {
  name: PropsTypes.string.isRequired,
  description: PropsTypes.string,
  image: PropsTypes.string.isRequired,
  link: PropsTypes.string.isRequired
};

ListItem.defaultProps = {
  description: "test"
};

export default ListItem;
