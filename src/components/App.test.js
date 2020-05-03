import React from 'react';

import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {

    expect(app).toMatchSnapshot();

});

it('initialize the state with empty list of todos', () => {
    expect(app.state().todos).toEqual([]);
})


it('add new todo id button is clicked', () => {
    app.find('.btn-add').simulate('click');

    expect(app.state().todos).toEqual([{ id: 1 }])
})