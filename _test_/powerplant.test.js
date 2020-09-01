import { feed, hydrate, illuminate, overHydrate, superWater, scorch, highheat, newPlant, changeName } from '../src/plant.js';

describe ('plant', () => {

  // beforeEach(funnction(){
  //   let plant = { soil: 0, light: 0, water: 0 } 
  // });

  //soil test
  test ('increment "soil" property by 1', () => {
    let plant = { soil: 0, light: 0, water: 0, name: ""} 
    //const feed = changeState("soil")(1);
    expect(feed(plant)).toMatchObject({soil: 1, light: 0, water: 0, name: ""});
  });

  //water test
  test ('increment "water" property by 1', () => {
    let plant = {soil: 0, light: 0, water: 0, name: ""}
    //const hydrate = changeState("water")(1);
    expect(hydrate(plant)).toMatchObject({soil: 0, light: 0, water: 1, name: ""});
  });

  //light test
  test ('increment "light" property by 1', () => {
    let plant = {soil: 0, light: 0, water: 0, name: ""}
    //const hydrate = changeState("water")(1);
    expect(illuminate(plant)).toMatchObject({soil: 0, light: 1, water: 0, name: ""});
  });

  test ('increment "light" property by -2', () => {
    let plant = {soil: 0, light: 0, water: 0, name: ""}
    //const hydrate = changeState("water")(1);
    expect(scorch(plant)).toMatchObject({soil: 0, light: -2, water: 0, name: ""});
  });

  test ('increment "light" property by 3', () => {
    let plant = {soil: 0, light: 0, water: 0, name: ""}
    //const hydrate = changeState("water")(1);
    expect(highheat(plant)).toMatchObject({soil: 0, light: 3, water: 0, name: ""});
  });

  test ('increment "light" property by 3', () => {
    let plant = {soil: 0, light: 0, water: 0, name: ""}
    //const hydrate = changeState("water")(1);
    expect(highheat(plant)).toMatchObject({soil: 0, light: 3, water: 0, name: ""});
  });

  test ('increment "water" property by -2', () => {
    let plant = {soil: 0, light: 0, water: 0, name: ""}
    //const hydrate = changeState("water")(1);
    expect(overHydrate(plant)).toMatchObject({soil: 0, light: 0, water: -2, name: ""});
  });

  test ('increment "water" property by 5', () => {
    let plant = {soil: 0, light: 0, water: 0, name: "" }
    //const hydrate = changeState("water")(1);
    expect(superWater(plant)).toMatchObject({soil: 0, light: 0, water: 5, name: ""});
  });

  test ('increment "name" be Bob', () => {
    let plant = {soil: 0, light: 0, water: 0, name: ""}
    let nameToChange = "Bob";
    expect(changeName(nameToChange)(plant)).toMatchObject({soil: 0, light: 0, water: 0, name: "Bob"});
  });

  test ('newplant has been created', () => {
    expect(newPlant("flower")).toMatchObject({soil: 0, light: 0, water: 0, name: "flower"});
  });
});