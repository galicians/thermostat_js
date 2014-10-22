'use strict'

describe("thermostat", function() {

	var thermostat

	beforeEach(function() {
		thermostat = new Thermostat
	})

	describe("by default", function() {

		it("thermostat should be defined", function() {
			expect(thermostat).toBeDefined()
		})

		it("thermostat should have a temperature", function() {
			expect(thermostat.temperature).toBeDefined()
		})

		it("thermostat should have 20 degrees Celsius as a default", function() {
			expect(thermostat.temperature).toEqual(20)
		})

		it("power saving mode should be ON", function() {
			expect(thermostat.isPowerSaverOn).toBe(true)
		})

		it("can increase the temperature by one degree Celsius", function() {
			thermostat.increaseTemperature()
			expect(thermostat.temperature).toBe(21)
		})

		it("can decrease the temperature by one degree Celsius", function() {
			thermostat.decreaseTemperature()
			expect(thermostat.temperature).toBe(19)
		})

		it('has a minimum temperature of ten degrees Celsius',function(){
			expect(thermostat.minimumTemperature).toEqual(10);
		});

		it("can't have a temperature lower than ten degrees Celsius",function(){
			thermostat.decreaseTemperatureBy(15);
			expect(thermostat.temperature).toEqual(10);
		});

		it("should have max temperature 25 degrees Celsius(power saving mode on)", function() {
			expect(thermostat.maximumTemperature).toEqual(25)
		});

		it("can't have a temperature higher than 25 degrees Celsius",function(){
			thermostat.increaseTemperatureBy(6);
			expect(thermostat.temperature).toEqual(25);
		});

		it('can turn power saving mode off',function(){
			thermostat.turnOffPowerSaving()
			expect(thermostat.isPowerSaverOn).toEqual(false);
		});

		it('can turn power saving mode on', function() {
			thermostat.turnOffPowerSaving()
			thermostat.turnOnPowerSaving()
			expect(thermostat.isPowerSaverOn).toEqual(true)
		})

		it('should show the temperature in degrees celsius', function() {
			expect(thermostat.scale).toEqual('Celsius(˚C)')
	
		})

		it('should color the display in yellow',function(){
			expect(thermostat.displayColor()).toEqual('Yellow')
		});

	})

	describe("custom options", function() {

		it("can increase the temperature by request", function() {
			thermostat.increaseTemperatureBy(2)
			expect(thermostat.temperature).toBe(22)
		})

		it("can decrease the temperature by request", function() {
			thermostat.decreaseTemperatureBy(7)
			expect(thermostat.temperature).toBe(13)
		})

		it('can reset default temperature by hitting the reset button',function(){
			thermostat.increaseTemperatureBy(5);
			thermostat.reset();
			expect(thermostat.temperature).toEqual(20);
		});

		it('can change the scale to Fahrenheit',function(){
			thermostat.changeScaleToFahrenheit();
			expect(thermostat.scale).toEqual('Fahrenheit (˚F)');
		});

		it('should display green when the temperature is < 18 degrees Celsius', function() {
			thermostat.temperature = 17
			expect(thermostat.displayColor()).toEqual('Green')
		})

		it('should display red if temperature is higher or equal to 25 Celsius',function(){
			thermostat.temperature = 25
			expect(thermostat.displayColor()).toEqual('Red');
		});


	})

	describe('when in degrees Fahrenheit',function(){

		it("can display degrees in Fahrenheit after changing scale to Fahrenheit", function() {
			thermostat.changeScaleToFahrenheit()
			expect(thermostat.temperatureInFahrenheit).toEqual(68)
		});

		it('can change the scale back to Celsius',function(){
			thermostat.changeScaleToFahrenheit();
			thermostat.changeScaleToCelsius();
			expect(thermostat.scale).toEqual('Celsius(˚C)');
		});

	});

	describe('when power save mode is off',function(){
		it('has a max temperature of 32 degrees Celsius',function(){
			thermostat.turnOffPowerSaving()
			expect(thermostat.maximumTemperature).toEqual(32)
		});

		it("cant' have a temperature higher than 32 degrees Celsius",function(){
			thermostat.turnOffPowerSaving();
			thermostat.increaseTemperatureBy(15);
			expect(thermostat.maximumTemperature).toEqual(32);

		});
		

	});
})