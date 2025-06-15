function Hero(props) {
  return (
    <section className={`bg-white ${props.width} h-56 opacity-80 rounded-lg p-8 m-4 max-xl:w-96 max-md:w-72 max-md:h-48`}>
      <h2 className='text-4xl mb-8 max-md:text-3xl'>{props.heading}</h2>
      <button className='bg-[#A65A5A] opacity-100 w-96 size-12 rounded-lg text-white max-xl:w-64 max-md:w-56'>{props.buttonText}</button>
    </section>
  )
}

export default Hero;
