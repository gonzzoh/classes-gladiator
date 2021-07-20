class Arena {
    constructor(name, gladiators){
        name = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = name;
        this.gladiators = [];
    }
    addGladiator(){
        const newGladiator = new Gladiator(this.name, this.weapon, this.gladiators.length)
        this.gladiators.push(newGladiator);
        if(this.gladiators.length >= 2){

        }
    }
    fight(){
        const weapon = ['Trident', 'Spear', 'Club']
        if (this.gladiators[0]['weapon'] === weapon[0] && this.gladiator[1]['weapon'] === weapon[0]){
            this.gladiators.splice(0, 2);
        } if else(this.gladiators[0]['weapon'] === weapon[1] && this.gladiators[1]['weapon'] === weapon[1]){
            this.gladiators.splice(0, 2);
        } if else(this.gladiators[0]['weapon'] === weapon[2] && this.gladiators[1]['weapon'] === weapon[2]){
            this.gladiators.splice(0, 2);
        } if else(this.gladiators[0]['weapon'] === weapon[0] && this.gladiators[1]['weapon'] === weapon[1]){
            this.gladiators.splice(1, 1);
        } if else(this.gladiators[0]['weapon'] === weapon[0] && this.gladiators[1]['weapon'] === weapon[2]){
            this.gladiators.splice(0, 1);
        } if else(this.gladiators[0]['weapon'] === weapon[1] && this.gladiators[1]['weapon'] === weapon[0]){
            this.gladiators.splice(0, 1);
        } if else(this.gladiators[0]['weapon'] === weapon[1] && this.gladiators[1]['weapon'] === weapon[2]){
            this.gladiators.splice(0, 2);
        } if else(this.gladiators[0]['weapon'] === weapon[2] && this.gladiators[1]['weapon'] === weapon[1]){
            this.gladiators.splice(0, 1);
        } if else(this.gladiators[0]['weapon'] === weapon[2] && this.gladiators[1]['weapon'] === weapon[0]){
            this.gladiators.splice(1, 1);
        } 
    }
}

const notEntertainment = new Arena("Megalopolis");
Megalopolis.addGladiator();
console.log("Megalopolis");