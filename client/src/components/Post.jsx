function Post({ profilePicture, displayName, userName, content, likes, reposts, replies, createdAt}) {
	return <div className="PostContainer">
		<div className="PostData d-flex flex-row align-items-center">
			<img className="pfp" src={`../../src/assets/${profilePicture}`} alt="Profile"/>

			{/* Display name */}
			<strong>{displayName ? displayName : "Unknown User"}</strong>

			{/* User name / handle */}
			<span>@{userName ? userName : "?"} • {createdAt?createdAt:""}</span>
		</div>
		{/* Post content */}
		<p>{content ? content : ""}</p>

		{/* Self explanatory */}
		<i>Likes: {likes ? likes : 0}</i>
		<i>Replies: {replies ? replies : 0}</i>
		<i>Reposts: {reposts ? reposts : 0}</i>
	</div>;
}
export default Post