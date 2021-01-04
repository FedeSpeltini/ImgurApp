import React from 'react';
import { shallow } from 'enzyme';

import { MultimediaList } from '../../components/MultimediaList';



describe('MultimediaList test', () => {


    test('should show a image in multimedia', () => {
        const type = 'image/jpeg';
        const link   = 'https://localhost/something.jpg';
        const description = "some description";
        const wrapper = shallow( <MultimediaList type={ type } link={ link } description = { description }/> );
        expect( wrapper ).toMatchSnapshot();

    })
})
