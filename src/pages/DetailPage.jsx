import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { ProductLink, OtherProductLink, CategoryCardContainer, AboutFooter } from '../components/index';

const DetailPage = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category, slug } = useParams();

  useEffect(() => {
    fetch('/src/api/productData.json')
      .then((response) => response.json())
      .then((response) => {
        const product = response.filter(item => item.slug === slug);
        setData(product);
        setIsLoading(false);
      });
  }, [slug])

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <ReactLoading type='spokes' color='#000000' height={150} width={150} className='flex items-center my-10' />
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <ProductLink
        image={data[0].categoryImage.desktop}
        name={data[0].name}
        description={data[0].description}
        newProduct={data[0].new}
        url='/'
        detailPage={true}
        price={data[0].price}
        btnText='ADD TO CART'
      />
      <div className='flex w-[65vw] my-40 justify-between'>
        <div className='w-2/3 flex flex-col gap-8'>
          <h2 className='font-semibold text-3xl tracking-[1px]'>FEATURES</h2>
          <p className='opacity-50'>{data[0].features}</p>
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='font-semibold text-3xl tracking-[1px]'>IN THE BOX</h2>
          <div className='flex flex-col gap-2'>
            {data[0].includes.map(addOn => (
              <div key={addOn.item} className='flex gap-6'>
                <p className='text-orange-button font-semibold'>{`${addOn.quantity}x`}</p>
                <p className='opacity-50'>{addOn.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex w-[65vw] h-[592px] gap-8 mb-40'>
        <div className='flex flex-col h-full w-[45%] justify-between'>
          <img className='h-[47%] w-full object-cover rounded-lg' src={new URL(data[0].gallery.first.desktop, import.meta.url).href} alt="gallery photo" />
          <img className='h-[47%] w-full object-cover rounded-lg' src={new URL(data[0].gallery.second.desktop, import.meta.url).href} alt="gallery photo" />
        </div>
        <img className='w-[55%] h-full object-cover rounded-lg' src={new URL(data[0].gallery.third.desktop, import.meta.url).href} alt="gallery photo" />
      </div>
      <div className='flex flex-col items-center'>
        <h3 className='font-semibold text-3xl tracking-[1px] mb-16'>YOU MAY ALSO LIKE</h3>
        <div className='flex w-[65vw] gap-5'>
          {data[0].others.map(otherProduct => (
            <OtherProductLink
              slug={otherProduct.slug}
              name={otherProduct.name}
              category={otherProduct.category}
              image={otherProduct.image.desktop}
            />
          ))}
        </div>
      </div>
      <CategoryCardContainer />
      <AboutFooter />
    </div>
  )
}

export default DetailPage;