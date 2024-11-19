import ReactionButton from './ReactionButton';

// Declaring default values
function Post({ profilePicture = 'ChimelineUser.png',
	displayName = 'Unknown User',
	userName = 'Unknown',
	content = '',
	likes = 0,
	reposts = 0,
	replies = 0,
	createdAt
}) {

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

	return <div className='BorderedContainer PostContainer'>
		<div className='PostData d-flex flex-row align-items-center'>
			<img className='pfp' src={`../../src/assets/${profilePicture}`} />
			<div className='d-flex flex-wrap'>
				{/* Display name */}
				<strong>{displayName}</strong>

				{/* User name / handle */}
				<span className='subtle'>@{userName} • {parsedDate ? parsedDate : ''}</span>
			</div>
		</div>
		{/* Post content */}
		<p>{content}</p>

		<div className='interaction-footer'>
			{/* Self explanatory */}
			<div>
				<ReactionButton icon='favorite' btnclass='like' /><span>{likes}</span>
			</div>
			<div>
				<ReactionButton icon='repeat' btnclass='repost' /><span>{reposts}</span>
			</div>
			<div>
				<ReactionButton icon='tooltip' /><span>{replies}</span>
			</div>
		</div>
	</div>
};
export default Post