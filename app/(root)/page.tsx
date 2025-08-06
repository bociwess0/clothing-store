import ProductList from '@/components/shared/product/ProductList';
import sampleData from '@/db/sample-data';
import React from 'react'


export default async function HomePage() {
  
  return (
    <div className='min-h-[calc(100vh-200px)]'>
      <ProductList data={sampleData.products} title='Newest Arrivals' limit={4} />
    </div>
  )
}
