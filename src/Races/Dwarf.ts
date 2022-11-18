import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Dwarf._raceInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._raceInstances;
  }
}