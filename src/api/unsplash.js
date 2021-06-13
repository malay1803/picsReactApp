import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID cJb-IxBEJa7NGIqfNwvIWEtcY-ZdJ6BBZ7nMsV3wotg",
      },
})