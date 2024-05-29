import icon from "../assets/branding/ICON 1.png";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div>
      <footer className="footer items-center justify-center p-4 text-neutral-conten bg-black text-white">
        <aside className="items-center grid-flow-col">
          <img src={icon} alt="icon" className="w-8 h-8" />
          {/* <p>KickOffConnections</p> */}
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <a
            className="p-4"
            href="https://x.com/kickoffconnects"
            target="_blank"
          >
            <FaXTwitter size={27} />
          </a>
        </aside>
      </footer>
    </div>
  );
}
