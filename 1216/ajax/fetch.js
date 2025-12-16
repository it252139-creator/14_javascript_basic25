//htmlから表示する要素を取得
const result = document.querySelector('.resultFetch');

//関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (response) {
            //json()を実行すると、json形式のデータをjavascriptのオブジェクトに変換してくれる
            //1つ目の.then()の返り値が次の.then()の引数になる
            return response.json();
        })
        .then(function (json) {
            //console.log(json);
            //バックティックでテンプレートリテラル
            result.innerHTML = `<p>${json.news}</p>`; //json.news;
        })
        .catch(function (error) {
            //エラー処理
            console.log(error);
        })
};
//実行
loadNews();

//ボタンをクリックしたときのイベント
const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    //読み込み直し
    loadNews();
});