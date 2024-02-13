import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { ProductLink, OtherProductLink, CategoryCardContainer, AboutFooter } from '../components/index';

const DetailPage = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category, slug } = useParams();

  useEffect(() => {
    fetch('/productData.json')
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
        productData={data[0]}
        url='/'
        detailPage={true}
        btnText='ADD TO CART'
      />
      <div className='flex flex-col w-[85vw] my-20 gap-20 lg:my-40 lg:justify-between lg:w-[65vw]'>
        <div className='flex flex-col gap-8 lg:w-2/3'>
          <h2 className='font-semibold text-2xl tracking-[1px] lg:text-3xl'>FEATURES</h2>
          <p className='opacity-50'>{data[0].features}</p>
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='font-semibold text-2xl tracking-[1px] lg:text-3xl'>IN THE BOX</h2>
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
      <div className='flex flex-col w-[85vw] gap-5 mb-28 sm:flex-row sm:h-[592px] lg:w-[65vw] lg:gap-8'>
        <div className='flex flex-col gap-5 sm:h-full sm:w-[45%] sm:justify-between'>
          <img className='object-cover rounded-lg sm:h-[47%] sm:w-full' src={new URL(data[0].gallery.first.desktop, import.meta.url).href} alt="gallery photo" />
          <img className='object-cover rounded-lg sm:h-[47%] sm:w-full' src={new URL(data[0].gallery.second.desktop, import.meta.url).href} alt="gallery photo" />
        </div>
        <img className='object-cover rounded-lg sm:w-[55%] sm:h-full' src={new URL(data[0].gallery.third.desktop, import.meta.url).href} alt="gallery photo" />
      </div>
      <div className='flex flex-col items-center mt-28 mb-28'>
        <h3 className='font-semibold text-2xl tracking-[1px] mb-10 sm:text-3xl lg:mb-16'>YOU MAY ALSO LIKE</h3>
        <div className='flex flex-col w-[85vw] gap-14 md:gap-5 md:flex-row lg:w-[65vw]'>
          {data[0].others.map((otherProduct, index) => (
            <OtherProductLink
              key={index}
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