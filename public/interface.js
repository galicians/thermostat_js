thermostat = new Thermostat();

$('.temperature h1').text(thermostat.temperatureToDisplay());

$('#scale').append(thermostat.scale);

$('.increase_temperature').on('click',function(){
  if (thermostat.scale === 'F')
  	thermostat.increaseTemperatureInFahrenheit();
  else thermostat.increaseTemperature();
  $('.temperature h1').text(thermostat.temperatureToDisplay());
});

$('.decrease_temperature').on('click',function(){
  if (thermostat.scale === 'F')
  	thermostat.decreaseTemperatureInFahrenheit();
  else thermostat.decreaseTemperature();
  $('.temperature h1').text(thermostat.temperatureToDisplay());
});

$('.reset').on('click',function(){
  thermostat.reset();
   $('.temperature h1').text(thermostat.temperatureToDisplay());
});

$('.power_saving_on').on('click',function(){
  thermostat.turnOnPowerSaving();
   $('.power_saving_mode').text('Power Saver Mode is On');
});

$('.power_saving_off').on('click',function(){
  thermostat.turnOffPowerSaving();
   $('.power_saving_mode').text('Power Saver Mode is Off');
});

$('.celsius').on('click',function(){
  thermostat.changeScaleToCelsius();
   $('.temperature h1').text(thermostat.temperatureToDisplay());
});

$('.fahrenheit').on('click',function(){
  thermostat.changeScaleToFahrenheit();
   $('.temperature h1').text(thermostat.temperatureToDisplay());
});

