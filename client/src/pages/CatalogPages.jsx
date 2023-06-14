import React, { useContext, useState, useEffect} from 'react'
import CatalogList from '../components/CatalogList';
import { ReactComponent as ArrowUpDownIcon } from '../images/arrow-up-down-icon.svg';
import DropDown from '../components/DropDown';
import FilterCatalog from '../components/FilterCatalog';
import FilterIcon from '../images/filter-icon.png';
import { DARK_THEME } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import MobileFilterCatalog from '../components/MobileFilterCatalog';
import { fetchStatus } from '../http/titleApi';
const CatalogPages = observer(() => {
	const [selectedSort, setSelectedSort] = useState(null);
	const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
	const {theme,titles} = useContext(Context);
	const sorts = ['за останнім оновлення', 'за лайками', 'за переглядами'];
	// першочерговий напис на випадаючому списку
	const placeholderSort = sorts[0];
	const handleSortSelect = (sort) => {
		setSelectedSort(sort);
		// додаткова логіка
	};
	
	useEffect(()=>{
		fetchStatus().then(data => titles.setStatus(data))
	},[])

  return (
	<div className='flex gap-6 relative'>
		<div className='flex flex-col gap-14 w-full lg:max-w-[80%]'>
			<div className='flex items-end justify-between'>
				<h2 className='text-title-md lg:text-title-bg'>Каталог</h2>
				<div className='w-[170px] lg:h-10 text-text-bg rounded'>
					<DropDown options={sorts} onSelect={handleSortSelect} placeholderText={placeholderSort} ImageIcon={<ArrowUpDownIcon/>} selectedOption={selectedSort}/>
				</div>
			</div>
			<div className='grid justify-items-center grid-cols-2 grid-flow-row gap-2 sm:grid-cols-3 md:justify-items-stretch md:grid-cols-4 lg:grid-cols-7 lg:grid-row-4 lg:gap-x-4 lg:gap-y-4'>
				<CatalogList/>
			</div>
		</div>
		{/* Filter Block */}
		<div
			className={`absolute top-10 -left-[10px] sm:left-0 lg:hidden ${theme._theme === DARK_THEME ? 'bg-dark-theme-btn' : 'bg-xl-elipse-light'} z-[15] h-10 w-10 rounded-e-lg p-2`}
			onClick={()=> setIsMobileFilterOpen(!isMobileFilterOpen)}
		>
			<img className="lg:hidden" src={FilterIcon} alt="FilterIcon" />
		</div>
		
		<MobileFilterCatalog isOpen={isMobileFilterOpen} setIsOpen={setIsMobileFilterOpen} />
		
		<div className='w-full hidden lg:block max-w-[18.4%]'>
			<FilterCatalog/>
		</div>

	</div>
  )
})

export default CatalogPages;