import { useEffect, useState } from 'react';
import AdCard from '../Cards/AdCard';
import axios from 'axios';


function NewsFeed() {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch('ads.json')
    .then(ad => ad.json())
    .then(data => {
      console.log(data.ads);
      // setAds(data.ads)
    });
    axios.get("http://localhost:4000/items")
    .then(response => {
      console.log(response.data);
      setAds(response.data)
    })
    .catch(err => console.error("Error fetching items", err));
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
                id={ad._id}
                title={ad.title}
                description={ad.description}
                price={ad.price}
                seller={ad.seller.fullName}
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
