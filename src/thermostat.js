'use strict';

class Thermostat {
 
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 25;
    this.temperature = 20;
    this.powerSavingMode = true;
  };

  up() {
    if(this.powerSavingMode) {
      if (this.isMaximumTemperature()) { 
        return;
      } else {
        this.temperature += 1
      };
    } else if (this.temperature === 32) { 
      return;
    } else {
      this.temperature += 1
    };
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
  isMaximumTemperature () {
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  }

  switchOff() {
    return this.powerSavingMode = false;
  }

  switchOn() {
    return this.powerSavingMode = true;
  }
};