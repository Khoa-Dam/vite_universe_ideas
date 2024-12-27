import {Link} from "react-router-dom";
// import { MobileMenu } from "./mobile-menu";
import { Button } from "./ui/button";

import { ConnectButton } from '@rainbow-me/rainbowkit';



const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex font-Ezcar text-xl justify-between items-center">
        <Link to="/" className={`text-2xl font-bold font`}>
          Universe Ideas
        </Link>
        <nav className="space-x-4 flex ">
          <Link to="/explore" className="text-sm font-medium hover:underline outline-2">
            <Button className="bg-indigo-900">Explore</Button>
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline">
            <Button className="bg-indigo-900">About</Button>
          </Link>
          <ConnectButton label="Connect Wallet" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
