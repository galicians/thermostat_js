function Thermostat() {
	var TEMPMIN = 10
	this.temperature = 20
	this.isPowerSaverOn = true
	this.minimumTemperature = TEMPMIN
}


Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1)
}

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
}

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
}

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
};