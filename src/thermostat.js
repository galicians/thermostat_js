function Thermostat() {
	var TEMPMIN = 10
	this.temperature = 20
	this.temperatureInFahrenheit = this.temperature * 1.8 + 32
	this.isPowerSaverOn = true
	this.minimumTemperature = TEMPMIN
	this.maximumTemperature = 25
	this.scale = 'Celsius(˚C)'
}


Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
}

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += Math.min(this.maximumTemperature - this.temperature, degrees);
}

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
}

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
};

Thermostat.prototype.turnOffPowerSaving = function() {
	this.isPowerSaverOn = false
	this.maximumTemperature = 32
}

Thermostat.prototype.turnOnPowerSaving = function() {
	this.isPowerSaverOn = true
}

Thermostat.prototype.reset = function() {
	this.temperature = 20
}

Thermostat.prototype.changeScaleToCelsius = function() {
	this.scale = 'Celsius(˚C)' ;
	// this.temperature = (this.temperature - 32) / 1.8;
	// this.minimumTemperature = (this.minimumTemperature - 32) / 1.8;
	// this.maximumTemperature = (this.maximumTemperature - 32) / 1.8;
}

Thermostat.prototype.changeScaleToFahrenheit = function() {
	this.scale = 'Fahrenheit (˚F)' ;
	// this.temperature = (this.temperature * 1.8) + 32 ;
	// this.minimumTemperature = (this.minimumTemperature * 1.8) + 32 ;
	// this.maximumTemperature = (this.maximumTemperature * 1.8) + 32 ;
}

Thermostat.prototype.displayColor = function() {
	if(this.temperature < 18){return 'Green'};
	if(this.temperature >= 25){return 'Red'};
	return 'Yellow'
}