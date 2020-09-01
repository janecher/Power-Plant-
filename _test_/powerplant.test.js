import { plant } from '../src/plant.js';

describe ('plant', () => {

  beforeEach(function(){
    let plant = { soil: 0, light: 0, water: 0 } 
  });

  test ('increment "soil" property by 1', () => {
    expect(feed(plant)).toMatchObject({});
  });

  //soil test

  //water test

  //light test

});