import { Post, Sidebar, WritePost, Subtitle, BottomNavbar } from '../components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';


function Home() {
	const [tbdata, setTbData] = useState([]);

	useEffect(() => {
		axios.get('/api/posts')
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
		<div className='page-container'>
			<div className="main-container">
				{/* ---------------- Sidebar 1 ---------------- */}
				<Sidebar type='left' />

				{/* ---------------- Main content ---------------- */}
				<main className='center-content'>
					<WritePost />
					<div id='posts' className='d-flex flex-column-reverse align-items-center w-100'>
						{
							tbdata.length > 0 ? (
								tbdata.map(item => (
									<Post
										key={item.id}
										profilePicture='defaulter.png'
										displayName={item.author_id === -1 ? 'Not Implemented' : item.displayName}
										userName={item.author_id === -1 ? 'NotImplemented' : item.userName}
										content={item.content}
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
					</div>
				</main>

				{/* ---------------- Sidebar 2 ---------------- */}
				<Sidebar type='right' />
			</div>
			<BottomNavbar isVisible={true} />
		</div>
	</>
}
export default Home;