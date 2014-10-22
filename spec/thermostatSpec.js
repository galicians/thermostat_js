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

	})

	describe('when power save mode is on',function(){
		

	});
})