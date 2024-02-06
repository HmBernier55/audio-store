import React from 'react';

import RightArrow from '../assets/shared/desktop/icon-arrow-right.svg';

const CategoryLinks = ({thumbnail, title}) => {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <div>
        <p>SHOP</p>
        <img src={RightArrow} alt="right arrow icon" />
      </div>
    </div>
  )
}

export default CategoryLinks;