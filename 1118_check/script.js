const school = ('トライデントコンピュータ専門学校');
const course = ('Webデザイン学科');
console.log(school + course);

const catImg = document.querySelector('.img_cat');
console.log(catImg.alt);


goranger = ['アカレンジャー', 'アオレンジャー', 'ミドレンジャー', 'キレンジャー', 'モモレンジャー']
console.log(goranger[4]);
for (let i = 0; i < goranger.length; i++) {
    console.log(goranger[i]);
}


document.addEventListener('click', function () {
    const text = document.querySelector('span');
    console.log(text.textContent);
    text.style.color = 'red';
    text.style.fontWeight = 'bold';

});

const btn = dosument.querySelectorall('menu');