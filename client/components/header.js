import React from 'react';

import SearchBar from './search_bar';

const Header = ({onSearchTermChange}) => {
	return (
		<header>
		  <ul>
		    <li className='left'>
		      <a href="#">
		        You<span className='bg-red'>Tube</span> <span className='small-font'>API</span>
		      </a>
		    </li>
		    <li className="center">
		    	<SearchBar onSearchTermChange={(term) => onSearchTermChange(term)}/>
		    	 <i className='fa fa-search'></i>
		    </li>
		    <li className="right">
		      <a href="#">Find Me On Github</a>
		    </li>
		  </ul>
		</header>
		);
};

export default Header;