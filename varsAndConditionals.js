/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let ObiwanAttack = 25
let AnakinAttack = 35


if (obiwanAttack < anakinAttack){
    console.log('Anakin has a better attack than Obiwan')
} else if (obiwanAttack > anakinAttack){
    console.log('Obiwan has a better attack than Anakin')
} else {
    console.log('anakin and obiwan have the same attack')
}

let ObiwanHealth = 100
let ObiwanDefense = 0



if (obiwandefense >= anakinAttack){
    console.log("obiwan blocks attack")
}

else if (obiwanhealth <= anakinAttack){
    console.log('obiwan has been slain')
} else {
    obiwanhealth -= anakinAttack
    console.log(`obiwans health is now at ${obiwanhealth}`)
}

ObiwanDefense += 30 

for (let i=0; i < 5 ; i++){
    obiwanhealth -= (anakinAttack - obiwandefense)
    if(obiwanhealth <= 0)
    console.log('Obiwan was slain')
    } else {
        console.log(`Obiwans health is now at ${obiwanhealth}`)
    }

    while(ObiwanHealth > 0){
        obiwanhealth-=(anakinAttack - obiwandefense)
        console.log(`obiwans health is now ${obiwanhealth}`)}
        if(obiwanhealth <= 0){
            console.log('Obiwan was slain')
        }
    





