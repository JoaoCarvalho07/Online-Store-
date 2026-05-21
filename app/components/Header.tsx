import { Link } from "react-router";
import { Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Home, ShoppingBag, Info, Phone, BookOpen } from "lucide-react";

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/shop", label: "Shop", icon: ShoppingBag },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Phone },
  { to: "/blog", label: "Blog", icon: BookOpen },
];

  return (
    <header className="relative flex items-center justify-between px-8 py-4 border-b-2 border-gray-500">
    <span className="font-bold text-lg tracking-wide w-1/3">THE ONLINE STORE</span>
        <nav className="hidden md:flex gap-6 text-sm text-gray-800 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:underline decoration-2 underline-offset-4">{link.label}</Link>
            ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
        </button>

        <div className="hidden md:flex gap-4">
            <button className="hover:text-gray-400 transition-colors duration-200 cursor-pointer">
                <Search size={20} />
            </button>
            <Link to="/profile" className="hover:text-gray-400 transition-colors duration-200">
                <User size={20} />
            </Link>
            <Link to="/cart" className="hover:text-gray-400 transition-colors duration-200">
                <ShoppingCart size={20} />
            </Link>
        </div>

    {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+2px)] w-full left-0 bg-white border-b-8 border-gray-500 z-50 flex flex-col p-4 gap-2">           
            <div className="flex gap-6 justify-center border-gray-500 border-b-8 pb-2 -mx-4 px-4">                   
                <button className="flex items-center gap-2">
                    <Search size={20} />
                    <label>Search</label>
                </button>

                <Link to="/profile" className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200 cursor-pointer">                    
                    <User size={20} />
                    <label className="pointer-events-none">Profile</label>
                </Link>

                <Link to="/cart" className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200 cursor-pointer">                    
                    <ShoppingCart size={20} />
                    <label className="pointer-events-none">Cart</label>
                </Link>
            </div>

            {navLinks.map((link) => (
                <Link 
                    key={link.to} 
                    to={link.to}
                    className="flex items-center gap-2 bg-gray-100 border-t border-b border-gray-200 -mx-4 px-8 py-4 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                >
                    <link.icon size={18} />
                    {link.label}
                </Link>
            ))}
            
        </div>
    )}
    </header>
  );
}