import { createContext, useContext, useState } from "react";
import type { Product } from "~/types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity : (productId:number, quantity:number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(product: Product) {
    const existing = cartItems.find((item) => item.product.id === product.id);

    if (existing) {
        existing.quantity += 1;
        setCartItems([...cartItems]);
    } else {
        setCartItems([...cartItems, { product, quantity: 1 }]);
    }
    }

    function removeFromCart(productId: number) {
        setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    }
    function updateQuantity(productId: number, quantity: number) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(cartItems.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
            ));
        }
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
        {children}
        </CartContext.Provider>
    );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
