new Vue({
    el:'#app',
    data: {
        playerHealh: 100,
        monsterhealth: 100,
        gameIsRunning: false,
        turns:[]
    },
    computed: {
        healthbarPlayer: function(){
            return this.healthbarColor(this.playerHealh);
        },
        healthbarMonster: function(){
            return this.healthbarColor(this.monsterhealth);
        }
    },
    methods:{
        startGame:function(){
            this.gameIsRunning = true;
            this.playerHealh = 100;
            this.monsterhealth = 100;
        },
        attack: function(){ 
            var damage = this.calculateDamage (3, 10); 
            this.monsterhealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function(){
            var damage = this.calculateDamage (10, 20);
            this.monsterhealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        heal: function(){
            if(this.playerHealh <= 90){
                this.playerHealh += 10;
            }
            else{
                this.playerHealh = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for 10'
            });
            this.monsterAttacks();
        },
        giveUp: function(){
            this.gameIsRunning = false;
            this.turns.length = 0;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max)+1, min);
        },
        monsterAttacks: function(){
            var damage = this.calculateDamage(5, 12);
            this.playerHealh -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
            this.checkWin();
        },
        checkWin: function(){
            if(this.monsterhealth <= 0){
                if(confirm('You won! New Game')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                this.turns.length = 0;
                return true;
            }
            else if (this.playerHealh <= 0){
                if(confirm('You lose! New Game')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                    this.turns.length = 0;
                }
                this.turns.length = 0;
                return true;
            }
            return false
        },
        healthbarColor: function(player){
            if(player <= 30) {
                return 'red';
            }
            else if(player <= 65){
                return 'orange';
            }
            else if(player > 65){
                return 'green';
            }
        }
    }

});