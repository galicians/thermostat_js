function Thermostat() {
	var TEMPMIN = 10
	this.temperature = 20
	this.temperatureInFahrenheit = 68
	this.isPowerSaverOn = true
	this.minimumTemperature = TEMPMIN
	this.maximumTemperature = 25
	this.scale = 'C'
}


Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
	this.temperatureInFahrenheit = this.celsiusToFahrenheit(this.temperature);
}

Thermostat.prototype.increaseTemperatureBy = function(degreesC) {
	this.temperature += Math.min(this.maximumTemperature - this.temperature, degreesC);
	this.temperatureInFahrenheit = this.celsiusToFahrenheit(this.temperature);
}

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
	this.temperatureInFahrenheit = this.celsiusToFahrenheit(this.temperature);
}

Thermostat.prototype.decreaseTemperatureBy = function(degreesC) {
	this.temperature -= Math.min(this.temperature - this.minimumTemperature, degreesC);
	this.temperatureInFahrenheit = this.celsiusToFahrenheit(this.temperature);
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
	this.temperatureInFahrenheit = 68
}

Thermostat.prototype.changeScaleToCelsius = function() {
	this.scale = 'C' ;
}

Thermostat.prototype.changeScaleToFahrenheit = function() {
	this.scale = 'F' ;
}

Thermostat.prototype.increaseTemperatureInFahrenheit = function() {
	this.increaseTemperatureInFahrenheitBy(1);
	this.temperature = this.fahrenheitToCelsius(this.temperatureInFahrenheit);
};

Thermostat.prototype.increaseTemperatureInFahrenheitBy = function(degreesF) {
	this.temperatureInFahrenheit += Math.min(this.celsiusToFahrenheit(this.maximumTemperature) - this.temperatureInFahrenheit, degreesF);
	this.temperature = this.fahrenheitToCelsius(this.temperatureInFahrenheit);
};

Thermostat.prototype.decreaseTemperatureInFahrenheit = function() {
	this.decreaseTemperatureInFahrenheitBy(1);
	this.temperature = this.fahrenheitToCelsius(this.temperatureInFahrenheit);
};

Thermostat.prototype.decreaseTemperatureInFahrenheitBy = function(degreesF) {
	this.temperatureInFahrenheit -= Math.min(this.temperatureInFahrenheit - this.celsiusToFahrenheit(this.minimumTemperature), degreesF);
	this.temperature = this.fahrenheitToCelsius(this.temperatureInFahrenheit);
};

Thermostat.prototype.temperatureToDisplay = function() {
	if(this.scale === 'F') {
	return this.temperatureInFahrenheit}
	else return this.temperature
};

Thermostat.prototype.displayColor = function() {
	if(this.temperature < 18){return 'Green'};
	if(this.temperature >= 25){return 'Red'};
	return 'Yellow'
}

Thermostat.prototype.celsiusToFahrenheit = function(degreesC) {
	return Math.round(degreesC * 1.8 + 32);
};

Thermostat.prototype.fahrenheitToCelsius = function(degreesF) {
	return Math.round((degreesF - 32) / 1.8);
};