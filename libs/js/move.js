var offSetXY = -1;
var offSetX = arr[0].length;
var offSetY = arr.length;
var hitCount = 0;
var isCrossAble = false;

function move(bg, l, t) {
    if (statusNow) return;
    role.style.backgroundImage = bg;
    if (!isCrossAble) {
        if (arr[role.rRow + t][role.rCol + l] == 0) {
            arr[role.rRow][role.rCol] = 0;
            role.rRow += t;
            role.rCol += l;
            role.style.left = role.rCol * 50 + 'px';
            role.style.top = role.rRow * 50 + 'px';
            arr[role.rRow][role.rCol] = 2;
        } else if (arr[role.rRow + t][role.rCol + l] == 4) {
            oCase = document.getElementById(role.rRow + t + ',' + (role.rCol + l));
            if (
                arr[oCase.cRow + t][oCase.cCol + l] != 1 &&
                arr[oCase.cRow + t][oCase.cCol + l] != 4
            ) {
                if (l < 0 || t < 0) {
                    if (oCase.cCol + l != offSetXY && oCase.cRow + t != offSetXY) {
                    } else return;
                } else if (l > 0 || t > 0) {
                    if (oCase.cCol + l != offSetX && oCase.cRow + t != offSetY) {
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
    } else {
        isCrossAble = false;
        move(bg, l, t);
        // 原本这里是穿墙后的代码，但是不想做了
    }
    if (!statusNow) check();
}

function up() {
    if (role.rCol - 1 != offSetXY) move(roleImgs[2], -1, 0);
    else hitCount++;
}

function down() {
    if (role.rCol + 1 != offSetX) move(roleImgs[3], 1, 0);
    else hitCount++;
}

function left() {
    if (role.rRow - 1 != offSetXY) move(roleImgs[1], 0, -1);
    else hitCount++;
}

function right() {
    if (role.rRow + 1 != offSetY) move(roleImgs[0], 0, 1);
    else hitCount++;
}
console.log('[System] Core functions generated.');
