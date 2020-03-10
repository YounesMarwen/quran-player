const surahsArray = [
    'سُورَةُ ٱلْفَاتِحَةِ',
    'سورة البقرة',
    'سورة آل عمران',
    'سورة النساء',
    'سورة المائدة',
    'سورة الأنعام',
    'سورة الأعراف',
    'سورة الأنفال',
    'سورة التوبة',
    'سورة يونس',
    'سورة هود',
    'سورة يوسف',
    'سورة الرعد',
    'سورة ابراهيم',
    'سورة الحجر',
    'سورة النحل',
    'سورة الإسراء',
    'سورة الكهف',
    'سورة مريم',
    'سورة طه',
    'سورة الأنبياء',
    'سورة الحج',
    'سورة المؤمنون',
    'سورة النور',
    'سورة الفرقان',
    'سورة الشعراء',
    'سورة النمل',
    'سورة القصص',
    'سورة العنكبوت',
    'سورة الروم',
    'سورة لقمان',
    'سورة السجدة',
    'سورة الأحزاب',
    'سورة سَبَأ',
    'سورة فاطر',
    'سورة يس',
    'سورة الصافات',
    'سورة ص',
    'سورة الزمر',
    'سورة غافر',
    'سورة فصلت',
    'سورة الشورى',
    'سورة الزخرف',
    'سورة الدخان',
    'سورة الجاثية',
    'سورة الأحقاف',
    'سورة محمد',
    'سورة الفتح',
    'سورة الحجرات',
    'سورة ق',
    'سورة الذاريات',
    'سورة الطور',
    'سورة النجم',
    'سورة القمر',
    'سورة الرحمن',
    'سورة الواقعة',
    'سورة الحديد',
    'سورة المجادلة',
    'سورة الحشر',
    'سورة الممتحنة',
    'سورة الصف',
    'سورة الجمعة',
    'سورة المنافقون',
    'سورة التغابن',
    'سورة الطلاق',
    'سورة التحريم',
    'سورة الملك',
    'سورة القلم',
    'سورة الحاقة',
    'سورة المعارج',
    'سورة نوح',
    'سورة الجن',
    'سورة المزمل',
    'سورة المدثر',
    'سورة القيامة',
    'سورة الانسان',
    'سورة المرسلات',
    'سورة النبأ',
    'سورة النازعات',
    'سورة عبس',
    'سورة التكوير',
    'سورة الإنفطار',
    'سورة المطففين',
    'سورة الإنشقاق',
    'سورة البروج',
    'سورة الطارق',
    'سورة الأعلى',
    'سورة الغاشية',
    'سورة الفجر',
    'سورة البلد',
    'سورة الشمس',
    'سورة الليل',
    'سورة الضحى',
    'سورة الشرح',
    'سورة التين',
    'سورة العلق',
    'سورة القدر',
    'سورة البينة',
    'سورة الزلزلة',
    'سورة العاديات',
    'سورة القارعة',
    'سورة التكاثر',
    'سورة العصر',
    'سورة الهمزة',
    'سورة الفيل',
    'سورة قريش',
    'سورة الماعون',
    'سورة الكوثر',
    'سورة الكافرون',
    'سورة النصر',
    'سورة المسد',
    'سورة الإخلاص',
    'سورة الفلق',
    'سورة الناس',
];

const getAllSurahsNames = async () => {
    surahsArray.forEach((e, index) => {
        var div = document.createElement("div");
        div.innerHTML = `<span>${index + 1} - ${e}</span>`;
        div.setAttribute("id", "surah_" + (index + 1));
        document.querySelector('#list_surahs').appendChild(div);
    });
    document.querySelector('.overlay-player').style.display = 'none';
}

const getSurasByReceiter = async (el, param) => {

    document.querySelector('.overlay-player').style.display = 'flex';
    const getReceiter = async () => {
        const recitersdata = await fetch('https://mp3quran.net/api/_english.php');
        const recitersJson = await recitersdata.json();
        const receitersArray = recitersJson.reciters;

        let reciter;
        receitersArray.forEach(e => {
            if (e.id === param.toString()) {
                reciter = e;
            }
        });
        return reciter;
    }
    const receiter = await getReceiter();

    for (let i = 1; i < 115; i++) {
        if (i === 1) {
            document.querySelector('audio source').src = `${receiter.Server}/${lpad(i, 3)}.mp3`;
            document.querySelector('audio').load();
            document.querySelector('#surah_' + i + ' span').classList.add('selected');
        }
        document.querySelector('#surah_' + i + ' span').setAttribute("onclick", `readSurah(this ,'${receiter.Server}/${lpad(i, 3)}.mp3')`);
    }
    let elemsReceiters = document.querySelectorAll('.single-receiter-container span');
    elemsReceiters.forEach(el => {
        el.classList.remove('selected');
    });
    el.classList.add('selected');

    document.querySelector('.overlay-player').style.display = 'none';
    document.querySelector('.playlist-surahs-overlay').style.display = 'none';
}

const lpad = (value, padding) => {
    var zeroes = new Array(padding + 1).join("0");
    return (zeroes + value).slice(-padding);
};

const readSurah = (el, url) => {
    document.querySelector(".surahs-list div span.selected").classList.remove('selected');
    el.classList.add('selected');
    document.querySelector('audio source').src = url;
    document.querySelector('audio').load();
    document.querySelector('audio').play();
}

const appendPlayerContent = () => {

    const html = `<div class="overlay-player">
<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px"
    viewBox="0 0 128 128" xml:space="preserve">
    <g transform="rotate(0)">
        <path fill="#afafaf"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z" />
        <path fill="#000000"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z"
            transform="rotate(45 64 64)" />
        <path fill="#000000"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z"
            transform="rotate(90 64 64)" />
        <path fill="#000000"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z"
            transform="rotate(135 64 64)" />
        <path fill="#000000"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z"
            transform="rotate(180 64 64)" />
        <path fill="#000000"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z"
            transform="rotate(225 64 64)" />
        <path fill="#000000"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z"
            transform="rotate(270 64 64)" />
        <path fill="#000000"
            d="M64.33.25a16 16 0 0 1 16 16c0 4.46-4.93 11.74-9.1 14.62-5.28 3.62-6.56 17.7-6.56 17.7s-.9-13.92-7.24-18.03c-5.4-3.5-9.1-9.8-9.1-14.3a16 16 0 0 1 16-16z"
            transform="rotate(315 64 64)" />
        <animateTransform attributeName="transform" type="rotate"
            values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64"
            calcMode="discrete" dur="720ms" repeatCount="indefinite" />
    </g>
</svg>
</div>
<h1>Quran player</h1>
<div class="receiters-list">
<h3 align="center">Receiters</h3>
<div>
    <div class="single-receiter-container" style="border-right: solid 1px white;"><span
            class="first-receiter" onclick="getSurasByReceiter(this, 49)">Abdelbari
            Al-Toubayti</span>
    </div>
    <div class="single-receiter-container" style="border-right: solid 1px white;"><span
            class="second-receiter" onclick="getSurasByReceiter(this, 55)">Abdul Aziz Al-Ahmad</span>
    </div>
    <div class="single-receiter-container" style="border-right: solid 1px white;"><span
            class="third-receiter" onclick="getSurasByReceiter(this, 53)">Abdulbasit
            Abdulsamad</span>
    </div>
    <div class="single-receiter-container"><span class="fourth-receiter"
            onclick="getSurasByReceiter(this, 62)">Abdullah Al-Johany</span>
    </div>
</div>
</div>
<div class="playlist-container">

<div class="playlist-surahs">
    <div class="playlist-surahs-overlay"><span>PLEASE SELECT A RECEITER</span></div>
    <h3 align="center">Surahs</h3>
    <div id="list_surahs" class="surahs-list"></div>
</div>
<div class="player-container">
    <audio controls>
        <source src="" type="audio/mpeg">
    </audio>
</div>
</div>`;
    document.querySelector('.quran-player-container').innerHTML = html;

}

const init = () => {
    appendPlayerContent();
    getAllSurahsNames();
    let el = document.querySelector('.first-receiter')
    getSurasByReceiter(el, 49);

}
init();

