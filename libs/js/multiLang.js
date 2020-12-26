/*
 *
 *   To adapt more languages, you should modify this file.
 *   Now support 0.English & 1.Chinese Simplified & 2.Chinese Traditional
 *   3.Japanese & 4.Russian & 5.German & 6.French
 *
 */

var langID = 0; // 默认为 English
var langList, theLang, lang;

function getLang(s) {
    lang = [
        [
            'You have passed this level!',
            'Replay',
            'Next',
            'Game Rule: Push all the chests to the flags. Use the arrow keys which on your keyboard to control the role.',
            '[Q] Replay',
            'Level 1',
            'Level 2',
            'Level 3',
            'Level 4',
            '[K] Cheat2',
            '[F] Flash Switch',
            '[R] Change Role',
            'GAME OVER',
            'Congratulations!!!!!!!!!!<br><br><br>Click any position to close this window.',
            'Level ',
            'Push Chest | Version 0.3.5-alpha',
        ],
        [
            '你通过这关了!',
            '重玩',
            '下一关',
            '游戏规则：将所有箱子推到终点（旗子）即获胜。使用键盘上的方向键操控人物。',
            '[Q] 重玩',
            '关卡 1',
            '关卡 2',
            '关卡 3',
            '关卡 4',
            '[K] 挂②',
            '[F] 阴阳切换',
            '[R] 更换角色',
            '游  戏  结  束',
            '恭喜通关!!!!!!!!!!<br><br><br>点击任意位置关闭本窗口',
            '关卡 ',
            '伞兵推箱子 | 版本 0.3.5-阿尔法',
        ],
        [
            '你通過這關了!',
            '重玩',
            '下一關',
            '遊戲規則：將所有箱子推到終點（旗子）即獲勝。使用鍵盤上的方向鍵操控人物。',
            '[Q] 重玩',
            '關卡 1',
            '關卡 2',
            '關卡 3',
            '關卡 4',
            '[K] 掛②',
            '[F] 陰陽切換',
            '[R] 更換角色',
            '遊 戲 結 束',
            '恭喜通關!!!!!!!!!!<br><br><br>點擊任意位置關閉本窗口',
            '關卡 ',
            '傘兵推箱子 | 版本 0.3.5-阿爾法',
        ],
        [
            'あなたはこのレベルを通過しました！',
            '再びプレー',
            '次のレベル',
            'ゲームルール：勝つためにすべてのボックスを最後（フラグ）まで押します。 キーボードの矢印キーを使用して文字を操作します。 ',
            '[Q] リプレイ',
            'レベル 1',
            'レベル 2',
            'レベル 3',
            'レベル 4',
            '[K] ハング②',
            '[F] 陰と陽の切り替え',
            '[R] 役割の変更',
            'ゲームオーバー',
            'おめでとうございます!!!!!!!!!! <br><br><br>任意の位置をクリックして、このウィンドウを閉じます。',
            'レベル ',
            'パラトルーパーソコバン | バージョン 0.3.5-アルファ',
        ],
        [
            'Вы прошли этот уровень!',
            'Воспроизвести',
            'Следующий',
            'Правило игры: подталкивайте все сундуки к флажкам. Используйте клавиши со стрелками на клавиатуре для управления ролью. ',
            '[Q] Replay',
            'уровень 1',
            'Уровень 2',
            'Уровень 3',
            'Уровень 4',
            '[K] Cheat2',
            '[F] Переключатель вспышки',
            '[R] Изменить роль',
            'ИГРА ЗАВЕРШЕНА',
            'Поздравляем !!!!!!!!!! <br><br><br>Щелкните в любом месте, чтобы закрыть это окно.',
            'Уровень ',
            'Толкать сундук | Версия 0.3.5-alpha ',
        ],
        [
            'Du hast dieses Level bestanden!',
            'Wiederholung',
            'Nächster',
            'Spielregel: Schieben Sie alle Truhen an die Flaggen. Verwenden Sie die Pfeiltasten auf Ihrer Tastatur, um die Rolle zu steuern.',
            '[Q] Wiederholung',
            'Stufe 1',
            'Stufe 2',
            'Stufe 3',
            'Stufe 4',
            '[K] Betrügen2',
            '[F] Blitzschalter',
            '[R] Rolle wechseln',
            'SPIEL IST AUS',
            'Herzlichen Glückwunsch !!!!!!!!!! <br><br><br>Klicken Sie auf eine beliebige Position, um dieses Fenster zu schließen.',
            'Niveau ',
            'Brust drücken | Version 0.3.5-alpha ',
        ],
        [
            'Vous avez passé ce niveau!',
            'Rejouer',
            'Prochain',
            'Règle du jeu: poussez tous les coffres vers les drapeaux. Utilisez les touches fléchées de votre clavier pour contrôler le rôle.',
            '[Q] Rejouer',
            'Niveau 1',
            'Niveau 2',
            'Niveau 3',
            'Niveau 4',
            '[K] Tricher2',
            '[F] Commutateur Flash',
            '[R] Changer de rôle',
            'JEU TERMINÉ',
            "Félicitations !!!!!!!!!! <br><br><br>Cliquez sur n'importe quelle position pour fermer cette fenêtre.",
            'Niveau ',
            'Pousser la poitrine | Version 0.3.5-alpha',
        ],
    ];
    if (s == 'cao') return lang;
    else return lang[s];
}

function switchLang(s) {
    playSoundEffect();
    if (s == true) langID + 1 > getLang('cao').length - 1 ? (langID = 0) : ++langID;

    theLang = document.getElementsByClassName('lang');
    lang = getLang(langID);
    document.title = lang[lang.length - 1];

    document.getElementById('status').innerHTML = lang[lang.length - 2] + (level + 1);

    for (let i = 0; i < theLang.length; i++) {
        theLang[i].innerHTML = lang[i];
    }
}

var langSelector = document.getElementById('select2');
langSelector.onclick = function () {
    langID = langSelector.selectedIndex;
    switchLang();
};
langSelector.onkeydown = function () {
    return false;
};
