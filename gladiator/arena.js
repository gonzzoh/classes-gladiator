class Arena {
    constructor(name){
        name = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = name;
        this.gladiators = [];
    }
    addGladiator(name, weapon){
        const newGladiator = new Gladiator(name, weapon)
        if(this.gladiators.length < 2){
            this.gladiators.push(newGladiator);
        }
    }
    fight(){
    //     const weapon = ['Trident', 'Spear', 'Club']
    //     if (this.gladiators[0]['weapon'] === weapon[0] && this.gladiator[1]['weapon'] === weapon[0]){
    //         this.gladiators.splice(0, 2);
    //     } if else(this.gladiators[0]['weapon'] === weapon[1] && this.gladiators[1]['weapon'] === weapon[1]){
    //         this.gladiators.splice(0, 2);
    //     } if else(this.gladiators[0]['weapon'] === weapon[2] && this.gladiators[1]['weapon'] === weapon[2]){
    //         this.gladiators.splice(0, 2);
    //     } if else(this.gladiators[0]['weapon'] === weapon[0] && this.gladiators[1]['weapon'] === weapon[1]){
    //         this.gladiators.splice(1, 1);
    //     } if else(this.gladiators[0]['weapon'] === weapon[0] && this.gladiators[1]['weapon'] === weapon[2]){
    //         this.gladiators.splice(0, 1);
    //     } if else(this.gladiators[0]['weapon'] === weapon[1] && this.gladiators[1]['weapon'] === weapon[0]){
    //         this.gladiators.splice(0, 1);
    //     } if else(this.gladiators[0]['weapon'] === weapon[1] && this.gladiators[1]['weapon'] === weapon[2]){
    //         this.gladiators.splice(0, 2);
    //     } if else(this.gladiators[0]['weapon'] === weapon[2] && this.gladiators[1]['weapon'] === weapon[1]){
    //         this.gladiators.splice(0, 1);
    //     } if else(this.gladiators[0]['weapon'] === weapon[2] && this.gladiators[1]['weapon'] === weapon[0]){
    //         this.gladiators.splice(1, 1);
    //     } 
    }
}

const Megalopolis = new Arena("Megalopolis");
Megalopolis.addGladiator('Maximus', 'Trident');
Megalopolis.addGladiator('Gonz', 'Club');
console.log(Megalopolis);
console.log(Megalopolis.gladiators[0].name)