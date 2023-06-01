import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mb-32 flex flex-col lg:grid lg:mb-0 lg:grid-cols-2 lg:text-left">
      <a
        href="/pubmed"
        className="group rounded-lg border border-transparent px-0 py-2 lg:px-5 lg:py-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
      >
        <h2 className={`mb-2 md:mb-3 lg:text-2xl font-semibold`}>
          PubMed Api{' '}
        </h2>
        <p className={`lg:block m-0 max-w-[30ch] text-sm opacity-50`}>
          How to use pubMed Api.
        </p>
      </a>



    </div>
  )
}
