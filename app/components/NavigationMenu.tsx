import { Link } from "react-router";
import { Search, User, ShoppingCart} from "lucide-react";
import { navLinks } from "~/constants/navLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden absolute top-[calc(100%)] w-full left-0 bg-white border-b-8 border-gray-500 z-50 flex flex-col p-4 gap-2">           
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
                    className="flex items-center gap-2 bg-gray-100 border-t border-b border-gray-200 -mx-4 px-8 py-4 text-gray-800 hover:bg-gray-200 transition-colors duration-200">
                    <link.icon size={18} />
                    {link.label}
                </Link>
            ))}
            
        </div>
    )}


