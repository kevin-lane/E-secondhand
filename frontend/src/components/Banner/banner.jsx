import Hero from "./Hero";

function Banner() {
  // Adjust size of Heros here (only for desktop mode)
  const widthLeftHero = 'w-1/3';
  const widthRightHero = 'w-1/3';

  return (
    <header className='flex items-center w-screen h-[32rem] bg-[url(assets/banner_image.jpg)] bg-auto bg-center bg-no-repeat max-md:flex-col '>
      <Hero width={widthLeftHero} heading="Want to empty your closet?" buttonText="Sell now"/>
      <Hero width={widthRightHero} heading="Welcome to a new beginning" buttonText="Use code: SUMMER2025 FOR 30% OFF"/>
    </header>
  )
}

export default Banner;
