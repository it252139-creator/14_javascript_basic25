//1.オブジェクトで色を用意
//3.4色制作して、配列にする
const settingColors = [
    { r: 255, g: 0, b: 0 }, //赤
    { r: 0, g: 255, b: 0 }, //緑
    { r: 0, g: 0, b: 255 }, //青
    { r: 255, g: 255, b: 0 }, //黄
];

//5.documentの縦の長さ取得
const fullHeight = document.documentElement.scrollHeight;
console.log(fullHeight); //2400(単には書いてないけどpx)

// 画面に見えている高さ（ブラウザの表示部分）
const viewHeight = document.documentElement.clientHeight;
//8.スクロール量を計算
const scrollable = fullHeight - viewHeight;

// //2.オブジェクトの色をbodyの背景色にする
const bodyElm = document.body;

//const bodyElm = document.querySelector('body');
console.log(bodyElm);
document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';

//10.関数の定義 仮引数num
function colorChange(num) {
    //関数の処理を書きます
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[num].r +
        ',' +
        settingColors[num].g +
        ',' +
        settingColors[num].b +
        ')';
}




//4.スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('スクローーーーる');
    //現在のスクロール位置
    const scroolY = window.scrollY;
    console.log(scroolY);
    //6.1/4進んだら色が変わるようにする
    //7.スクロールを4分割
    //9.変数scrollableを4分割
    if (scroolY < (scrollable * 1) / 4) {
        colorChange(0);
        // document.body.style.backgroundColor =
        //     'rgb(' +
        //     settingColors[0].r +
        //     ',' +
        //     settingColors[0].g +
        //     ',' +
        //     settingColors[0].b +
        //     ')';
    } else if (scroolY < (scrollable * 1) / 2) {
        colorChange(1);
        // document.body.style.backgroundColor =
        //     'rgb(' +
        //     settingColors[1].r +
        //     ',' +
        //     settingColors[1].g +
        //     ',' +
        //     settingColors[1].b +
        //     ')';
    } else if (scroolY < (scrollable * 3) / 4) {
        colorChange(2);
        // document.body.style.backgroundColor =
        //     'rgb(' +
        //     settingColors[2].r +
        //     ',' +
        //     settingColors[2].g +
        //     ',' +
        //     settingColors[2].b +
        //     ')';
    } else {
        //関数() = 関数の呼び出し
        colorChange(3);
    }
});

window.addEventListener('scroll', function () {
    const button = document.querySelector('.moveTotop');
    if (window.scrollY >= 1200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

const button = document.querySelector('.moveTotop');
button.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//11.関数の呼び出し（実行）の実引数