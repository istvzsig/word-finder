class Player {
    constructor(name) {
      this.name = name || 'Silent Bob';
      this.level = 1;
      this.update();
    }
    setHp() {
      return this.hp = this.level * 100;
    }
    setMana() {
      return this.mana = this.hp * 0.66;
    }
    setDamage() {
      return this.dmg
        = Math.abs(Math.random()
        * (this.level - (this.level+15))
        + this.level
        | 0) + 10
    }
    update() {
      this.setHp();
      this.setMana();
      this.setDamage();
    }
    levelUp() {
      this.level++;
      this.update();
    }
  }
  