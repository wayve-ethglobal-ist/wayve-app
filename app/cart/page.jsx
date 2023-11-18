'use client'

import { useState } from 'react'
import MainTitle from '../components/MainTitle'
import Desc from '../components/Desc'
import ReactSlider from 'react-slider'
import ApplicationLogo from '../components/ApplicationLogo'
import Breadcrumbs from '../components/Breadcrumbs'

const products = [
  {
    id: 1,
    name: 'Nouns Tee',
    price: '10 USDC',
    desc: 'A fun, quirky way to flaunt commitment to your bags.',
    imageSrc: 'https://m.media-amazon.com/images/I/A1nYNISnPeL._AC_CLa%7C2140%2C2000%7CA1-AZz8Vd-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png',
    imageAlt: 'Front of mint cotton t-shirt with wavey lines pattern.',
    qty: 2,
  },
  {
    id: 2,
    name: 'Nouns Polo',
    price: '10 USDC',
    desc: 'Shades you from the glare of Layer 2 breakneck innovation.',
    imageSrc: 'https://d1q9av5b648rmv.cloudfront.net/v3/1024x1024/full-graphic-t-shirt/xl/white/front/10133404/1654778847-440x600.png.13.415-0.0017+0.0.jpg?h=2141967dcd031dccb1ffc8a80e027234aafaaacb&printed=true',
    imageAlt: 'Front of charcoal cotton t-shirt.',
    qty: 1,
  },
]

export default function Cart() {
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleBeforeChange = () => {
    setIsDragging(true);
  };

  const handleAfterChange = (newValue) => {
    setIsDragging(false);
    if (newValue !== 100) {
      setValue(0);
      return;
    }

    window.location.href = '/success';
  };

  return (
    <div>
      <ApplicationLogo />
      <Breadcrumbs 
        pages={[
          { name: 'Success', href: 'success' },
          { name: 'Card', href: 'card-list' },
        ]} 
      />
      <main className="mb-12">
        <MainTitle text="Shopping Cart"/>
        <Desc text="Checkout with crypto" />

        <form className="mt-6">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <div className="font-medium text-gray-700 hover:text-gray-800">
                            {product.name}
                          </div>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                        <span className="font-medium mr-2">Quantity</span>
                        {product.qty}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 font-medium text-primary text-xl">20 USDC</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">Total amount will be calculated at checkout</p>
            </div>

            <div className="relative mt-10">
              <ReactSlider
                className="w-100 h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-700 rounded-lg"
                thumbClassName="top-[1px] w-[50px] h-[48px] bg-primary rounded-lg cursor-pointer outline-none focus:outline-none"
                trackClassName="bg-red-300"
                value={value}
                onChange={handleChange}
                onBeforeChange={handleBeforeChange}
                onAfterChange={handleAfterChange}
              />
              <div className={`absolute top-3 w-full text-center transition-opacity duration-500 text-white font-medium ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
                Slide to Purchase
              </div>
            </div>
          </section>
        </form>
      </main>
    </div>
  )
}