function init() {
    var mapList = [
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
            [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 4, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 3],
        ],
        [
            [1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
            [1, 3, 0, 0, 0, 0, 0, 1, 0, 0, 1, 3, 0, 2, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 4, 1, 1, 1, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [1, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
        ],
        [
            [3, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 3],
            [0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 4, 3, 0, 0, 2],
            [0, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 1],
            [0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
            [0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
            [1, 1, 1, 0, 4, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0],
        ],
        [
            [3, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3],
            [0, 1, 1, 0, 4, 0, 0, 0, 0, 0, 4, 3, 1, 1, 2],
            [0, 1, 1, 3, 0, 0, 4, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 3, 4, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [0, 0, 1, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 3, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 4, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 4, 0, 0, 0, 3, 1, 1, 3, 0, 0, 4, 0],
        ],
    ];
    return mapList;
}
console.log('[System] mapList generated.');

function createUnit(parent, w, h, position, l, t, bgi, bgs) {
    oBox = document.createElement('div');
    parent.appendChild(oBox);
    oBox.style.width = w + 'px';
    oBox.style.height = h + 'px';
    oBox.style.position = position;
    oBox.style.backgroundImage = bgi;
    oBox.style.backgroundSize = bgs;
    if (position == 'relative') {
        oBox.style.margin = '0 auto';
    } else {
        oBox.style.left = l + 'px';
        oBox.style.top = t + 'px';
    }
    return oBox;
}

function gridable(arr) {
    rowCount = arr.length;
    height = map.clientHeight / rowCount;
    for (var row = 0; row < rowCount; row++) {
        colCount = arr[row].length;
        for (var col = 0; col < colCount; col++) {
            width = map.clientWidth / colCount;
            grid = createUnit(
                map,
                width - 2,
                height - 2,
                'absolute',
                col * width,
                row * height,
                '',
                ''
            );
            if (arr[row][col] == 1) {
                var num = Math.floor(Math.random() * 14) + 1;
                barrier = createUnit(
                    map,
                    width,
                    height,
                    'absolute',
                    col * width,
                    row * height,
                    'url("./assets/imgs/barriers/' + num + '.png")',
                    ''
                );
                barrier.style.backgroundSize = '100% 100%';
                barrier.className = 'barrier';
            }
            if (arr[row][col] == 2) {
                role = createUnit(
                    map,
                    width,
                    height,
                    'absolute',
                    col * width,
                    row * height,
                    roleImgs[0],
                    ''
                );
                role.rRow = row;
                role.rCol = col;
            }
            if (arr[row][col] == 3) {
                flags = createUnit(
                    map,
                    width,
                    height,
                    'absolute',
                    col * width,
                    row * height,
                    "url('./assets/imgs/items/flag.png')",
                    ''
                );
                flags.fRow = row;
                flags.fCol = col;
                flags.id = row + ',' + col;
                flags.className = 'flags';
            }
            if (arr[row][col] == 4) {
                oCase = createUnit(
                    map,
                    width,
                    height,
                    'absolute',
                    col * width,
                    row * height,
                    "url('./assets/imgs/items/chest.png')",
                    '',
                    ''
                );
                oCase.id = row + ',' + col;
                oCase.cRow = row;
                oCase.cCol = col;
                oCase.className = 'chest';
            }
        }
    }
}
