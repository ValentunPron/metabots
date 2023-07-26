import axios from "axios";
//process.env.REACT_APP_API_URL,
//https://medabots-server.onrender.com'

const base = 'http://localhost:4444'

const instance = axios.create({
	baseURL: base
});

instance.interceptors.request.use(
	(config) => {
	  const token = localStorage.getItem("token");
	  if (token) {
		config.headers.authorization = token;
	  }
	  return config;
	},
	(error) => Promise.reject(error)
);


export default instance;