import { produce } from "immer";
import { ICoffeeResponse } from "../../interfaces/ICoffee.response";
import { ActionType } from "./actions";

export function cartReducer(state: ICoffeeResponse[], action: any) {
    switch (action.type) {
        case ActionType.ADD_NEW_ITEM:
            return produce(state, draft => {
                const itemExists =  draft.findIndex(item => item.id === action.payload.newItem.id);
                if (itemExists >= 0) {
                    draft[itemExists].quantity += 1;
                } else {
                    draft.push({ ...action.payload.newItem, quantity: 1 });

                }
            })
        case ActionType.INCREMENT_ITEM:
            return produce(state, draft => {
                const itemIndex = draft.findIndex(item => item.id === action.payload.item.id);

                if (itemIndex < 0) {
                    draft.push({ ...action.payload.item, quantity: 1 });
                } else {
                    draft[itemIndex].quantity += 1;
                }
            });
        case ActionType.DECREMENT_ITEM:
                return produce(state, draft => {
                    const itemIndex = draft.findIndex(item => item.id === action.payload.item.id);

                    if (itemIndex >= 0) {
                        if (draft[itemIndex].quantity > 1) {
                            draft[itemIndex].quantity -= 1;
                        } else {
                            draft.splice(itemIndex, 1);
                        }
                    }
                });
        case ActionType.REMOVE_ITEM:
            return produce(state, draft => {
                const itemIndex = draft.findIndex(item => item.id === action.payload.itemId);

                if (itemIndex >= 0) {
                    draft.splice(itemIndex, 1);
                }
        });
        case ActionType.CLEAR_ALL:
            return produce(state, draft => {
                draft.length = 0;
        });
        default:
            return state
    }
}