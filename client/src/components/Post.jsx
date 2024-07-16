import ReactionButton from './ReactionButton';

function Post({ profilePicture, displayName, userName, content, likes, reposts, replies, createdAt}) {
	return <div className='BorderedContainer PostContainer'>
		<div className='PostData d-flex flex-row align-items-center'>
			<img className='pfp' src={`../../src/assets/${profilePicture}`}/>

			{/* Display name */}
			<strong>{displayName ? displayName : 'Unknown User'}</strong>

			{/* User name / handle */}
			<span>@{userName ? userName : '?'} • {createdAt?createdAt:''}</span>
		</div>
		{/* Post content */}
		<p>{content ? content : ''}</p>

		{/* Self explanatory */}
		<ReactionButton icon='Heart'/><span>{ likes ? likes : '0' }</span>
		<span>{ reposts ? reposts : '0' }</span>
		<span>{ replies ? replies : '0' }</span>

	</div>;
}
export default Post