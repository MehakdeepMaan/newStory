const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    BUY:  Symbol("  buy"),
    RULE: Symbol("rule"),
    PLAY: Symbol("play"),
    CONTINUE: Symbol("continue"),
   GO: Symbol("go"),
    FIND: Symbol("find"),
    VICTORY: Symbol("victory"),
    NOT: Symbol("not"),
    KILL: Symbol("kill"),
    JAIL: Symbol("jail")

});


export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = " i have a magic doll do you want to buy it or not..?";
                this.stateCur = GameState.BUY;
                break;
            case GameState.BUY:
                if(sInput.toLowerCase().match("buy")){
                    sReply = "now ,you have to play daily with this game .will you play with doll or not";
                    this.stateCur = GameState.PLAY;
                }else{
                    sReply ="sorry, you don't have any option to close game unless you will not die.";
                    this.stateCur = GameState.NOT;
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("play")){
                    sReply = "when you will start playing game with doll ,then you have to follow doll's rule. will you follow rule or not??";
                    this.stateCur = GameState.RULE;

                }else{ 
                    sReply = "sorry, you don't have any option to close game unless you will not die ";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.RULE:
                if(sInput.toLowerCase().match("rule")){
                    sReply = "when you start playing game then you will be under control of doll. are you willing to continue or stop";
                    this.stateCur = GameState.CONTINUE;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = "your mind is under control of doll , you have to go alone in dark and big jungle for next step.are you willing to go there or Not ";
                    this.stateCur = GameState.GO;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die. ";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.GO:
                if(sInput.toLowerCase().match("go")){
                    sReply = "In jungle you have to find  a dead body of Doll otherwise you become a doll . are you able to find out or not...?";
                    this.stateCur = GameState.FIND;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die ";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.FIND:
                if(sInput.toLowerCase().match("find")){
                    sReply = " when you go ,then you will have to do a fighting with another ghost.if you defeat you will kill . select Defeat or victory...?";
                    this.stateCur = GameState.VICTORY;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.NOT:
                if(sInput.toLowerCase().match("not")){
                    sReply = "sorry, you don't have any option to close game unless you will not die ";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die";
                    this.stateCur = GameState.NOT;

                }
                break;
                case GameState.VICTORY:
                if(sInput.toLowerCase().match("victory")){
                    sReply = " then , there will be another challenge. you have to kill your friend otherwise you will die . are you able to kill him or not...?";
                    this.stateCur = GameState.KILL;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.KILL:
                if(sInput.toLowerCase().match("kill")){
                    sReply = " if you kill your friend then police will arrest to otherwise ghost will kill you.are you want to go into jail or die...?";
                    this.stateCur = GameState.JAIL;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.JAIL:
                if(sInput.toLowerCase().match("jail")){
                    sReply = " ahead of police you have to convince you crime. and you will get life imprisonment.?now you don't have any option.close game";
                    this.stateCur = GameState.CLOSE;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die";
                    this.stateCur = GameState.NOT;
    
                }
                break;
                case GameState.CLOSE:
                if(sInput.toLowerCase().match("close")){
                    sReply = " when you select close your blood will be taken by doll and you will die....";
                    this.stateCur = GameState.WELCOMING;

                }else{
                    sReply = "sorry, you don't have any option to close game unless you will not die";
                    this.stateCur = GameState.NOT;
    
                }
                break;

        }
        return([sReply]);
    }
}