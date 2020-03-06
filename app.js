/* INITIAL SETUP */
const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 2);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    },
};

/* ==================================================================================== */

/* COMPONENTS */

class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        // new speed properties
        this.speedX = 0;
        this.speedY = 0;
    }

    update() {
        let ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

let player = new Component(30, 30, "red", 0, 110);

function updateGameArea() {
    myGameArea.clear();
    player.newPos();
    player.update();
}

myGameArea.start();

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38: // up arrow
            player.speedY -= 1;
            break;
        case 40: // down arrow
            player.speedY += 1;
            break;
        case 37: // left arrow
            player.speedX -= 1;
            break;
        case 39: // right arrow
            player.speedX += 1;
            break;
    }
};

document.onkeyup = function (e) {
    player.speedX = 0;
    player.speedY = 0;
};

/* ==================================================================================== */

/* SCHEDULE UPDATES AND CLEAR CANVAS */


/* ==================================================================================== */