import React from 'react'

const wrapper = ({children}) => {
  return (
	<div className='container mx-auto py-[15px] px-10 min-h-screen '>
		{ children }
	</div>
  )
}

export default wrapper