import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './hungrybear.js';

let grylls = new HungryBear("Grylls");
grylls.setHunger();

$(document).ready(function() {
  $('#feedBear').click(function(event) {
    event.preventDefault();
    //grylls.feed();


    function checkAlive(){
      if(grylls.foodLevel <= 0){
        return new Error("You're dead!");
      }else {
        return true;
      }
    }

    try {
      const aliveTest = checkAlive();
      if(aliveTest instanceof Error){
        console.error(aliveTest.message);
        throw RangeError("You are dead. Food level too low!");
      }else{
        console.log("you are alive, good food level");
        $('#hungerLevel').prepend("<div> The bear's hunger level is " + grylls.foodLevel +"</div>");
      }
    } catch (error) {
      console.error(`Red Alert! Threat level Midnight! ${error.message}`);
    }
  });


});
