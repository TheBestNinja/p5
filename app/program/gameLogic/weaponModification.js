class weaponModification {
  constructor() {
    this.stat = undefined;
    this.bonus = 0;
  }

  static generateWeaponModification() {
    const d3 = new dice(3);

    const modification = new weaponModification();
    modification.bonus = d3.roll();

    switch (d3.roll()) {
      case 1:
        modification.stat = 'STR';
        break;
      case 2:
        modification.stat = 'DEX';
        break;

      case 3:
        modification.stat = 'INT';
        break;
    }

    return modification;
  }

};