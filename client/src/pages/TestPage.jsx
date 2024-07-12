import { useEffect, useState } from "react";
import axios from 'axios';

function TestPage() {

	const [tbdata, setTbData] = useState([]);

	useEffect(() => {
		axios.get('/api/tbdata')
			.then(response => {
				if (Array.isArray(response.data)) { 
					setTbData(response.data) 
				} else {
					console.error('/!\ API Response is not an array: ', response.data)
				}
			})
			.catch(error => { console.error('/!\ Error while fetching data: ', error) })
	}, []);

	// HTML -----------------------------
	return <>
		<h1>Test Page</h1>
		<h2>Importing some data</h2>
		<ul>
			{tbdata.map(item => (
				<li key={item.id}>{item.post_content}</li>
			))}
		</ul>
		<a href="/">Click me to return to landing page</a>
	</>;
}
export default TestPage