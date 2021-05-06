'use strict';

class Thermostat {
 
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 25;
    this.POWER_OFF_MAX_TEMP = 32;
    this.RESET_TEMP = 20;
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
    } else if (this.isPowerOffAndMaximumTemperature()) { 
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
  isPowerOffAndMaximumTemperature() {
    return this.temperature === this.POWER_OFF_MAX_TEMP;
  }

  switchOff() {
    return this.powerSavingMode = false;
  }
  switchOn() {
    return this.powerSavingMode = true;
  }

  reset() {
    return this.temperature = this.RESET_TEMP ;
  }
};