import React from 'react';
import { shallow } from 'enzyme';
import { ImageCard } from "../../components/ImageCard";


describe('should show one picture', () => {

    const title = 'Some Title';
    const urlPresentation   = 'https://localhost/something.jpg';
    const url   = {type: "card-img", link: "https://localhost/something.jpg"};
    const boolGif = false;
    const likes = 10;
    const dislikes = 4;
    const description = "some description";
    const wrapper = shallow( <ImageCard title={ title } urlPresentation={ urlPresentation }  url={ url } boolGif = { boolGif } likes = { likes } dislikes = { dislikes } description = { description }/> );

    test('debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })
    
})
