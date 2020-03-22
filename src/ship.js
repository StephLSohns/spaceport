class Ship {
  constructor(object) {
    this.name = object.name;
    this.type =
    object.type === 'wooden' ||
    object.type === 'tin' ||
    object.type === 'plastic' ? undefined : object.type;
    this.maxCrew = object.maxCrew;
    this.odometer = object.odometer || 0;
    this.fuelCapacity = object.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = object.captain;
    this.crew = [];
    this.fighter = object.fighter;
    this.cargo = [];
    this.parts = object.parts || {};
    this.readyToFly = false;
    this.notes = object.notes;
    // this.readyToFly = undefined;
  }

  addCrew(Han) {
    var currentCrew = this.maxCrew - this.crew.length;
    for (var i = 0; i < currentCrew; i++) {
      Han[i].isAlive === true && this.crew.push(Han[i]);
    }
  }

  loadCargo(partCargo) {
    (!!partCargo.type === true) && (this.cargo.push(partCargo));
  }

  updatePart(part) {
  if (part.type === undefined) {
      return
  }
    var existingPart = this.parts[part.type];
    var partValue = existingPart ? existingPart.value : 0;
    var diff = partValue - part.value;
    this.parts[part.type] = part;
    return diff;
}

checkReadiness() {
  if (this.captain === undefined) {
     this.readyToFly = false;
     this.notes = 'Cannot fly without a captain';
  } else if (this.fuel === 0) {
      this.readyToFly = false;
      this.notes = 'Cannot fly without fuel';
  } else if (!Object.keys(this.parts).length) {
      this.readyToFly = false;
      this.notes = 'Cannot fly without all parts';
  } else {
      this.readyToFly = true;
      this.notes = 'Good to go!';
  }
  return this;
 }

}
module.exports = Ship;
