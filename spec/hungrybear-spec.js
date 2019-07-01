// test suite for coolDate

// Date(year month day)
// import { CoolDate } from './../src/coolDate.js';
//
// describe('CoolDate', function() {
//
//   it('should test whether constructor works', function() {
//     let mydate = new CoolDate(2016, 5, 24);
//     expect(mydate.getFullYear()).toEqual(2016);
//     expect(mydate.getMonth()).toEqual(5);
//     expect(mydate.getDate()).toEqual(24);
//   });
//
//
//
// });


beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  import { HungryBear } from './../js/hungrybear.js';

  describe('HungryBear', function() {
    let fuzzy = new HungryBear("Fuzzy");

    beforeEach(function() {
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('should have a name and a food level of 10 when it is created', function() {
      expect(fuzzy.name).toEqual("Fuzzy");
      expect(fuzzy.foodLevel).toEqual(10);
    });


    it('should have a food level of 7 after 3001 milliseconds', function() {
      jasmine.clock().tick(3001);
      expect(fuzzy.foodLevel).toEqual(7);
    });
  });
