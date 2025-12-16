// ボタンを押す
const loadBtn = document.querySelector('.loadBtn');
const weather = document.querySelector('#weather');
loadBtn.addEventListener('click', function () {
    weather.textContent = '読み込み中…';
    fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            // 今日の天気情報
            const today = json[0].timeSeries[0].areas[0];

            // 天気（晴れ/くもり/雨 など）
            const weatherText = today.weathers[0];

            // 気温データ
            const temps = json[0].timeSeries[2].areas[0];
            const maxTemp = temps.temps[1]; // 最高気温
            const minTemp = temps.temps[0]; // 最低気温

            // 降水確率
            const pops = json[0].timeSeries[1].areas[0].pops;
            const popMorning = pops[0];
            const popAfternoon = pops[1];

            // HTMLに表示
            weather.innerHTML = `<h2>今日の天気（愛知県西部）</h2>
      <p>天気：${weatherText}</p>
      <p>最高気温：${maxTemp}℃</p>
      <p>最低気温：${minTemp}℃</p>
      <p>降水確率（午前）：${popMorning}%</p>
      <p>降水確率（午後）：${popAfternoon}%</p>
    `;
        })
        .catch(function (error) {
            console.log(error);
        });
});