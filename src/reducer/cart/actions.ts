import { ICoffeeResponse } from "../../interfaces/ICoffee.response";

export enum ActionType {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    INCREMENT_ITEM = 'INCREMENT_ITEM',
    DECREMENT_ITEM = 'DECREMENT_ITEM',
    GET_ITEM_QUANTITY = 'GET_ITEM_QUANTITY',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CLEAR_ALL = 'CLEAR_ALL',
}

export function addNewItemAction(newItem: ICoffeeResponse) {
    return {
        type: ActionType.ADD_NEW_ITEM,
        payload: {
            newItem,
        }
    }
}

export function incrementItemAction(item: ICoffeeResponse) {
    return {
        type: ActionType.INCREMENT_ITEM,
        payload: {
            item,
        }
    }
}

export function decrementItemAction(item: ICoffeeResponse) {
    return {
        type: ActionType.DECREMENT_ITEM,
        payload: {
            item,
        }
    }
}

export function getItemQuantityAction(itemId: number) {
    return {
        type: ActionType.GET_ITEM_QUANTITY,
        payload: {
            itemId,
        }
    }
}

export function removeItemAction(itemId: number) {
    return {
        type: ActionType.REMOVE_ITEM,
        payload: {
            itemId,
        }
    }
}

export function clearAllAction() {
    return {
        type: ActionType.CLEAR_ALL,
    }
}