import { Link } from "react-router";
import { useState } from "react";
import { Search, User, ShoppingCart, Home, ShoppingBag, Info, Phone, BookOpen } from "lucide-react";
import { navLinks } from "~/constants/navLinks";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);



  return (
    <header className="relative flex items-center justify-between px-8 py-4 border-b-2 border-gray-500">
        <Link to="/" className="font-bold text-xl tracking-wide w-1/3 text-gray-900">
            THE ONLINE STORE
        </Link>
        
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

        <NavigationMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
            
    </header>
  );
}