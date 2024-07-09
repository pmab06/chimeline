import Post from "../components/Post"; 

function Home(){
	return <>
	<h1>Home</h1>
	<a href="/">Click me to return to landing page</a>
	<Post profilePicture="defaulter.png" displayName="CoolUser123" userName="MrCoolGuy" content={"Hi guys!!!!! This is a very cool website 🤫🧏"} likes={50} replies={20} reposts={2} createdAt={"5h ago"}/>
	<Post profilePicture="defaulter.png" displayName="Not very cool" userName="MrAngryGuy" content={"This is a very bad post! Lots of hate!"} likes={2} replies={540} reposts={476} createdAt={"just now"}/>
	</>
}
export default Home;