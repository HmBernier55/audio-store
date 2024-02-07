import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AboutFooter, CategoryCardContainer, ProductLink } from '../components/index';

const CategoryPage = () => {

  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch('/src/api/productData.json')
      .then((response) => response.json())
      .then((response) => {
        const products = response.filter(product => product.category === category);
        setData(products);
      });
  }, [category])

  return (
    <div className='flex flex-col items-center'>
      <div className='bg-black h-60 flex justify-center items-center w-full'>
        <h1 className='text-white text-5xl font-semibold tracking-[1px] uppercase'>{category}</h1>
      </div>
      <div className='flex flex-col items-center'>
        {data.map(product => (
          <ProductLink
            image={product.categoryImage.desktop}
            name={product.name}
            description={product.description}
            newProduct={product.new}
            url={`/${product.category}/${product.slug}`}
            key={product.id}
            price={product.price}
            btnText='SEE PRODUCT'
          />
        ))}
      </div>
      <CategoryCardContainer />
      <AboutFooter />
    </div>
  )
}

export default CategoryPage;