
//export class plant {  
  const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }

  const stateControl = storeState();

  const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value 
      })
    }
  }

  const changeNameState = (nameProp) => {
    return (value) => {
      return (state) => ({
        ...state,
        [nameProp] : value
      })
    }
  }
  
  const canEat = (eatProp) => {
    // const obj = {
    //   eat: function(food) {
    //     return `The ${plant.name} eats the ${food}.` // Small update
    //   }
    // }
    // return obj;
    // return (value) => {
    // return (state) => ({
    //   ...state,
    //   [eatProp] : true
    // }) 
    return (value) => {
      return (state) => ({
        ...state,
        [eatProp] : value
      })
    }   
  }

  // We create four functions using our function factory. We could easily create many more.
  const changeName = changeNameState("name");
  const feed = changeState("soil")(1);
  const blueFood = changeState("soil")(5);
  const redFood = changeState("soil")(6);
  const greenFood = changeState("soil")(3)

  const hydrate = changeState("water")(1);
  const overHydrate = changeState("water")(-2);
  const superWater = changeState("water")(5);

  const illuminate = changeState("light")(1);
  const scorch = changeState("light")(-2);
  const highheat = changeState("light")(3);

  const soil = changeState("soil")(0);
  const water = changeState("water")(0);
  const light = changeState("light")(0);

  const eating = changeState("eat")("insects");

  const newPlant = (name) => {
    let plant = {
      name
    }
    //let plant = storeState();
    return {...plant, ...soil(plant), ...water(plant), ...light(plant)};
  };

  const plantTest = newPlant("flower");
  console.log(plantTest);

  export {feed, hydrate, illuminate, overHydrate, superWater, scorch, highheat, changeName, newPlant, stateControl, blueFood, redFood, greenFood, eating }

  // $(document).ready(function() {

  // // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  //   //Food(soil) button functions
  //   $('#feed').click(function() {
  //     const newState = stateControl(feed);
  //     $('#soil-value').text(`Soil: ${newState.soil}`);
  //   });

  //   $('#redFoods').click(function() {
  //     const newState = stateControl(redFood);
  //     $('#soil-value').text('Soil: ${newState.soil}');
  //   });

  //   $('#blueFoods').click(function() {
  //     const newState = stateControl(blueFood);
  //     $('#soil-value').text('Soil: ${newState.soil}');
  //   });

  //   $('#greenFoods').click(function() {
  //     const newState = stateControl(greenFood);
  //     $('#soil-value').text('Soil: ${newState.soil}');
  //   });

  //   //Light functions

  //   $('#illuminates').click(function() {
  //     const newState = stateControl(illuminate);
  //     $('#light-value').text('Light: ${newState.light}');
  //   });

  //   $('#scorcheds').click(function() {
  //     const newState = stateControl(scorch);
  //     $('#light-value').text('Light: ${newState.light}');
  //   });

  //   $('#highHeats').click(function() {
  //     const newState = stateControl(highheat);
  //     $('#light-value').text('Light: ${newState.light}');
  //   });

  //   //Water functions
  //   $('#superWaters').click(function() {
  //     const newState = stateControl(superWater);
  //     $('#water-value').text('Water: ${newState.water}');
  //   });

  //   $('#hydrates').click(function() {
  //     const newState = stateControl(hydrate);
  //     $('#water-value').text('Water: ${newState.water}');
  //   });

  //   $('#overHydrates').click(function() {
  //     const newState = stateControl(overHydrate);
  //     $('#water-value').text('Water: ${newState.water}');
  //   });

  // // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  //   $('#show-state').click(function() {
  //     // We just need to call stateControl() without arguments to see our current state.
  //     const currentState = stateControl();
  //     $('#soil-value').text(`Soil: ${currentState.soil}`);
  //   });
  // });
