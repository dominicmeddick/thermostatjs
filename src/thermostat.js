'use strict';

class Thermostat {
 
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.powerSavingMode = true;
  };

  up() {
    this.temperature += 1
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    } else {
      this.temperature -= 1
    }
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
};