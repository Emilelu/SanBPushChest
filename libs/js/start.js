// Core Content
var level = 0; // 当前 Level
var statusNow = false; // 游戏总状态

var arr, oBox, width, height, rowCount, colCount, grid, role, oCase, flags, barrier; // 一系列变量，懒得说了

const themap = "url('./assets/imgs/utils/map.png')";
var map, currentChests, currentFlags, currentBarriers;
const spans = document.getElementsByTagName('span');

var roleImgs = [
    'url("./assets/imgs/directions/s.png")',
    'url("./assets/imgs/directions/w.png")',
    'url("./assets/imgs/directions/a.png")',
    'url("./assets/imgs/directions/d.png")',
    'url("./assets/imgs/roles/role.png")',
    'url("./assets/imgs/roles/role2.png")',
    'url("./assets/imgs/roles/role3.png")',
    'url("./assets/imgs/roles/role4.jpeg")',
    'url("./assets/imgs/roles/role5.png")',
];
const soundEffects = [
    './assets/audios/effects/effect.wav',
    './assets/audios/effects/effect2.wav',
    './assets/audios/effects/effect3.wav',
    './assets/audios/effects/effect4.wav',
    './assets/audios/effects/effect5.wav',
    './assets/audios/effects/effect6.wav',
    './assets/audios/effects/effect7.wav',
    './assets/audios/effects/effect8.wav',
    './assets/audios/effects/effect9.wav',
    './assets/audios/effects/effect10.wav',
    './assets/audios/effects/effect11.wav',
    './assets/audios/effects/effect12.wav',
    './assets/audios/effects/effect13.wav',
    './assets/audios/effects/effect14.wav',
    './assets/audios/effects/effect15.wav',
    './assets/audios/effects/effect16.wav',
    './assets/audios/effects/effect17.wav',
    './assets/audios/effects/effect18.wav',
    './assets/audios/effects/effect19.wav',
    './assets/audios/effects/effect20.wav',
];

console.log('[System] Variables generated.');

// Enable services
setInterval(() => {
    document.getElementById('notice').style.backgroundColor = rgb();
}, 1000);
document.onkeydown = keyDown;
start();
switchLang(langID);

// End
console.log('[System] Game initialization accomplished.\n');
