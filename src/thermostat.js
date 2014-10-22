function Thermostat() {
	this.temperature = 20
	this.isPowerSaverOn = true
}


Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1)
}

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
}

Thermostat.prototype.decreaseTemperature = function() {
	this.temperature -= 1
}