
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
        if (this.gridLocationX > 0)
        {
            this.gridLocationX -= 1;
            document.getElementById('messageForPlayer').textContent = 'Nice move';
        } else {
            document.getElementById('messageForPlayer').textContent = 'Player has reached the Left Margin';
        }

    }
    Player.prototype.moveRight = function()
    {
        if (this.gridLocationX < 9)
        {
            this.gridLocationX += 1;
            document.getElementById('messageForPlayer').textContent = 'Nice move';
        } else {
            document.getElementById('messageForPlayer').textContent = 'Player has reached the Right Margin';
        }

    }
    Player.prototype.moveUp = function()
    {
        if (this.gridLocationY > 0)
        {
            this.gridLocationY -= 1;
            document.getElementById('messageForPlayer').textContent = 'Nice move';
        } else {
            document.getElementById('messageForPlayer').textContent = 'Player has reached the Top Margin';
        }
    }
    Player.prototype.moveDown = function()
    {
        if (this.gridLocationY < 9)
        {
            this.gridLocationY += 1;
            document.getElementById('messageForPlayer').textContent = 'Nice move';
        }
        else {
            document.getElementById('messageForPlayer').textContent = 'Player has reached the Bottom Margin';
        }
    }

}

var player01 = new Player('PLayer 01', 3, 0, 0);

function updateCoordinates() {
    document.getElementById('currentPositionX').textContent = 'X: ' + player01.gridLocationX;
    document.getElementById('currentPositionY').textContent = 'Y: ' + player01.gridLocationY;
    document.getElementById('x' + player01.gridLocationX + "_y" + player01.gridLocationY).textContent = "x";
};

function cleanGrid() {
    document.getElementById('x' + player01.gridLocationX + "_y" + player01.gridLocationY).textContent = "";
}

document.getElementById('currentPositionX').textContent = 'X: 0';
document.getElementById('currentPositionY').textContent = 'Y: 0';

document.getElementById('btn-up').addEventListener('click', function() {
    cleanGrid();
    player01.moveUp();
    updateCoordinates();
})

document.getElementById('btn-down').addEventListener('click', function() {
    cleanGrid();
    player01.moveDown();
    updateCoordinates();
})

document.getElementById('btn-right').addEventListener('click',function() {
    cleanGrid();
    player01.moveRight();
    updateCoordinates();
})

document.getElementById('btn-left').addEventListener('click',function() {
    cleanGrid();
    player01.moveLeft();
    updateCoordinates();
})