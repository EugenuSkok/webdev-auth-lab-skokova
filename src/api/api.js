import axios from "axios";
import { useItemsStore } from "../store/useItemsStore";

const apiInstance = axios.create({
    baseURL: "hhttps://api.kitek-pg.ru/api/marketplace/",
    headers: {
        "Content-Type": "application/json",
        Aceept: "application/json",
    },
})

apiInstance.interceptors.request.use(config => {
    const {user} = useUserStore.getState()

    if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`
    }

    return config
})

const registerUser = async (user) => {
    const res = apiInstance.post("/register", user)
    return res
}

const loginUser = async (user) => {
    const res = apiInstance.post("/auth/login", user)
    return res
}

const getItems = async () => {
    const res = apiInstance.get("/items")
    return res
}

const getStats = async () => {
    const res = apiInstance.get("/stats")
    return res
}

const getItemBids = async () => {
    const res = apiInstance.get(`/items/${id}/bids`)
    return res.data
}

const getMyBids = async () => {
    const res = apiInstance.get(`/bids/my`)
    return res.data
}

const sendItems = async (item) => {
    const res = apiInstance.post("/items", item)
    return res.data
}

const deleteItems = async (id) => {
    const res = await apiInstance.delete(`/items/${id}`)
    return res
}

const createBid = async (id, amount) => {
    const res = apiInstance.post(`/items/${id}`, {amount})
    return res.data
}

export const api = {
    registerUser,
    loginUser,
    getItems,
    getStats,
    getItemBids,
    getMyBids,
    sendItems,
    deleteItems,
    createBid,

}