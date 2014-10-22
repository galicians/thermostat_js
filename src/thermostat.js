function Thermostat() {
	var TEMPMIN = 10
	this.temperature = 20
	this.isPowerSaverOn = true
	this.minimumTemperature = TEMPMIN
	this.maximumTemperature = 25
	this.scale = 'Celsius(˚C)'

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

Thermostat.prototype.changeScale = function() {
	this.scale === 'Celsius(˚C)' ? this.scale = 'Fahrenheit (˚F)' : this.scale = 'Celsius(˚C)'
}