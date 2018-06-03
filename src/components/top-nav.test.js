import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', () => {
	it('Renders TopNav without crashing', () => {
		shallow(<TopNav/>)		
	});
});