import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SendIcon from "../components/Icons/SendIcon";
import CardIcon from "../components/Icons/CardIcon";
import PaymentDeliveryForm from "../components/Modals/PaymentDeliveryForm";
import { IsLoggedInContext } from "../context/IsLoggedInContext";
import LoginPrompt from "../components/Modals/LoginPrompt";
import axios from "axios";


function AdDetail(props) {
  console.log(props.id);
  const { id } = useParams();
  const [ad, setAd] = useState(null);
  const [readyToOrder, setReadyToOrder] = useState(false);
  const {isLoggedIn, setIsLoggedIn} = useContext(IsLoggedInContext);

  useEffect(() => {
    // fetch('ads.json')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.ads);
    //     const foundAd = data.ads.find((item) => item.id == id);
    //     setAd(foundAd);
    //     console.log(foundAd);

    //   });
      axios.get("http://localhost:4000/items")
      .then(response => {
        const selectedAd = response.data.find((item) => item._id == id);
        console.log(selectedAd);
        setAd(selectedAd);
      })
      .catch((err) => console.error("Error loading item", err))

    }, [id]);
    console.log(ad);

  if (!ad) return <p>Loading...</p>;

  return (
    <>
    { readyToOrder ? <PaymentDeliveryForm /> : null }
    <article className="flex m-12 max-lg:block">
      <section>
        <img src="https://img.tradera.net/images/915/600479915_9319e52a-cff2-44ac-b363-03c9aa0cdbf5.jpg" alt="Iphone" width={500} />
      </section>
      <section>
        <PaymentDeliveryForm />
      </section>
      <section className="p-12">
        <h1>{ad.title}</h1>
        <p>{ad.description}</p>
        <strong>{ad.price}:-</strong>
        <p>Seller: {ad.seller.fullName}</p>
        <button className="m-4 p-3 border rounded bg-[#953A3A] text-white">Buy now</button>
        <button className="m-4 p-3 border rounded border-black">Contact seller</button>
      </section>

      <article className="block">
        <section className="p-6 m-6 border-2">
          <p className="mb-4">Chat with {ad.seller.fullName}</p>
          <hr></hr>
          <aside className="bg-white w-64 h-64 inline-block">
            {isLoggedIn ? <p className="p-8">Please write your message to {ad.seller}</p> : <LoginPrompt />
            }
          </aside>
          <hr></hr>
          <input className="border-2 border-gray-600 rounded-xl p-2 mt-8 mr-2" placeholder="Write your message here"></input>
          <button className="border-solid p-3 bg-blue-600 rounded-xl"><SendIcon /></button>
        </section>

        <section className="p-6 m-6 border-2">
          <p className="mb-4">Payment Methods</p>
          <hr></hr>

          <aside className="p-8 space-x-8 max-w-[475px]:space-y-4">
            <button className="" onClick={() => setReadyToOrder(true)}><img src="swish.png" alt="swish" width={100} height={100}/></button>
            <button className=""><CardIcon /></button>
          </aside>
          <p>Delivery and how it works</p>
          <hr></hr>
          <p>When you have made your order and reserved  your payment, one of e-Secondhands delivery agents will deliver the order from the seller to the buyer.
The seller will not recieve the payment before your order has been delivered to you.</p>
        </section>
      </article>
    </article>
    </>
  )
}

export default AdDetail
