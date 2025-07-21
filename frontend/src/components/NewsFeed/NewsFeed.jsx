import { useEffect, useState } from 'react';
import AdCard from '../Cards/AdCard';

function NewsFeed() {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch('ads.json')
    .then(ad => ad.json())
    .then(data => {
      console.log(data.ads);
      setAds(data.ads)
    })
  }, [])

console.log(ads);
  return (
    <>
      <h3 className="text-4xl font-bold text-left ml-8 mt-12">News Feed</h3>
      <section className='flex flex-wrap max-sm:justify-center'>
        {ads.map(ad => {
          console.log(ad);
          return(
            <>
              <AdCard
                id={ad.id}
                title={ad.name}
                description={ad.description}
                price={ad.price}
                seller={ad.seller}
                image={ad.image}
              />
            </>
          )
        })}
      </section>
    </>
  )
}

export default NewsFeed
