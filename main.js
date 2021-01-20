canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car_1height=70;
car1_img="car1.jpg"
car1_x=10;
car1_y=10;

car2_width=120;
car_2height=70;
car2_img="car2.jpg"
car2_x=10;
car2_y=100;

bg_image="background.jpg";

function add() {
    bg_image_tag=new Image();
    bg_image_tag.onload=uploadbackground;
    bg_image_tag.src=bg_image;

    car1_img_tag=new Image();
    car1_img_tag.onload=uploadrover;
    car1_img_tag.src=car1_img;

    car2_img_tag=new Image();
    car2_img_tag.onload=uploadrover;
    car2_img_tag.src=car2_img;
}

function uploadbackground() {
    ctx.drawImage(bg_image_tag,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car_1height);
}

function uploadcar2() {
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car_2height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);

    if (keypressed=='38') {
        c1_up();
        console.log("up");
    }

    if (keypressed=='40') {
        c1_down();
        console.log("down");
    }

    if (keypressed=='37') {
        c1_left();
        console.log("left");
    }

    if (keypressed=='39') {
        c1_right();
        console.log("right");
    }

    if (keypressed=='87') {
        c2_up();
        console.log("up");
    }

    if (keypressed=='83') {
        c2_down();
        console.log("down");
    }

    if (keypressed=='68') {
        c2_right();
        console.log("right");
    }

    if (keypressed=='65') {
        c2_left();
        console.log("left");
    }
}