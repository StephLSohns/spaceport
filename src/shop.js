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

  outfitShip(fighter, partName) {
    fighter.parts.shell = this.inventory[partName];
    this.inventory.shell = undefined;
    if (fighter.captain === undefined) {
        return "cannot outfit a ship without a captain";
    } else if (fighter.captain.credits === 0) {
        return "you require 200 more credits to make this purchase";
    } else if (fighter.captain.credits == 100) {
        return "you require 100 more credits to make this purchase";
    } else if (fighter.captain.credits >= 200) {
        this.chargeCaptain(fighter);
        return "shell added to ship";
    }
  }

  chargeCaptain(fighter) {
      fighter.captain.credits = fighter.captain.credits - 200;
  }
}
module.exports = Shop;
