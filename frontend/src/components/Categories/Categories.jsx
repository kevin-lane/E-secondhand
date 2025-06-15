import BedIcon from "../Icons/BedIcon";
import CarIcon from "../Icons/CarIcon";
import ClothesIcon from "../Icons/ClothesIcon";
import ElectronicsIcon from "../Icons/ElectronicsIcon";
import HobbiesIcon from "../Icons/HobbiesIcon";
import CategoryLink from "./CategoryLink";

function Categories() {
  return (
    <>
      <h3 className="text-4xl font-bold text-left ml-8 mt-12">Categories</h3>
      <section className="flex mt-12 md:ml-12 max-lg:flex-wrap">
        <CategoryLink text="Cars" icon={<CarIcon />} />
        <CategoryLink text="Clothes" icon={<ClothesIcon />}/>
        <CategoryLink text="Home" icon={<BedIcon />} />
        <CategoryLink text="Electronics" icon={<ElectronicsIcon />} />
        <CategoryLink text="Hobbies" icon={<HobbiesIcon />} />
      </section>
    </>
  )
}

export default Categories;
