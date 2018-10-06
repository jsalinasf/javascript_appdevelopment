
// Salinas_Exercise7

var Player = function (name, livesLeft, score, speed) {
    // Properties
    this.name = name;
    this.livesLeft = livesLeft;
    this.score = score;
    this.speed = speed;
    this.gridLocationX = 0;
    this.gridLocationY = 0;

    // 10x10 grid
    // (0,0)............(9,0)
    // ......................
    // ........(5x5).........
    // ......................
    //(0,9).............(9,9)

    //Methods
    Player.prototype.die = function()
    {
        if (this.livesLeft < 0)
        {
            alert("Game over!");
        }
    }
    Player.prototype.moveLeft = function()
    {
        if (this.gridLocationX < 10)
        {
            this.gridLocationX += 1;
        } else {
            alert("Player has reached the left edge");
        }

    }
    Player.prototype.moveRight = function()
    {
        if (this.gridLocationX > 0)
        {
            this.gridLocationX -= 1;
        } else {
            alert("Player has reached the right edge");
        }

    }
    Player.prototype.moveUp = function()
    {
        if (this.gridLocationY > 0)
        {
            this.gridLocationY -= 1;            
        } else {
            alert("Player has reached the top edge");
        }
    }
    Player.prototype.moveDown = function()
    {
        if (this.gridLocationY < 10)
        {
            this.gridLocationY += 1;
        }
        else {
            alert("Player has reached the bottom edge");
        }
    }

}