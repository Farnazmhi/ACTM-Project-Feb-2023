
let recorder, soundFile, fft;
let state = 0;
let c, d, e, f, g, a, b, c2;

function preload() {
    c = loadSound('Tones/c.mp3');
    d = loadSound('Tones/d.mp3');
    e = loadSound('Tones/e.mp3');
    f = loadSound('Tones/f.mp3');
    g = loadSound('Tones/g.mp3');
    a = loadSound('Tones/a.mp3');
    b = loadSound('Tones/b.mp3');
    c2 = loadSound('Tones/2.mp3');
}

function setup() {
    createCanvas(1000, 100);
    fft = new p5.FFT();
    recorder = new p5.SoundRecorder();
    soundFile = new p5.SoundFile();
}

function draw() {

    background("#FFF8DCFF");
    stroke(random(0,255), random(0,255), random(0,255));
    strokeWeight(2);
    noFill();

    let wave = fft.waveform();

    beginShape();
    for(let i=0; i<width; i+=2) {
        let index = floor(map(i,0,width,0,wave.length));
        let x = i;
        let y = wave[index] * 100 + height/2;
        vertex(x,y);
    }
    endShape();
}

const k1 = document.getElementById("key1");
const k2 = document.getElementById("key2");
const k3 = document.getElementById("key3");
const k4 = document.getElementById("key4");
const k5 = document.getElementById("key5");
const k6 = document.getElementById("key6");
const k7 = document.getElementById("key7");
const k8 = document.getElementById("key8");


k1.addEventListener("mousedown", () => c.play());
k2.addEventListener("mousedown", () => d.play());
k3.addEventListener("mousedown", () => e.play());
k4.addEventListener("mousedown", () => f.play());
k5.addEventListener("mousedown", () => g.play());
k6.addEventListener("mousedown", () => a.play());
k7.addEventListener("mousedown", () => b.play());
k8.addEventListener("mousedown", () => c2.play());

//--------------------------------------------------------------------------------------------------------

const rec = document.getElementById("recIcon");
rec.addEventListener("mousedown", () => recAudio());

const ply = document.getElementById("plyIcon");
ply.addEventListener("mousedown", () => plyAudio());

const saveIcon = document.getElementById("saveIcon");
saveIcon.addEventListener("mousedown", () =>  saveAudio());

//---------------------------------------------------------------------------------------------------------
function recAudio() {
    if (state === 0) {
        rec.classList.replace("fa-circle", "fa-square");
        recorder.record(soundFile);
        state++;
    } else if (state === 1) {
        rec.classList.replace("fa-square", "fa-circle");
        recorder.stop();
        state = 0;
    }
}

function plyAudio() {
        soundFile.play();
}

function saveAudio() {
    saveSound(soundFile, 'mySound.wav');
}
 //---------------------------------------------------------------------------------------------------
