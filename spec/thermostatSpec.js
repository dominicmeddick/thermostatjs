'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees',() => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature up', () => {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temperature down', () => {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', () => {
    for(let i = 0; i <= 10; i++ ) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  })
  it('has a power saving mode', () => {
    expect(thermostat.powerSavingMode).toEqual(true);
  })
  it('has a maximum temperature of 25', () => {
    for(let i = 0; i <= 7; i++ ) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });
  it('can turn power saving mode off', () => {
    thermostat.switchOff();
    expect(thermostat.powerSavingMode).toEqual(false);
  })
  it('can turn power saving mode off', () => {
    thermostat.switchOff();
    thermostat.switchOn();
    expect(thermostat.powerSavingMode).toEqual(true);
  })
  it('has a maximum temperature of 32 when the power is off', () => {
    thermostat.switchOff();
    for(let i = 0; i <= 20; i++ ) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32)
  });
  it('can reset the temperature to 25', () => {
    for(let i = 0; i <= 10; i++ ) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  })
});