// import Post from '../components/Post';
// import Subtitle from '../components/Subtitle';
// import SidebarButton from '../components/SidebarButton';
import { Post, Sidebar, WritePost, Subtitle } from '../components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';


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
				console.error('/!\\ Error while fetching data: ', error)
			})
	}, []);

	
// ==============================      HTML       ============================== // 
	return <>
		<div className='d-flex flex-row p-3 container'>

			{/* ---------------- Sidebar 1 ---------------- */}
			<Sidebar type='left' />

			{/* ---------------- Main content ---------------- */}
			<main className='d-flex flex-column align-items-center col-12 col-md-6 px-4'>
				<WritePost/>
				{
					tbdata.length > 0 ? (
						tbdata.map(item => (
							<Post
								profilePicture='defaulter.png'
								displayName={item.displayName}
								userName={item.userName}
								content={item.post_content}
								likes={item.likes}
								replies={item.replies}
								reposts={item.reposts}
								createdAt={item.created_at}
							/>
						))
					) : (
						<Subtitle text='No posts found :(' />
					)
				}
			</main>

			{/* ---------------- Sidebar 2 ---------------- */}
			<Sidebar type='right'/>
		</div>
	</>
}
export default Home;