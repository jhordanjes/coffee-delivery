import { createContext, ReactNode, useReducer } from "react";
import { ICoffeeResponse } from "../interfaces/ICoffee.response";
import { cartReducer } from "../reducer/cart/reducer";
import { addNewItemAction, clearAllAction, decrementItemAction, incrementItemAction, removeItemAction } from "../reducer/cart/actions";

interface CartContextType {
    cart: ICoffeeResponse[]; 
    addNewItem: (item: ICoffeeResponse) => void;
    incrementItem: (item: ICoffeeResponse) => void;
    decrementItem: (item: ICoffeeResponse) => void;
    getItemQuantity: (id: number) => number;
    removeItem: (id: number) => void;
    clearAll: () => void;
};

interface Props {
    children: ReactNode;
};

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: Props) {
    const [cartState, dispatch] = useReducer(cartReducer, [], (initialState) => {
        const storageStateJSON = localStorage.getItem('@ignite-coffe-delivery:cart-state');

        if (storageStateJSON) {
            return JSON.parse(storageStateJSON);
        }

        return initialState
    });

    function addNewItem(item: ICoffeeResponse) {
        dispatch(addNewItemAction(item));
    }

    function removeItem(itemId: number) {
        dispatch(removeItemAction(itemId));
    }

    function incrementItem(item: ICoffeeResponse) {
        dispatch(incrementItemAction(item));
    }

    function decrementItem(item: ICoffeeResponse) {
        dispatch(decrementItemAction(item));
    }

    function getItemQuantity(itemId: number): number {
        return cartState.find(item => item.id === itemId)?.quantity || 0
    }

    function clearAll() {
        dispatch(clearAllAction());
    }


    return (
        <CartContext.Provider value={{ 
            cart: cartState, 
            addNewItem,
            incrementItem,
            decrementItem,
            getItemQuantity,
            removeItem,
            clearAll
        }}>
            {children}
        </CartContext.Provider>
    )
}