
  class Part {
  constructor(object) {
    this.name = object.name;
    this.type =
    object.type === 'shell' ||
    object.type === 'hyperdrive' ||
    object.type === 'computer' ||
    object.type === 'life support' ||
    object.type === 'landing gear' ?
    object.type : undefined;
    this.value = object.value;
    this.broken = false;
  }

  isValid() {
    if (this.name === undefined){
      return false;
    }
    if (this.type === undefined) {
      return false;
    }
    if (this.value === undefined) {
      return false;
    } else {
      return true;
    }

  }

}



module.exports = Part;
