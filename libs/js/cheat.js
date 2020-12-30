var notToL2 = true; // 是否首次进入 Level 2
var removeIng = false; // 是否正在删除箱子
var completed = false;

function cheat() {
    playSoundEffect();
    if (!statusNow && level != arr.length) {
        if (!removeIng) {
            removeIng = true;
            var rr = setInterval(cheat2, 100);
            var sds = setInterval(() => {
                if (currentChests.length == 0) {
                    clearInterval(rr);
                    if (level != init().length - 1) {
                        console.log('[System] Cheating instructions mode enabled.');
                        console.log('[System] Skipping to Level ' + (level + 1) + '.');
                        nextLevel(true);
                    } else {
                        level = 3;
                        statusNow = true;
                        // document.getElementById('status').innerHTML = 'chEatiNg is gOod?';
                        document.onkeydown = function () {
                            document.getElementById('flow').style.display = 'none';
                        };
                    }
                    console.log('');
                    removeIng = false;
                    clearInterval(sds);
                } else return;
            }, 100);
        } else {
            return;
        }
    }
}

function cheat2() {
    playSoundEffect();
    if (!statusNow) {
        statusNow = true;

        var theChest = currentChests[Math.floor(Math.random() * currentChests.length)];
        var theFlag = currentFlags[Math.floor(Math.random() * currentFlags.length)];

        if (theFlag.fRow == theChest.cRow && theFlag.fCol == theChest.cCol) {
            arr[theChest.cRow][theChest.cCol] = 1;
        } else {
            arr[theChest.cRow][theChest.cCol] = 0;
            arr[theFlag.fRow][theFlag.fCol] = 0;
        }
        map.removeChild(theFlag);
        console.log('[Cheat] Random removed a #flag' + theFlag.id + '.');
        map.removeChild(theChest);
        console.log('[Cheat] Random removed a #chest' + theChest.id + '.');

        statusNow = false;
        check();
    }
}

function cheat3(row, col) {
    arr[row][col] = 0;
}

var mySelect = document.getElementById('select');
var theIndex = mySelect.selectedIndex;
mySelect.className += ' disabled';
mySelect.onclick = function () {
    if (statusNow && level == init().length - 1) {
        completed = true;
        statusNow = false;
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = 'lang';
        }
        document.onkeydown = keyDown;
        removeIng = false;
        document.getElementById('cr').onclick = changeRole;
        document.getElementById('cheat2').onclick = cheat2;
    }
    // else statusNow = true;
    theIndex = mySelect.selectedIndex;

    if (theIndex != level) {
        level = theIndex;
        nextLevel(false);
    }
};
mySelect.onkeydown = function () {
    return false;
};
