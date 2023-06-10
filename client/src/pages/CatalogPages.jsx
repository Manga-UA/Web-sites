import React, { useState } from 'react'
import CatalogList from '../components/CatalogList';
import { ReactComponent as ArrowUpDownIcon } from '../images/arrow-up-down-icon.svg';
import DropDown from '../components/DropDown';
import FilterCatalog from '../components/FilterCatalog';

const CatalogPages = () => {
	const [selectedSort, setSelectedSort] = useState(null);
	const sorts = ['за останнім оновлення', 'за лайками', 'за переглядами'];
	// першочерговий напис на випадаючому списку
	const placeholderSort = sorts[0];
	const handleSortSelect = (sort) => {
		setSelectedSort(sort);
		// додаткова логіка
	};

  return (
	<div className='flex gap-6'>
		<div className='flex flex-col gap-10 w-full max-w-[80%]'>
			<div className='flex items-center justify-between'>
				<h2 className='text-title-bg'>Каталог</h2>
				<div className='w-[170px] h-10 rounded'>
					<DropDown options={sorts} onSelect={handleSortSelect} placeholderText={placeholderSort} ImageIcon={<ArrowUpDownIcon/>} selectedOption={selectedSort}/>
				</div>
			</div>
			<div className='grid grid-cols-7 grid-row-4 gap-x-4 gap-y-4'>
				<CatalogList/>
			</div>
		</div>
		{/* Filter Block */}
		<div className='w-full max-w-[18.4%]'>
			<FilterCatalog/>
		</div>
	</div>
  )
}

export default CatalogPages;