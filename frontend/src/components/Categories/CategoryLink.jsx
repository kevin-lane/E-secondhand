function CategoryLink(props) {
  return (
    <div className="m-8">
      <button className="w-16 h-16 bg-[#D8D8D8]  p-5 rounded-full">
        <a className="text-center" href="">
          {props.icon}
        </a>
      </button>
      <p>{props.text}</p>
    </div>
  )
}

export default CategoryLink;
