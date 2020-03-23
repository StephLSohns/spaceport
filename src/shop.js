var Part = require('../src/part');
class Shop {
  constructor(object) {
    this.name = object.name;
    this.inventory = {};
    this.credits = object.credits;
  }

  addInventory(computer) {
    if (computer instanceof Part) {
      this.inventory[computer.type] = computer;
    }
  }

  outfitShip(isCaptain) {
    if (isCaptain.captain === undefined) {
        return 'cannot outfit a ship without a captain';
    } else if (isCaptain.captain.credits === 0) {
        return "you require 200 more credits to make this purchase";
    } else if (isCaptain.captain.credits == 100) {
        return "you require 100 more credits to make this purchase";
    }
  }
}
module.exports = Shop;
