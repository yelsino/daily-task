import imgAlexis from "../assets/alexi.jpg";

function Header() {
    return (
        <div className="flex justify-between items-center ">
        <div className="bg-gray-100 h-14 w-14 relative rounded-2xl">
          <span className="bg-black w-1 h-1 absolute rounded-full top-5 right-5"></span>
          <span className="bg-black w-1 h-1 absolute rounded-full top-5 left-5"></span>
          <span className="bg-black w-1 h-1 absolute rounded-full bottom-5 right-5"></span>
          <span className="bg-black w-1 h-1 absolute rounded-full bottom-5 left-5"></span>
        </div>

        <img className="w-14 h-14 object-cover rounded-2xl" src={imgAlexis} />
      </div>
    )
}

export default Header;