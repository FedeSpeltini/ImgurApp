import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { ImageList } from "../../components/ImageList";
import { useFecthImages } from "../../hooks/useFecthImages";
jest.mock('../../hooks/useFecthImages');


describe('Test in <ImageList />', () => { 

  
    test('should render', () => {

        useFecthImages.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <ImageList/> );
        expect( wrapper ).toMatchSnapshot();
        
    });




})