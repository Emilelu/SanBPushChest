function nextLevel(s) {
    if (statusNow && level == init().length - 1) return;
    if (!statusNow && document.getElementById('flow').style.display == 'block') return;

    try {
        playSoundEffect();
        document.body.removeChild(document.getElementById('map'));
        if (s == true) {
            if (++level > 3) {
                level = 3;
                // return;
            }
        } else {
            if (level < 0) level = 0;
            console.log('[System] Reloaded level.');
        }
        document.getElementById('flow').style.display = 'none';

        start();

        if (notToL2) {
            mySelect.disabled = '';
            mySelect.className = 'spec';
            notToL2 = false;
        }
    } catch (e) {
        console.log('GAME IS OVER, DO NOT TRY TO SKIP CONTINUOUS!');
        return;
    }
}

function check() {
    statusNow = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 3) {
                statusNow = false;
                return;
            }
        }
    }
    if (currentChests.length > 0) {
        for (let index = 0; index < currentChests.length; index++) {
            currentChests[index].style.backgroundImage = 'url("./assets/imgs/items/chestR.png")';
        }
    }
    document.getElementById('flow').style.display = 'block';

    if (level == init().length - 1) {
        document.getElementById('oh').innerHTML = lang[lang.length - 3];
        document.getElementById('status').innerHTML = lang[lang.length - 4];

        statusNow = true;

        for (let i = 0; i < spans.length; i++) {
            spans[i].className = 'disabled lang hide';
        }
        setTimeout(() => {
            for (let i = 0; i < spans.length; i++) {
                spans[i].className += ' hide2';
            }
        }, 520);
        document.getElementById('flow').onclick = function () {
            this.style.display = 'none';
        };
        document.onkeydown = function () {
            document.getElementById('flow').style.display = 'none';
        };
        // mySelect.selectedIndex = 0;
        return;
    } else {
        document.getElementById('flow').onclick = null;
    }
}
