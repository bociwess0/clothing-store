import ProductList from '@/components/shared/product/ProductList';
import { getLatestProducts } from '@/lib/actions/product.actions';
import React from 'react'


export default async function HomePage() {

  const  latestProducts = await getLatestProducts();
  
  return (
    <div className='min-h-[calc(100vh-200px)]'>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
    </div>
  )
}
