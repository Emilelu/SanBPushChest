/*
 *
 *   Module: EasterEgg
 *      Just to change the role...
 *
 */

var count = 0;
document.getElementById('cr').onclick = easterEgg;

function easterEgg() {
    playSoundEffect();
    ++count;
    if (count > 10)
        document.getElementById('status').innerHTML = 'Level ' + +(level + 1) + ' ...? ' + count;
    if (count == 20) {
        this.className = 'lang';
        this.onclick = changeRole;
        document.getElementById('flow').style.display = 'block';
        document.getElementById('oh').innerHTML = '宁竟然如此地锲而不舍，那👴⑨⑧这功能开了⑧';
        setTimeout(() => {
            document.getElementById('flow').style.display = 'none';
        }, 1000);
    }
}

function changeRole() {
    playSoundEffect();
    roleImgs.push(roleImgs[0]);
    roleImgs.shift();
    role.style.backgroundImage = roleImgs[0];
}
