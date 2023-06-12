import React, { useEffect, useRef, useState } from 'react'

const DropDown = ({ options, onSelect, placeholderText, ImageIcon, selectedOption}) => {
	// state with open
	const [isOpen, setIsOpen] = useState(false);
	//link for parent div in dropdown
	const dropdownRef = useRef(null);
	// toggle is open drop down
	const handleToggle = () => {
		setIsOpen(!isOpen);
	}

	// option select in drop down
	const handleOptionSelect = (option) => {
		setIsOpen(false);
		onSelect(option);
	}

	// use effect on click with anyway only not dropdown
	useEffect(()=> {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
	  
		document.addEventListener('click',handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		} 	
	},[])

	return (
		<div className='relative' ref={dropdownRef}>
			<button
				type='button'
				className='inline-flex items-center justify-between w-full px-1 py-1 lg:px-4 lg:py-2 text-text-sm lg:text-text-md border border-[0.8px] border-stroke-dark rounded-md'
				onClick={handleToggle}
				
			>
				{selectedOption ? selectedOption : placeholderText}
				<span className={`transition delay-200 duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>{ImageIcon}</span>
				
			</button>
			
			{isOpen && (
					 <div className={`absolute w-full left-0 backdrop-filter backdrop-blur-[5px] z-10 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0'}`}>
					 
					 {options.map((option) => (
					   <button
						 key={option}
						 type='button'
						 className='block text-left w-full px-4 py-2 text-text-md hover:bg-slate-400 focus:bg-slate-400 rounded-sm'
						 onClick={() => handleOptionSelect(option)}
					   >
						 {option}
					   </button>
					 ))
					}
				   </div>
				)
			}
		</div>
	)
}

export default DropDown