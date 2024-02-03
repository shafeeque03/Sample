import axios from "axios";
const baseURL = "http://localhost:4000/";
const messageInstance  = axios.create({baseURL:baseURL})

export const getMessages = (id) => messageInstance.get(`/message/${id}`)
export const addMessage = (data) => messageInstance.post('/',data)

addMessage(2500)