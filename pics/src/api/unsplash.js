import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID XkECDlD9r5XsTIGXfEFDbrg0xEWq1cuVis1B86-AAYU",
	},
});
