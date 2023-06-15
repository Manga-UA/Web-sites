import React from 'react'

import { observer } from 'mobx-react-lite';
import UserBookmarkPages from './UserBookmarkPages';



const Profile = observer(() => {

	
	
	return (
		<div>
			<UserBookmarkPages></UserBookmarkPages>
		</div>
	)
})

export default Profile;