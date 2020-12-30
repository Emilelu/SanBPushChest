var go = false; // 是否正在播放音效
var firstBGM = false;
function playSoundEffect() {
    if (bgmSwitcher.checked == true) return;
    document.getElementsByTagName('audio')[1].pause();
    document.getElementsByTagName('audio')[1].src =
        soundEffects[Math.floor(Math.random() * soundEffects.length)];
    document.getElementsByTagName('audio')[1].currentTime = 0;
    setTimeout(() => {
        if (go) document.getElementsByTagName('audio')[1].play();
    }, 10);
}

function rgb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

var isFlashing = true;
var flash = setInterval(() => {
    for (var i = 0; i < currentBarriers.length; i++) {
        var num = Math.floor(Math.random() * 14) + 1;
        currentBarriers[i].style.backgroundImage = 'url("./assets/imgs/barriers/' + num + '.png")';
    }
}, 50);
function fs() {
    playSoundEffect();
    if (isFlashing) {
        clearInterval(flash);
        isFlashing = false;
    } else {
        flash = setInterval(() => {
            for (var i = 0; i < currentBarriers.length; i++) {
                var num = Math.floor(Math.random() * 14) + 1;
                currentBarriers[i].style.backgroundImage =
                    'url("./assets/imgs/barriers/' + num + '.png")';
            }
        }, 50);
        isFlashing = true;
    }
}

function keyDown(e) {
    go = true;
    if (hitCount == 20 && !isCrossAble) {
        isCrossAble = true;
        // offSetX++;
        // offSetY++;
        // offSetXY--;
        console.log('穿墙术已开启');
    }
    // console.log(e);
    try {
        if (e.keyCode == 77) {
            bgmSwitcher.click();
            return;
        }
        if (e.keyCode == 75) {
            cheat2();
            return;
        }
        if (e.keyCode == 76) {
            switchLang(true);
            langSelector.selectedIndex = langID;
        }
        if (e.keyCode == 82) changeRole();
        if (e.keyCode == 69) cheat();
        if (e.keyCode == 81) {
            nextLevel(false);
            document.getElementById('flow').style.display = 'none';
        }
        if (e.keyCode == 84) {
            if (--level < 0) level = 0;
            nextLevel(false);
        }
        if (e.keyCode == 13 && document.getElementById('flow').style.display == 'block') {
            nextLevel(true);
            document.getElementById('flow').style.display = 'none';
        }
        if (e.keyCode == 70) fs();

        if (!firstBGM && bgmSwitcher.checked == false) {
            document.getElementsByTagName('audio')[0].play();
            firstBGM = true;
        }

        if (e.keyCode == 37 || e.keyCode == 65) up();
        if (e.keyCode == 39 || e.keyCode == 68) down();
        if (e.keyCode == 38 || e.keyCode == 87) left();
        if (e.keyCode == 40 || e.keyCode == 83) right();
    } catch (e) {
        console.log('虽然出现了 ' + e + '，但是这根本就不是问题!');
    }
}
console.log('[System] Keydown Events were bound.');

function start() {
    arr = init()[level];
    map = createUnit(document.body, 750, 650, 'relative', 0, 0, themap, 'contain');
    map.id = 'map';
    gridable(arr);
    currentChests = document.getElementsByClassName('chest');
    currentFlags = document.getElementsByClassName('flags');
    currentBarriers = document.getElementsByClassName('barrier');
    statusNow = false;
    mySelect.selectedIndex = level;
    switchLang(false);
}

var notices = document.getElementsByClassName('notice');
for (var i = 0; i < notices.length; i++) notices[i].onclick = playSoundEffect;

var bgmSwitcher = document.getElementsByTagName('input')[0];
bgmSwitcher.onclick = function () {
    if (this.checked == true) document.getElementById('bgm').pause();
    else document.getElementById('bgm').play();
};
