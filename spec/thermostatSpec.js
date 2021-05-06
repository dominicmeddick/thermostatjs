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
});