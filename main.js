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
    // const allSurahsNames = await fetch('http://api.alquran.cloud/v1/quran/en.asad');
    // const allSurahsNamesJson = await allSurahsNames.json();
    // const surahs = await allSurahsNamesJson.data.surahs;
    surahsArray.forEach((e, index) => {
        var li = document.createElement("li");
        li.innerHTML = e;
        li.setAttribute("id", "surah_" + (index + 1));
        document.querySelector('#list_suras').appendChild(li);
    });
    document.querySelector('.overlay-player').style.display = 'none';
}
getAllSurahsNames();


const getSurasByReceiter = async (param) => {

    const getReceiter = async () => {

        document.querySelector('.overlay-player').style.display = 'block';
        const recitersdata = await fetch('https://mp3quran.net/api/_english.php');
        const recitersJson = await recitersdata.json();
        const receitersArray = recitersJson.reciters;

        let reciter;
        receitersArray.forEach(e => {
            if (e.id === param.toString()) {
                reciter = e;
            }
        });


        document.querySelector('.overlay-player').style.display = 'none';
        return reciter;
    }
    const receiter = await getReceiter();

    for (let i = 1; i < 115; i++) {
        document.querySelector('#surah_' + i).setAttribute("onclick", `readSurah('${receiter.Server}/${lpad(i, 3)}.mp3')`);
    }
}

const lpad = (value, padding) => {
    var zeroes = new Array(padding + 1).join("0");
    return (zeroes + value).slice(-padding);
};

const readSurah = (url) => {
    console.log(url)
    document.querySelector('audio source').src = url;

    document.querySelector('audio').load();
    document.querySelector('audio').play();
}