import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { AboutFooter, CategoryCardContainer, ProductLink } from '../components/index';

const CategoryPage = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    fetch('/productData.json')
      .then((response) => response.json())
      .then((response) => {
        const products = response.filter(product => product.category === category);
        setData(products);
        setIsLoading(false);
      });
  }, [category])

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <ReactLoading type='spokes' color='#000000' height={150} width={150} className='flex items-center my-10' />
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='bg-black h-60 flex justify-center items-center w-full'>
        <h1 className='text-white text-3xl font-semibold tracking-[1px] uppercase sm:text-5xl'>{category}</h1>
      </div>
      <div className='flex flex-col items-center gap-16 mb-28 lg:gap-40'>
        {data.map(product => (
          <ProductLink
            productData={product}
            newProduct={product.new}
            url={`/${product.category}/${product.slug}`}
            key={product.id}
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