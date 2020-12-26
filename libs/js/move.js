function move(bg, l, t) {
    if (statusNow) return;
    role.style.backgroundImage = bg;
    if (arr[role.rRow + t][role.rCol + l] == 0) {
        arr[role.rRow][role.rCol] = 0;
        role.rRow += t;
        role.rCol += l;
        role.style.left = role.rCol * 50 + 'px';
        role.style.top = role.rRow * 50 + 'px';
        arr[role.rRow][role.rCol] = 2;
    } else if (arr[role.rRow + t][role.rCol + l] == 4) {
        oCase = document.getElementById(role.rRow + t + ',' + (role.rCol + l));
        if (arr[oCase.cRow + t][oCase.cCol + l] != 1 && arr[oCase.cRow + t][oCase.cCol + l] != 4) {
            if (l < 0 || t < 0) {
                if (oCase.cCol + l != -1 && oCase.cRow + t != -1) {
                } else return;
            } else if (l > 0 || t > 0) {
                if (oCase.cCol + l != arr[0].length && oCase.cRow + t != arr.length) {
                } else return;
            } else return;
        } else return;

        playSoundEffect();
        arr[role.rRow][role.rCol] = 0;
        role.rRow += t;
        role.rCol += l;
        role.style.left = role.rCol * 50 + 'px';
        role.style.top = role.rRow * 50 + 'px';
        arr[role.rRow][role.rCol] = 2;

        oCase.cRow += t;
        oCase.cCol += l;
        oCase.id = oCase.cRow + ',' + oCase.cCol;
        oCase.style.left = oCase.cCol * 50 + 'px';
        oCase.style.top = oCase.cRow * 50 + 'px';
        if (arr[oCase.cRow][oCase.cCol] == 3) {
            arr[oCase.cRow][oCase.cCol] = 1;
        } else {
            arr[oCase.cRow][oCase.cCol] = 4;
        }
    } else playSoundEffect();
    if (!statusNow) check();
}

function up() {
    if (role.rCol - 1 != -1) move(roleImgs[2], -1, 0);
}

function down() {
    if (role.rCol + 1 != 15) move(roleImgs[3], 1, 0);
}

function left() {
    if (role.rRow - 1 != -1) move(roleImgs[1], 0, -1);
}

function right() {
    if (role.rRow + 1 != 13) move(roleImgs[0], 0, 1);
}
console.log('[System] Core functions generated.');
