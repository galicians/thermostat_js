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

		it("thermostat should have 20 degrees as a default", function() {
			expect(thermostat.temperature).toEqual(20)
		})

		it("power saving mode should be ON", function() {
			expect(thermostat.isPowerSaverOn).toBe(true)
		})

		it("can increase the temperature by one degree", function() {
			thermostat.increaseTemperature()
			expect(thermostat.temperature).toBe(21)
		})

		it("can decrease the temperature by one degree", function() {
			thermostat.decreaseTemperature()
			expect(thermostat.temperature).toBe(19)
		})

		it('has a minimum temperature of ten degrees',function(){
			expect(thermostat.minimumTemperature).toEqual(10);
		});

		it("should have max temperature 25 degrees(power saving mode on)", function() {
			expect(thermostat.maximumTemperature).toEqual(25)
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

		it('should have the temperature in celsius', function() {
			expect(thermostat.scale).toEqual('Celsius(˚C)')
		
		})



	})

	describe("custom options", function() {
		

		it("can increase the temperature by request", function() {
			thermostat.increaseTemperatureBy(12)
			expect(thermostat.temperature).toBe(32)
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
			thermostat.changeScale()
			expect(thermostat.scale).toEqual('Fahrenheit (˚F)');
		});

		it('can change the scale to Celsius',function(){
			thermostat.scale = 'Fahrenheit (˚F)'
			thermostat.changeScale()
			expect(thermostat.scale).toEqual('Celsius(˚C)');
		});

	})

	describe('when power save mode is off',function(){
		it('has a max temperature of 32 degrees',function(){
			thermostat.turnOffPowerSaving()
			expect(thermostat.maximumTemperature).toEqual(32)
		});
		


	});
})