import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-products-test-course.herokuapp.com",
});
