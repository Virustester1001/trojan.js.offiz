// globals
let bequiet;
let canvas;
let canvas_ctx;
let win_height;
let win_width;
let hanger;
let hanger_pos = 256;
let hanger_width;
let hanger_height;

// resize the canvas to match the window
function setsize() {
    win_width = window.innerWidth;
    win_height = window.innerHeight;
    canvas.width = win_width;
    canvas.height = win_height;
}

// grab a 100-pixel-tall horizontal strip and move it left or right by 50px
function effect_tearing() {
    for (let i = 0; i < 5; i++) {
        let pos_y = parseInt(Math.random() * (win_height - 100));

        canvas_ctx.drawImage(
            canvas,
            0,
            pos_y,
            win_width,
            100,
            (parseInt(Math.random() * 2) * 100) - 50, // (+/-)50
            pos_y,
            win_width,
            100);
    }
}

// add a random image to the canvas
function add_image() {
    let rnd_pic = document.getElementById('pic' + parseInt(Math.random() * 18));

    canvas_ctx.drawImage(
        rnd_pic,
        parseInt(Math.random() * (win_width - rnd_pic.width)),
        parseInt(Math.random() * (win_height - rnd_pic.height)));
}

// rewind and play one of the audio elements
function do_sound() {
    let rnd_snd = document.getElementById('snd' + parseInt(Math.random() * 7));
    rnd_snd.currentTime = 0;
    rnd_snd.play();
}

// temporarily bump the whole screen to one side
function screen_shake() {
    canvas.style.left = Math.random() < 0.5 ? "-50px" : "50px";
    setTimeout(function () {
        canvas.style.left = '0px';
    }, 50);
}

// temporarily tilt the screen
function screen_tilt() {
    canvas.style.transform = 'rotate(' + parseInt(Math.random() * 360) + 'deg)';
    setTimeout(function () {
        canvas.style.transform = '';
    }, 50);
}

// draw vertical lines of "dead pixels" (currently unused)
function vertline() {

    let base_x = parseInt(Math.random() * (win_width - 10));

    for (let i = 0; i < 10; i++) {
        canvas_ctx.strokeStyle = 'rgb(' +
            parseInt(Math.random() * 255) + ',' +
            parseInt(Math.random() * 255) + ',' +
            parseInt(Math.random() * 255) + ')';

        let line_x = base_x + i + Math.random() * 50 - 25;

        canvas_ctx.beginPath();
        canvas_ctx.moveTo(line_x + 0.5, 0.5);
        canvas_ctx.lineTo(line_x + 0.5, 0.5 + win_height);
        canvas_ctx.stroke();
    }
}

// main loop (on interval)
function mainloop() {
    if (document.hidden === true)
        return;  // Be courteous

    if (Math.random() < 0.1)
        effect_tearing();

    if (Math.random() < 0.05)
        screen_shake();

    if (Math.random() < 0.05)
        screen_tilt();

    add_image();

    if (!bequiet) do_sound();
}

// create notification doorhanger
function show_doorhanger() {
    hanger = document.getElementById('doorhanger');

    if (navigator.userAgent.includes('Firefox'))
        hanger.src = "img/doorhanger_firefox.png";
    else
        hanger.src = "img/doorhanger_chromium.png";

    hanger.addEventListener('load', function () {
        hanger.classList.add('hanger_enter');
        hanger_width = hanger.width;
        hanger_height = hanger.height;
        addEventListener("mousemove", on_mouse_move);
        addEventListener("mouseout", function (e) {
            if (!(e.relatedTarget || e.toElement))
                hanger.style.top = '4px';
        });
        addEventListener('resize', function () {
            hanger_pos = Math.max(0, Math.min(hanger_pos, window.innerWidth - hanger_width));
            hanger.style.left = hanger_pos + 'px';
        });
    });
}

// make the doorhanger run away
function on_mouse_move(e) {
    if (hanger_width * 2 > window.innerWidth) {
        if (e.clientX > hanger_pos && e.clientX < hanger_pos + hanger_width)
            hanger.style.top = Math.min(4, e.clientY - hanger_height - 10) + 'px';
        else
            hanger.style.top = '4px';
    } else {
        hanger.style.top = '4px';
        if (e.clientY - 10 < hanger_height) {
            if (e.clientX > hanger_pos && e.clientX < hanger_pos + hanger_width) {
                // if the hanger is pinned on the left
                if (e.clientX < hanger_width) {
                    hanger_pos = e.clientX;
                    hanger.style.left = hanger_pos + 'px';
                }
                // if the hanger is pinned on the right
                else if (e.clientX > window.innerWidth - hanger_width) {
                    hanger_pos = e.clientX - hanger_width;
                    hanger.style.left = hanger_pos + 'px';
                }
                // if the hanger is in the middle of the screen
                else {
                    hanger_pos = e.clientX - ((e.clientX - hanger_pos < hanger_width / 2) ? 0 : hanger_width);
                    hanger.style.left = hanger_pos + 'px';
                }
            }
        }
    }
}

// initialize all the things
function sw_init() {
    bequiet = document.cookie.split('; ').includes('bequiet=yes');
    document.getElementById('loading').style = 'display:none;';
    canvas = document.getElementById('canvas');
    canvas_ctx = canvas.getContext("2d");
    window.addEventListener('resize', setsize);
    setsize();
    window.setInterval(mainloop, 100);
    window.setTimeout(show_doorhanger, 2000);
}

window.addEventListener('load', sw_init);
