const expect = chai.expect;
const assert = chai.assert;

describe('⚔️ Gladiator class', () => {
  it('exists', () => {
    expect(Gladiator).to.be.a('function');
  });
  it('should have properties `name` and `weapon`', () => {
    const max = new Gladiator('Maximus', 'Trident');
    expect(max).to.have.property('name');
    expect(max).to.have.property('weapon');
  });
  it('should accept the name and the weapon as strings', () => {
    const max = new Gladiator('Maximus', 'Trident');
    expect(max.name).to.eq('Maximus');
    expect(max.weapon).to.eq('Trident');
  });
});

describe('🏟 Arena class', () => {
  it('exists', () => {
    expect(Arena).to.be.a('function');
  });
  describe('Arena class setup', () => {
    let colosseum;
    beforeEach(() => {
      colosseum = new Arena('Colosseum');
    });
    it('should have a property `name`', () => {
      expect(colosseum).to.have.property('name');
      expect(colosseum.name).to.eq('Colosseum');
    });
    it('capitalizes the name when the name is passed in', () => {
      const megalopolis = new Arena('megalopolis');
      expect(megalopolis.name).to.eq('Megalopolis');
    });
    it('has a property `gladiators` which is an empty array on initialization', () => {
      expect(colosseum).to.have.property('gladiators');
      expect(colosseum.gladiators).to.be.a('array');
      expect(colosseum.gladiators).to.have.lengthOf(0);
    });
  });
  describe('Arena class methods', () => {
    let colosseum;
    beforeEach(() => {
      colosseum = new Arena('Colosseum');
    });
    describe('the `addGladiator` method', () => {
      it('should exist as a method on the `Arena` class', () => {
        expect(colosseum).to.have.property('addGladiator');
        expect(colosseum.addGladiator).to.be.a('function');
      });
      it("accepts gladiators via `addGladiator` and adds them to the arena's gladiator array", () => {
        const max = new Gladiator('Maximus', 'Trident');
        colosseum.addGladiator(max);
        expect(colosseum.gladiators).to.have.lengthOf(1);
        expect(colosseum.gladiators[0] instanceof Gladiator).to.equal(true);
      });
      it('only has two gladiators at a time', () => {
        const max = new Gladiator('Maximus', 'Trident');
        const b = new Gladiator('b', 'Trident');
        const c = new Gladiator('c', 'Trident');
        colosseum.addGladiator(max);
        colosseum.addGladiator(b);
        colosseum.addGladiator(c);
        expect(colosseum.gladiators).to.have.lengthOf(2);
        expect(colosseum.gladiators[0].name).to.equal('Maximus');
        expect(colosseum.gladiators[1].name).to.equal('b');
      });
    });
    describe('the fight method', () => {
      let trident, spear, club, maximus, titus;
      beforeEach(() => {
        trident = new Gladiator('trident', 'Trident');
        spear = new Gladiator('spear', 'Spear');
        club = new Gladiator('club', 'Club');
        maximus = new Gladiator('Maximus', 'Trident');
        titus = new Gladiator('Titus', 'Spear');
      });
      it('should exist as a method on the Arena class', () => {
        expect(colosseum).to.have.property('fight');
        expect(colosseum.fight).to.be.a('function');
      });
      it('should remove at least one gladiator from the arena', () => {
        colosseum.addGladiator(trident);
        colosseum.addGladiator(spear);
        colosseum.fight();
        expect(colosseum.gladiators).to.have.lengthOf(1);
      });
      it('should remove both gladiators if they have the same weapon', () => {
        colosseum.addGladiator(spear);
        colosseum.addGladiator(titus);
        colosseum.fight();
        expect(colosseum.gladiators).to.have.lengthOf(0);
      });
      it('trident beats spear', () => {
        colosseum.addGladiator(spear);
        colosseum.addGladiator(trident);
        colosseum.fight();
        expect(colosseum.gladiators[0].name).to.equal('trident');
      });
      it('club beats trident', () => {
        colosseum.addGladiator(trident);
        colosseum.addGladiator(club);
        colosseum.fight();
        expect(colosseum.gladiators[0].name).to.equal('club');
      });
      it('spear beats club', () => {
        colosseum.addGladiator(club);
        colosseum.addGladiator(spear);
        colosseum.fight();
        expect(colosseum.gladiators[0].name).to.equal('spear');
      });
    });
  });
});

/**
 * BONUSES!!
*/

describe('🎉 Arena class bonuses', () => {
  let col;
  beforeEach(() => {
    col = new Arena('colosseum');
    col.addGladiator(new Gladiator('Maximus', 'Trident'));
    col.addGladiator(new Gladiator('J', 'Club'));
  });
  describe('`removeFromArena` method', () => {
    it('should exist as a method on the arena class', () => {
      expect(col).to.have.property('removeFromArena');
      expect(col.removeFromArena).to.be.a('function');
    });
    it("should remove a gladiator from the arena based on a gladiator's name", () => {
      col.removeFromArena('J');
      expect(col.gladiators).to.have.lengthOf(1);
      expect(col.gladiators[0].name).to.equal('Maximus');
    });
    it('should error if there is no gladiator by that name', () => {
      assert.throws(
        () => col.removeFromArena('aleph'),
        Error,
        'No gladiator by that name!',
      );
    });
  });
  describe('new winning conditions', () => {
    it('should declare any gladiator named Maximus the winner', () => {
      col.fight();
      expect(col.gladiators[0].name).to.equal('Maximus');
    });
  });
  describe('`entertained` method', () => {
    it('should exist as a method on the arena class', () => {
      expect(col).to.have.property('entertained');
      expect(col.entertained).to.be.a('function');
    });
    it('should return `true` if Maximus is in the arena', () => {
      expect(col.entertained()).to.equal(true);
    });
  });
});

/**
 * Here are your error handling bonuses. 
 * 
*/
describe('🎉 Error Handling', () => {
  describe('Gladiator class error handling', () => {
    it('should error when passed something other than trident, weapon, spear', () => {
      assert.throws(
        () => {
          const taco = new Gladiator('taco', 'taco');
        },
        Error,
        'That weapon is not allowed!',
      );
    });
  });
  describe('Arena class error handling', () => {
    it('should error when `addGladiator` is given something other than a Gladiator', () => {
      const col = new Arena('colosseum');
      assert.throws(
        () => {
          col.addGladiator('hello');
        },
        Error,
        "That's not a gladiator!",
      );
    });
  });
});

