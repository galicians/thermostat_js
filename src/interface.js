thermostat = new Thermostat();
$('.temperature h1').text(thermostat.temperature);

$('.increase_temperature').on('click',function(){
  thermostat.increaseTemperature();
  $('.temperature h1').text(thermostat.temperature);
});

$('.decrease_temperature').on('click',function(){
  thermostat.decreaseTemperature();
   $('.temperature h1').text(thermostat.temperature);
});
