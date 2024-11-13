import ReactionButton from './ReactionButton';

function Post({ profilePicture, displayName, userName, content, likes, reposts, replies, createdAt }) {

	const convertedISODate = new Date(createdAt)
	const dateNow = new Date()

	// diff = dateNow - convertedISODate
	// let ms = diff % 1000
	// let ss = Math.floor(diff / 1000) % 60
	// let mm = Math.floor(diff / 1000 / 60) % 60
	// let hh = Math.floor(diff / 1000 / 60 / 60)

	
	// console.log(`${hh}hr, ${mm}min, ${ss}sec, ${ms}ms`)

	// whoever made these functions for the Date object needs some serious help
	const parsedDate = convertedISODate.getDate() + "/" + (convertedISODate.getMonth() + 1) + "/" + convertedISODate.getFullYear()

	console.log(parsedDate)
	return <div className='BorderedContainer PostContainer'>
		<div className='PostData d-flex flex-row align-items-center'>
			<img className='pfp' src={`../../src/assets/${profilePicture}`} />
			<div className='d-flex flex-wrap'>
				{/* Display name */}
				<strong>{displayName ? displayName : 'Unknown User'}</strong>

				{/* User name / handle */}
				<span>@{userName ? userName : '?'} • {parsedDate ? parsedDate : ''}</span>
			</div>
		</div>
		{/* Post content */}
		<p>{content ? content : ''}</p>

		<div className='interaction-footer'>
			{/* Self explanatory */}
			<div>
				<ReactionButton icon='favorite' /><span>{likes ? likes : '0'}</span>
			</div>
			<div>
				<ReactionButton icon='repeat' /><span>{reposts ? reposts : '0'}</span>
			</div>
			<div>
				<ReactionButton icon='tooltip' /><span>{replies ? replies : '0'}</span>
			</div>
		</div>
	</div>
};
export default Post