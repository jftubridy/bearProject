import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './hungrybear.js';

let grylls = new HungryBear("Grylls");

$(document).ready(function() {
  $('#feedBear').click(function(event) {
    event.preventDefault();
    grylls.feed();

  });
  $('#hungerLevel').prepend("<div> The bear's hunger level is " + grylls.foodLevel +"</div>");

});
