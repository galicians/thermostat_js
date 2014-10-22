function Thermostat() {
	var TEMPMIN = 10
	this.temperature = 20
	this.temperatureInFahrenheit = this.celsiusToFahrenheit(this.temperature);
	this.isPowerSaverOn = true
	this.minimumTemperature = TEMPMIN
	this.maximumTemperature = 25
	this.scale = 'Celsius(˚C)'
}


Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
}

Thermostat.prototype.increaseTemperatureBy = function(degreesC) {
	this.temperature += Math.min(this.maximumTemperature - this.temperature, degreesC);
}

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
}

Thermostat.prototype.decreaseTemperatureBy = function(degreesC) {
	this.temperature -= Math.min(this.temperature - this.minimumTemperature, degreesC);
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
}

Thermostat.prototype.changeScaleToFahrenheit = function() {
	this.scale = 'Fahrenheit (˚F)' ;
}

Thermostat.prototype.increaseTemperatureInFahrenheit = function(degreesF) {
	this.increaseTemperatureInFahrenheitBy(1);
};

Thermostat.prototype.increaseTemperatureInFahrenheitBy = function(degreesF) {
	this.temperatureInFahrenheit += Math.min(this.celsiusToFahrenheit(this.maximumTemperature) - this.temperatureInFahrenheit, degreesF);
};

Thermostat.prototype.decreaseTemperatureInFahrenheit = function(degreesF) {
	this.decreaseTemperatureInFahrenheitBy(1);
};

Thermostat.prototype.decreaseTemperatureInFahrenheitBy = function(degreesF) {
	this.temperatureInFahrenheit -= Math.min(this.temperatureInFahrenheit - this.celsiusToFahrenheit(this.minimumTemperature), degreesF);
};

Thermostat.prototype.displayColor = function() {
	if(this.temperature < 18){return 'Green'};
	if(this.temperature >= 25){return 'Red'};
	return 'Yellow'
}

Thermostat.prototype.celsiusToFahrenheit = function(degreesC) {
	return degreesC * 1.8 + 32;
};

Thermostat.prototype.fahrenheitToCelsius = function(degreesF) {
	return (degreesF - 32) / 1.8;
};