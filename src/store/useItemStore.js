import { create } from "zustand";
import { api } from "../api/api";

export const useItemStore = create((set) => ({
    items: [],
    getItems: async (own = false) => {
        try {
            const res = own 
            ?  await api.getItemBids() 
            :  await api.geItems()
            set( {items: res.data })
        } catch (error) {
            console.error(error)
        }
    }
}))