import ApplicationLogo from "../components/ApplicationLogo"
import MainTitle from "../components/MainTitle"
import Desc from "../components/Desc"
import Link from "next/link"

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

export default function Success() {
  return (
    <div className="mb-12">
      <ApplicationLogo />
      <div className="max-w-xl">
        <MainTitle text="Thank you!" />
        <Desc text="For inquiries call 1800-EIP-4337" />
      </div>

      <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
        <h2 id="order-heading" className="sr-only">
          Your order
        </h2>

        <h3 className="sr-only">Items</h3>
        {products.map((product) => (
          <div key={product.id} className="flex space-x-6 py-10">
            <img
              src={product.imageSrc}
              className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
            />
            <div className="flex flex-auto flex-col">
              <div>
                <h4 className="font-medium text-gray-900">
                  <div>{product.name}</div>
                </h4>
                <p className="mt-2 text-sm text-gray-600">{product.desc}</p>
              </div>
              <div className="mt-6 flex flex-1 items-end">
                <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                  <div className="flex">
                    <dt className="font-medium text-gray-900">Quantity</dt>
                    <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                  </div>
                  <div className="flex pl-4 sm:pl-6">
                    <dt className="font-medium text-gray-900">Price</dt>
                    <dd className="ml-2 text-gray-700">{product.price}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}

        <dl className="space-y-2 text-sm bg-gray-100 p-4 rounded-xl mb-4">
          <Desc text="ORDER SUMMARY" />
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">Price</dt>
            <dd className="text-gray-700">20 USDC</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">Gas Fee</dt>
            <dd className="text-gray-700">$0.02</dd>
          </div>
          <div className="flex justify-between pb-4">
            <dt className="font-medium text-gray-900">Points Earned</dt>
            <dd className="text-gray-700">+220 points</dd>
          </div>

          <div className="flex justify-between pt-4 border-t">
            <p className="text-base font-medium text-gray-900">Grand Total</p>
            <p className="text-primary text-lg font-semibold">10.02USDC</p>
          </div>
        </dl>

        <dl className="space-y-2 text-sm bg-gray-100 p-4 rounded-xl mb-4">
          <Desc text="TXN DETAILS" />
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">Txn Hash</dt>
            <dd className="text-gray-700">0x2e16c4e...</dd>
          </div>
          <div className="flex justify-between pb-4">
            <dt className="font-medium text-gray-900">Status</dt>
            <dd className="text-gray-700">Success</dd>
          </div>

          <div className="flex justify-center pt-4 border-t border-gray-200">
            <Link href={`https://etherscan.io/`} target="_blank">
              <p className="text-base font-medium text-gray-900 flex items-center gap-1">
                View Txn on Explorer
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                </svg>
              </p>
            </Link>
          </div>
        </dl>

        <Link
          href={`/card-list`}
          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-primary hover:opacity-80 px-4 py-2 text-base font-medium text-white focus:outline-none md:w-auto"
        >
          View Membership
        </Link>
      </section>
    </div>
  )
}