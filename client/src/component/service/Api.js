import axios from "axios";

const URL = "http://localhost:8080";
export const adduser = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while adding use api", error.message);
  }
};
export const setconversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("Error while setconverstaion use api", error.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while getconverstaion use api", error.message);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error while calling api", error.message);
  }
};

export const newMessage= async (data)=>{
  try {
    await axios.post(`${URL}/message/add`,data)
  } catch (error) {
    console.log(error.message)
  }
}
export const getMessage=async({id})=>{
try {
  let response = await axios.get(`${URL}/message/get/${id}`);
  return response.data;
} catch (error) {
  console.log(error.message)
}
}