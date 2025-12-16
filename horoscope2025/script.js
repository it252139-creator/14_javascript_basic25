// 12星座の基本データ（名前と画像）
const horoscopeBase = [
    { name: '牡羊座', image: './images/seiza1-1.png' },
    { name: '牡牛座', image: './images/seiza1-2.png' },
    { name: '双子座', image: './images/seiza1-3.png' },
    { name: '蟹座', image: './images/seiza1-4.png' },
    { name: '獅子座', image: './images/seiza1-5.png' },
    { name: '乙女座', image: './images/seiza1-6.png' },
    { name: '天秤座', image: './images/seiza1-7.png' },
    { name: '蠍座', image: './images/seiza1-8.png' },
    { name: '射手座', image: './images/seiza1-9.png' },
    { name: '山羊座', image: './images/seiza1-10.png' },
    { name: '水瓶座', image: './images/seiza1-11.png' },
    { name: '魚座', image: './images/seiza1-12.png' }
];

// ランダムに割り当てる占い内容のリスト
const fortunes = [
    "12月は新しい挑戦が運気アップのカギ。直感で動くとうまくいきやすく、仕事も恋もチャンスが増えそうです。",
    "安定した運気が続く12月。地道な努力が実を結び、周囲からの信頼も厚くなります。恋愛では誠実さがポイントに。",
    "コミュニケーション運が絶好調の12月。新しい出会いや情報交換が吉。恋愛面ではフレンドリーな態度が魅力的に映ります。",
    "感受性が高まる12月。家族や親しい人との絆を深めるチャンスです。恋愛では思いやりの心が大切になります。",
    "リーダーシップが光る12月。周囲を引っ張る力が強まり、仕事での成功が期待できます。恋愛では自信を持ってアプローチを。",
    "細かいところに気を配ることで運気アップの12月。 整理整頓や計画的な行動が吉。恋愛では相手の気持ちを尊重することが鍵に。",
    "バランス感覚が冴える12月。人間関係が円滑になり、協力し合うことで大きな成果が得られます。恋愛では調和を大切に。",
    "情熱が高まる12月。目標に向かって突き進むことで、周囲からの評価も上がります。恋愛では積極的なアプローチが効果的。",
    "冒険心が旺盛になる12月。新しいことに挑戦することで運気が上昇します。恋愛では自由な発想で楽しむことがポイントに。",
    "責任感が強まる12月。地道な努力が実を結び、信頼を得ることができます。恋愛では誠実な態度が好印象を与えます。",
    "独創的なアイデアが浮かぶ12月。新しい発想で周囲を驚かせることができそうです。恋愛では個性的な魅力が輝きます。",
    "感性が豊かになる12月。芸術や音楽に触れることで心が満たされ、運気もアップします。恋愛ではロマンチックな雰囲気が吉。",
];

const luckyItems = [
    "キーホルダー",
    "お気に入りのマグカップ",
    "スマートフォン",
    "写真立て",
    "ミラー（鏡）",
    "手帳",
    "アクセサリー",
    "香水",
    "スニーカー",
    "腕時計",
    "イヤホン",
    "ハンカチ"
];
const luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// 配列をシャッフルする関数
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// 占い内容をシャッフル
const shuffledFortunes = shuffle([...fortunes]);
const shuffledLuckyNumbers = shuffle([...luckyNumbers]);
const shuffledLuckyItems = shuffle([...luckyItems]);

// 星座データとシャッフルした占い内容を結合
//horoscopeBase の 1個目の星座にシャッフル後の fortunes の1個目,ラッキーナンバーの1個目,ラッキーアイテムの1個目を割り当てている。
const horoscopes = horoscopeBase.map((horoscope, index) => ({
    ...horoscope,
    fortune: shuffledFortunes[index],
    luckyNumber: shuffledLuckyNumbers[index],
    luckyItem: shuffledLuckyItems[index]
}));

// 結果表示用の要素を取得
const resultDiv = document.querySelector('#result');

// 占い結果を表示する関数
//	index 番目の星座データを取得
//	画像・名前・占い文・アイテムなどを HTML に入れる
// .show クラスを付けてアニメーションや表示切替を実行（CSS 側で設定している想定）
const showFortune = (index) => {
    const selectedHoroscope = horoscopes[index];
    resultDiv.innerHTML = `
                <img src="${selectedHoroscope.image}" alt="${selectedHoroscope.name}の画像">
                <h2>${selectedHoroscope.name}</h2>
                <p>${selectedHoroscope.fortune}</p>
                <p><strong>ラッキーナンバー:</strong> ${selectedHoroscope.luckyNumber}</p>
                <p><strong>ラッキーアイテム:</strong> ${selectedHoroscope.luckyItem}</p>
            `;
    resultDiv.classList.add('show');
};

// HTMLに記述された星座の要素を取得し、それぞれにクリックイベントを設定
const horoscopeItems = document.querySelectorAll('.horoscope-item');
//forEach は、「全部に同じ命令をまとめて設定する」ための命令。
horoscopeItems.forEach(item => {
    item.addEventListener('click', () => {
        const index = item.dataset.index;
        resultDiv.classList.remove('show');
        setTimeout(() => showFortune(index), 10);
    });
});