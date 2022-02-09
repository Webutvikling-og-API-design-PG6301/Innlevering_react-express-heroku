import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/pages/Home';

describe('Quiz application', () => {
	it('should show home component', () => {
		const element = document.createElement('div');
		ReactDOM.render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>,
			element
		);
		expect(element.innerHTML).toMatchSnapshot();
	});
});
