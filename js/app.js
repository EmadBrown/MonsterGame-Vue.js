new Vue({
    el:'#app',
    data: {
        playerHealh: 100,
        monsterhealth: 100,
        gameIsRunning: false
    },
    methods:{
        startGame:function(){
            this.gameIsRunning = true;
            this.playerHealh = 100;
            this.monsterhealth = 100;
        },
        attack: function(){
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max)+1, min);
            this.monsterhealth -=damage;

            if(this.monsterhealth <= 0){
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }

            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealh -=damage;

            if(this.playerHealh <= 0){
                alert('You lost!');
                this.gameIsRunning = false;
                return;
            }
        },
        specialAttack: function(){

        },
        heal: function(){

        },
        giveUp: function(){

        },
    }

});