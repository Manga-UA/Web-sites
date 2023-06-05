import React from 'react'

const wrapper = ({children}) => {
  return (
	<div className='container mx-auto py-1 px-2 md:py-[15px]  md:px-10 min-h-screen flex flex-col gap-10'>
		{ children }
	</div>
  )
}

export default wrapper