import React from 'react'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function HomePage() {
  await delay(700);
  return (
    <div className='min-h-[calc(100vh-200px)]'>
      Clothing store
    </div>
  )
}
