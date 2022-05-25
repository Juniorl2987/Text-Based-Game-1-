const prompt = require("prompt-sync")( // to use prompt in node js
    {
        sigint: true, // ctrl + C exits app
    }
);

const maxHP = 100; 
var currentPlayerHP = maxHP; 
var bossHP = maxHP;  

while(currentPlayerHP > 0 && bossHP > 0) {
    console.log("[Boss HP]: " + bossHP); 
    console.log("[Player HP]: " + currentPlayerHP);  
    var action = prompt("Type Attack or Counter Attack? ");
    console.clear();
    console.log("========================");
    console.log(`You chose to: ${action.toLowerCase()}`);
    console.log("========================");    
    if (action.toLowerCase() == "attack") {
        playerAttack()
        if (bossHP <= 0) {
             break;
        }        
        bossAttack();
                      
    } else if (action.toLowerCase() == "counter attack") {
        var randomNumber = Math.floor(Math.random()*101);
        if (randomNumber >= 90) {         
            console.log("You have successfully Counter Attacked!");  
            playerAttack();     
        } else {            
            console.log("You have failed to Counter Attack!");  
            bossAttack();      
        }   
    } else {
        console.log("Invalid input");
    }
}

if (currentPlayerHP <= 0) {
    console.log("You Died!");
} else if (bossHP <= 0) {
    console.log("Congratulations, you killed the boss!");
}

function playerAttack(){
    var playerDamage = (Math.floor(Math.random()*11) + 5)
        bossHP = bossHP - playerDamage;
        console.log("Player Damage: " + playerDamage);
}

function bossAttack(){
    var bossDamage = Math.floor(Math.random()*11) + 5;
    currentPlayerHP = currentPlayerHP - bossDamage;
    console.log("Boss Damage: " + bossDamage)
}
