import icon from "../assets/branding/ICON 1.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar min-h-8 pb-0">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src={icon} alt="icon" className="w-10 h-10" />
            <p>Finesse</p>
          </a>
        </div>
        <div className=" flex-none hidden md:block">
          <ul className=" menu menu-horizontal px-1">
            <li>
              <a className="text-xl">Launching soon ✨</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
