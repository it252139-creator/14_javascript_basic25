//関数式化（天気予報を読み込む関数）
// const loadWeather = function () {
//     const result = document.querySelector('.box');
//     // 読み込み中は「読み込み中…」を表示
//     result.innerHTML = '読み込み中…';

//     // fetchでAPIにアクセス
//     //エンドポイント
//     fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
//         .then(function (response) {
//             //取得したJSONをオブジェクトに変換するメソッド.json()
//             // JSONを解析
//             return response.json();
//         })
//         .then(function (json) {
//             // document.body.textContent = JSON.stringify(json);
//             // 天気：晴れ
//             // 最高気温：12℃
//             // 最低気温：12℃
//             // 降水確率（午前）：0%
//             // 降水確率（午後）：0%
//             console.log(json[0].timeSeries[0].areas[0].weathers[0]); //天気_晴れ
//             console.log(json[0].timeSeries[2].areas[0].temps[0]); //最高気温_12
//             console.log(json[0].timeSeries[2].areas[0].temps[1]); //最低気温_12
//             console.log(json[0].timeSeries[1].areas[0].pops[0]); //降水確率（午前）_0
//             console.log(json[0].timeSeries[1].areas[0].pops[1]); //降水確率（午後）_0

//             // 必要な情報だけ取り出す
//             // 変数に代入
//             const weather = json[0].timeSeries[0].areas[0].weathers[0];
//             const maxTemp = json[0].timeSeries[2].areas[0].temps[0];
//             const minTemp = json[0].timeSeries[2].areas[0].temps[1];
//             const popAm = json[0].timeSeries[1].areas[0].pops[0];
//             const popPm = json[0].timeSeries[1].areas[0].pops[1];

//             // HTMLに表示する
//             result.innerHTML = `
//     <ul>
//       <li>天気：${weather}</li>
//       <li>最高気温：${maxTemp}℃</li>
//       <li>最低気温：${minTemp}℃</li>
//       <li>降水確率（午前）：${popAm}%</li>
//       <li>降水確率（午後）：${popPm}%</li>
//     </ul>
//     `;
//         })
//         .catch(function (error) {
//             console.log('エラーが発生しました', error);
//         });
// };


//変数 = functionの書き方は、式という
//async式
const loadWeather = async function () {
    const result = document.querySelector('.box');
    // 読み込み中は「読み込み中…」を表示
    result.innerHTML = '読み込み中…';

    try {
        // awaitでAPIにアクセス
        const response = await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json');
        const json = await response.json();
        // 必要な情報だけ取り出す
        // 変数に代入
        const weather = json[0].timeSeries[0].areas[0].weathers[0];
        const maxTemp = json[0].timeSeries[2].areas[0].temps[0];
        const minTemp = json[0].timeSeries[2].areas[0].temps[1];
        const popAm = json[0].timeSeries[1].areas[0].pops[0];
        const popPm = json[0].timeSeries[1].areas[0].pops[1];

        // HTMLに表示する
        result.innerHTML = `
    <ul>
      <li>天気：${weather}</li>
      <li>最高気温：${maxTemp}℃</li>
      <li>最低気温：${minTemp}℃</li>
      <li>降水確率（午前）：${popAm}%</li>
      <li>降水確率（午後）：${popPm}%</li>
    </ul>
    `;

    } catch (error) {
        console.log('エラーが発生しました', error);
    }
};


// ボタンを押す
const button = document.querySelector('.loadBtn');
button.addEventListener('click', function () {
    console.log('ボタン押したよ');
    //関数を実行
    loadWeather();
});

// async/awaitで書き直す