import Post from "../components/Post";
import Subtitle from "../components/Subtitle";
import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
	const [tbdata, setTbData] = useState([]);

	useEffect(() => {
		axios.get('/api/tbdata')
			.then(response => {
				if (Array.isArray(response.data)) {
					setTbData(response.data)
				} else {
					setTbData([])
					console.error('/!\\ API Response is not an array: ', response.data)
				}
			})
			.catch(error => {
				setTbData([]); 
				console.error('/!\\ Error while fetching data: ', error) })
	}, []);


	console.log(tbdata.length)




	return <>

		<h1>Home</h1>
		<a href="/">Click me to return to landing page</a>
		{
			tbdata.length > 0 ? (
				tbdata.map(item => (
					<Post
						profilePicture="defaulter.png"
						displayName="Not from DB"
						userName="NotPullingFromDatabase"
						content={item.post_content}
						likes={item.likes}
						replies={item.replies}
						reposts={item.reposts}
						createdAt={item.created_at}
					/>
				))
			) : (
				<Subtitle text="No posts found"/>
			)
		}

	</>
}
export default Home;