import React from "react";
import CollectionItem from '../collection-item/collection-item.component';
import "./collection-preview.styless.scss";


const CollectionPreview = ({ title, items }) => {
  /* console.log("CollectionPreview => ", items, title) */

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otherItemPrpos}) => (
            <CollectionItem key={id} {...otherItemPrpos}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
