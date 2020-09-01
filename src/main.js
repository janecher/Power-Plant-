import {feed, hydrate, illuminate, overHydrate, superWater, scorch, highheat, stateControl, blueFood, greenFood, redFood, changeName, newPlant, eating} from './plant.js';
import $ from 'jquery';

  $(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

    //Food(soil) button functions
    $('#feed').click(function() {
      const newState = stateControl(feed);
      console.log(newState.soil);
      $('#soil-value').text(`${newState.soil}`);
    });

    $('#redFoods').click(function() {
      const newState = stateControl(redFood);
      $('#soil-value').text(`${newState.soil}`);
    });

    $('#blueFoods').click(function() {
      const newState = stateControl(blueFood);
      $('#soil-value').text(`${newState.soil}`);
    });

    $('#greenFoods').click(function() {
      const newState = stateControl(greenFood);
      $('#soil-value').text(`${newState.soil}`);
    });

    //Light functions

    $('#illuminates').click(function() {
      const newState = stateControl(illuminate);
      $('#light-value').text(`${newState.light}`);
    });

    $('#scorcheds').click(function() {
      const newState = stateControl(scorch);
      $('#light-value').text(`${newState.light}`);
    });

    $('#highHeats').click(function() {
      const newState = stateControl(highheat);
      $('#light-value').text(`${newState.light}`);
    });

    //Water functions
    $('#superWaters').click(function() {
      const newState = stateControl(superWater);
      $('#water-value').text(`${newState.water}`);
    });

    $('#hydrates').click(function() {
      const newState = stateControl(hydrate);
      $('#water-value').text(`${newState.water}`);
    });

    $('#overHydrates').click(function() {
      const newState = stateControl(overHydrate);
      $('#water-value').text(`${newState.water}`);
    });

    $('#showName').click(function() {
      const currentState = stateControl();
      $('#name-value').text(`${currentState.name}`);
    });

    $('#canEat').click(function() {
      const newState = stateControl(eating);
      $('.plant-info').append(`${newState}`);
    });


  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

    // $('#show-state').click(function() {
    //   // We just need to call stateControl() without arguments to see our current state.
    //   const currentState = stateControl();
    //   $('#soil-value').text(`${currentState.soil}`);
    // });

    //add new plant
    $("form").submit(function(event){
      event.preventDefault();
      let name = $("#name").val();
      const plant = newPlant(name);
      const newState = stateControl(changeName(plant.name));
      console.log(newState);
      $('#name-value').append(`${plant.name}`);
    });
  });
