import Image from 'next/image';

interface ICard {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
}


export default function card({ img, title, description, tags }: ICard) {
  return (
    <div className="md:p-10">
      <div className="max-w-sm overflow-hidden rounded-lg shadow-2xl dark:shadow-gray-800 bg-white/30 dark:bg-white/5">
        <Image className="object-cover max-w-s h-60" src={img} alt={title} width={500} height={500} />
        <div className="px-3 py-4">
          <div className="mb-2 text-xl font-bold dark:text-white">{title}</div>
          <p className="text-base text-gray-800 dark:text-gray-300 px-1.5">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {
            tags.map((tag, id) => (
              <h2 key={id} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full" title={tag}>#{tag}</h2>
            ))
          }
        </div>
        <button className='block px-8 py-2 mx-auto my-3 text-xl text-center bg-white shadow-lg w-52 rounded-xl text-gray-800'>Show Prices</button>
      </div>
    </div>
  )
}
