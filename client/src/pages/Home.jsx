// import Post from "../components/Post";
// import Subtitle from "../components/Subtitle";
// import SidebarButton from "../components/SidebarButton";
import { Post, SendButton, SidebarButton, Subtitle } from '../components';
import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles/Home.css";


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

	return <>


		<div className='d-flex flex-row p-3'>
			
			{/* ---------------- Sidebar 1 ---------------- */}
			<aside className="d-flex flex-column col-12 col-md-3 sidebar BorderedContainer">
				<h2>Home</h2>
				<SidebarButton icon="Heart_Empty.svg" text="Home" path="/Home"/>
				<SidebarButton icon="SendIcon.svg" text="Test Page" path="/TestPage"/>
				<SidebarButton icon="Heart_Empty.svg" text="Landing Page" path="/"/>
			</aside>

			{/* ---------------- Main content ---------------- */}
			<main className='d-flex flex-column align-items-center col-12 col-md-6 px-4'>
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
						<Subtitle text="No posts found :(" />
					)
				}
			</main>

			{/* ---------------- Sidebar 2 ---------------- */}
			<aside className="d-flex flex-column sidebar col-12 col-md-3 BorderedContainer">
				<h2>See what's going on</h2>
				<button>Trending</button>
				<button>Trending</button>
				<button>Trending</button>
				<button>Trending</button>
			</aside>
		</div>
	</>
}
export default Home;