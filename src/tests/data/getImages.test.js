import { getImages } from "../../data/getImages"

describe('getImages Fecth', () => {
    
    test('Hot section NO viral should have more than 0 images', async() => {  
        const intialState = { radioSection: 'hot', showViral: 'false'}
        const images = await getImages(intialState);
        expect( images.length > 0).toBe( true );
    })

    test('Top section NO viral should have more than 0 images', async() => { 
        const intialState = { radioSection: 'hot', showViral: 'false'}      
        const images = await getImages(intialState);
        expect( images.length > 0).toBe( true );
    })

    test('User section NO viral should have more than 0 images', async() => {      
        const intialState = { radioSection: 'hot', showViral: 'false'}  
        const images = await getImages(intialState);
        expect( images.length > 0).toBe( true );
    })


    test('Hot section viral should have more than 0 images', async() => {  
        const intialState = { radioSection: 'hot', showViral: 'false'}
        const images = await getImages(intialState);
        expect( images.length > 0).toBe( true );
    })

    test('Top section viral should have more than 0 images', async() => { 
        const intialState = { radioSection: 'hot', showViral: 'false'}      
        const images = await getImages(intialState);
        expect( images.length > 0).toBe( true );
    })

    test('User section viral should have more than 0 images', async() => {      
        const intialState = { radioSection: 'hot', showViral: 'false'}  
        const images = await getImages(intialState);
        expect( images.length > 0).toBe( true );
    })

})
