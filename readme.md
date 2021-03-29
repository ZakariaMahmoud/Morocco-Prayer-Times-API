# Morocco Prayer Times -API

🇲🇦 **Morocco Prayer Times API ( From the Ministry of Endowments and Islamic Affairs in Morocco habous.gov.ma)** 🇲🇦
## Install

```bash=
npm install

node app.js
```

## How to use ? 

- **Every city has an ID number** 



| ID | Name  | الإسم |
| -------- | -------- | -------- |
| 1 | Figuig | فكيك |
| 2 | Oujda | وجدة |
| 3 | Bouarfa | بوعرفة |
| 4 | Jerada | جرادة |
| 5 | Berkane | بركان |
| 6 | Aïn Chaïr | عين الشعير |
| 7 | Taourirt | تاوريرت |
| 8 | Nador | الناظور |
| 9 | Melilla | مليلية |
| 10 | Bouanane | بوعنان |
| 11 | Guercif | كرسيف |
| 12 | Boutagit | بوتاجيت |
| 13 | Tandit | تانديت |
| 14 | Aknol | أكنول |
| 15 | Al Hoceima | الحسيمة |
| 16 | Missour | ميسور |
| 17 | Taza | تازة |
| 18 | Bourd | بورد |
| 19 | Erfoud | أرفود |
| 20 | Rissani | الريصاني |
| 21 | Oued Amlil | واد إمليل |
| 22 | Tahla | تاهلة |
| 23 | Erachidia | الراشيدية |
| 24 | Er-Rich | الريش |
| 25 | El Menzel Beni Yazgha | المنزل بني يازغة |
| 26 | Taounate | تاونات |
| 27 | Tissa | تيسة |
| 28 | Boulemane | بولمان |
| 29 | Midelt | ميدلت |
| 30 | Sefrou | صفرو |
| 31 | Goulmima | كلميمة |
| 32 | Fes | فاس |
| 33 | Imouzzer kandar | إموزار كندر |
| 34 | Tinejdad | تنجداد |
| 35 | Ifrane | إفران |
| 36 | Moulay Yacoub | مولاي يعقوب |
| 37 | Azrou | أزرو |
| 38 | Chefchaouen | شفشاون |
| 39 | Sebta | سبتة |
| 40 | Tetouan | تطوان |
| 41 | El Hajeb | الحاجب |
| 42 | Moulay Driss Zerhoun | مولاي دريس زرهون |
| 43 | Meknes | مكناس |
| 44 | Ouezzane | وزان |
| 45 | Khenifra | خنيفرة |
| 46 | Sidi Kacem | سيدي قاسم |
| 47 | Tizi Ouasli | تيزي وسلي |
| 48 | Tanger | طنجة |
| 49 | Zagora | زاكورة |
| 50 | Ksar El Kebir | القصر الكبير |
| 51 | Arbaoua | عرباوة |
| 52 | Sidi Slimane | سيدي سليمان |
| 53 | Souk El Arbaa Gharb | سوق أربعاء الغرب |
| 54 | Assilah | أصيلا |
| 55 | Khemisset | الخميسات |
| 56 | Kelaat Magouna | قلعة مكونة |
| 57 | Larache | العرائش |
| 58 | Moulay Bouazza | مولاي بوعزة |
| 59 | Kasba Tadla | قصبة تادلة |
| 60 | Sidi Yahya El Gharb | سيدي يحيى الغرب |
| 61 | Tifelt | تيفلت |
| 62 | Beni Mellal | بني ملال |
| 63 | Meskoura | مسكورة |
| 64 | Oued Zem | واد زم |
| 65 | Azilal | أزيلال |
| 66 | Fquih Ben Salah | فقيه بن صالح |
| 67 | Kenitra | قنيطرة |
| 68 | Rommani | الرماني |
| 69 | Rabat-Salé | الرباط سلا |
| 70 | Khouribga | خريبكة |
| 71 | Ouarzazate | ورزازات |
| 72 | Demnate | دمنات |
| 73 | Benslimane | بن سليمان |
| 74 | Bouznika | بوزنيقة |
| 75 | El Gara | الكارة |
| 76 | Mohammedia | المحمدية |
| 77 | Kelaat Sraghna | قلعة السراغنة |
| 78 | Berrchid | برشيد |
| 79 | Settat | سطات |
| 80 | Casablanca | الدار البيضاء |
| 81 | Taliouine | تاليوين |
| 82 | Benguerir | بنكرير |
| 83 | Tata | طاطا |
| 84 | Marrakech | مراكش |
| 85 | Akka | أقا |
| 86 | Azemmour | أزمور |
| 87 | Aghram | أغرام |
| 88 | El Jadida | الجديدة |
| 89 | Youssoufia | اليوسفية |
| 90 | Taroudant | تارودانت |
| 91 | Tafraout | تافراوت |
| 92 | Safi | أسفي |
| 93 | Zag | الزاك |
| 94 | Assa | أسا |
| 95 | Agadir | أكادير |
| 96 | Tiznit | تيزنيت |
| 97 | Essaouira | الصويرة |
| 98 | Guelmim | كلميم |
| 99 | Sidi Ifni | سيدي إفني |
| 100 | Tan-Tan | طانطان |
| 101 | Smara | سمارة |
| 102 | Tarfaya | طرفاية |
| 103 | Laayoun | العيون |
| 104 | Boujdour | بوجدور |
| 105 | Dakhla | الداخلة |
| 106 | Lagouira | الكويرة |
| 107 | Alnif | النيف |
| 108 | Bejaad | أبي جعد |
| 109 | Aousserd | أوسرد |
| 110 | Tinghir | تنغير |
| 111 | Chtouka Ait Baha | أشتوكة أيت باها |
| 112 | Fnideq | الفنيدق |
| 113 | Skhour Rehamna | صخور الرحامنة |
| 114 | Sidi Ifni | سيدي إفني |
| 115 | Ouezzane | وزان |

### For get today's prayer times for  Rabat 
 :information_source: **ID number of Rabat city is 69**
- Go to https://www.prayertimes.mahmoud.ma/api/69/today

return : 
```json=
{
   "fajr":"05:50",
   "sunrise":"07:17",
   "dohr":"13:37",
   "asr":"17:04",
   "maghreb":"19:49",
   "ichaa":"21:05"
}
```
### For get prayer times of Rabat for the month 3 of the year 2021
:information_source: **ID number of Rabat city is 69**
- Go to https://www.prayertimes.mahmoud.ma/api/69/2021/3

return
```json=
{
   "1":{
      "fajr":"06:28",
      "sunrise":"07:53",
      "dohr":"13:45",
      "asr":"16:55",
      "maghreb":"19:28",
      "ichaa":"20:42"
   },
   "2":{
      "fajr":"06:26",
      "sunrise":"07:52",
      "dohr":"13:44",
      "asr":"16:56",
      "maghreb":"19:29",
      "ichaa":"20:43"
   },
   "3":{
      "fajr":"06:25",
      "sunrise":"07:51",
      "dohr":"13:44",
      "asr":"16:56",
      "maghreb":"19:29",
      "ichaa":"20:44"
   },
   "4":{
      "fajr":"06:24",
      "sunrise":"07:49",
      "dohr":"13:44",
      "asr":"16:57",
      "maghreb":"19:30",
      "ichaa":"20:45"
   },
   "5":{
      "fajr":"06:23",
      "sunrise":"07:48",
      "dohr":"13:44",
      "asr":"16:57",
      "maghreb":"19:31",
      "ichaa":"20:45"
   },
   "6":{
      "fajr":"06:21",
      "sunrise":"07:47",
      "dohr":"13:44",
      "asr":"16:57",
      "maghreb":"19:32",
      "ichaa":"20:46"
   },
   "7":{
      "fajr":"06:20",
      "sunrise":"07:45",
      "dohr":"13:43",
      "asr":"16:58",
      "maghreb":"19:33",
      "ichaa":"20:47"
   },
   "8":{
      "fajr":"06:19",
      "sunrise":"07:44",
      "dohr":"13:43",
      "asr":"16:58",
      "maghreb":"19:34",
      "ichaa":"20:48"
   },
   "9":{
      "fajr":"06:17",
      "sunrise":"07:43",
      "dohr":"13:43",
      "asr":"16:59",
      "maghreb":"19:34",
      "ichaa":"20:49"
   },
   "10":{
      "fajr":"06:16",
      "sunrise":"07:41",
      "dohr":"13:43",
      "asr":"16:59",
      "maghreb":"19:35",
      "ichaa":"20:50"
   },
   "11":{
      "fajr":"06:15",
      "sunrise":"07:40",
      "dohr":"13:42",
      "asr":"16:59",
      "maghreb":"19:36",
      "ichaa":"20:50"
   },
   "12":{
      "fajr":"06:13",
      "sunrise":"07:39",
      "dohr":"13:42",
      "asr":"17:00",
      "maghreb":"19:37",
      "ichaa":"20:51"
   },
   "13":{
      "fajr":"06:12",
      "sunrise":"07:38",
      "dohr":"13:42",
      "asr":"17:00",
      "maghreb":"19:38",
      "ichaa":"20:52"
   },
   "14":{
      "fajr":"06:11",
      "sunrise":"07:36",
      "dohr":"13:42",
      "asr":"17:00",
      "maghreb":"19:38",
      "ichaa":"20:53"
   },
   "15":{
      "fajr":"06:09",
      "sunrise":"07:35",
      "dohr":"13:41",
      "asr":"17:01",
      "maghreb":"19:39",
      "ichaa":"20:54"
   },
   "16":{
      "fajr":"06:08",
      "sunrise":"07:33",
      "dohr":"13:41",
      "asr":"17:01",
      "maghreb":"19:40",
      "ichaa":"20:54"
   },
   "17":{
      "fajr":"06:06",
      "sunrise":"07:32",
      "dohr":"13:41",
      "asr":"17:01",
      "maghreb":"19:41",
      "ichaa":"20:55"
   },
   "18":{
      "fajr":"06:05",
      "sunrise":"07:31",
      "dohr":"13:40",
      "asr":"17:02",
      "maghreb":"19:41",
      "ichaa":"20:56"
   },
   "19":{
      "fajr":"06:04",
      "sunrise":"07:29",
      "dohr":"13:40",
      "asr":"17:02",
      "maghreb":"19:42",
      "ichaa":"20:57"
   },
   "20":{
      "fajr":"06:02",
      "sunrise":"07:28",
      "dohr":"13:40",
      "asr":"17:02",
      "maghreb":"19:43",
      "ichaa":"20:58"
   },
   "21":{
      "fajr":"06:01",
      "sunrise":"07:27",
      "dohr":"13:39",
      "asr":"17:02",
      "maghreb":"19:44",
      "ichaa":"20:59"
   },
   "22":{
      "fajr":"05:59",
      "sunrise":"07:25",
      "dohr":"13:39",
      "asr":"17:03",
      "maghreb":"19:45",
      "ichaa":"21:00"
   },
   "23":{
      "fajr":"05:58",
      "sunrise":"07:24",
      "dohr":"13:39",
      "asr":"17:03",
      "maghreb":"19:45",
      "ichaa":"21:00"
   },
   "24":{
      "fajr":"05:56",
      "sunrise":"07:23",
      "dohr":"13:39",
      "asr":"17:03",
      "maghreb":"19:46",
      "ichaa":"21:01"
   },
   "25":{
      "fajr":"05:55",
      "sunrise":"07:21",
      "dohr":"13:38",
      "asr":"17:03",
      "maghreb":"19:47",
      "ichaa":"21:02"
   },
   "26":{
      "fajr":"05:53",
      "sunrise":"07:20",
      "dohr":"13:38",
      "asr":"17:04",
      "maghreb":"19:48",
      "ichaa":"21:03"
   },
   "27":{
      "fajr":"05:52",
      "sunrise":"07:19",
      "dohr":"13:38",
      "asr":"17:04",
      "maghreb":"19:48",
      "ichaa":"21:04"
   },
   "28":{
      "fajr":"05:50",
      "sunrise":"07:17",
      "dohr":"13:37",
      "asr":"17:04",
      "maghreb":"19:49",
      "ichaa":"21:05"
   },
   "29":{
      "fajr":"05:49",
      "sunrise":"07:16",
      "dohr":"13:37",
      "asr":"17:04",
      "maghreb":"19:50",
      "ichaa":"21:06"
   },
   "30":{
      "fajr":"05:47",
      "sunrise":"07:14",
      "dohr":"13:37",
      "asr":"17:04",
      "maghreb":"19:51",
      "ichaa":"21:07"
   },
   "31":{
      "fajr":"05:46",
      "sunrise":"07:13",
      "dohr":"13:36",
      "asr":"17:05",
      "maghreb":"19:51",
      "ichaa":"21:07"
   }
}

```

### For get prayer times of Rabat for  date 2021/03/25
:information_source: **ID number of Rabat city is 69**
- Go to https://www.prayertimes.mahmoud.ma/api/69/2021/03/25

return 
```json=
{
   "fajr":"05:55",
   "sunrise":"07:21",
   "dohr":"13:38",
   "asr":"17:03",
   "maghreb":"19:47",
   "ichaa":"21:02"
}
```


### For get list of cities

- Go to https://www.prayertimes.mahmoud.ma/api/cities

return

```json=

{
   "1":{
      "nameFR":"Figuig",
      "nameAR":"فكيك"
   },
   "2":{
      "nameFR":"Oujda",
      "nameAR":"وجدة"
   },
   "3":{
      "nameFR":"Bouarfa",
      "nameAR":"بوعرفة"
   },
   "4":{
      "nameFR":"Jerada",
      "nameAR":"جرادة"
   },
   "5":{
      "nameFR":"Berkane",
      "nameAR":"بركان"
   },
   "6":{
      "nameFR":"Aïn Chaïr",
      "nameAR":"عين الشعير"
   },
   "7":{
      "nameFR":"Taourirt",
      "nameAR":"تاوريرت"
   },
   "8":{
      "nameFR":"Nador",
      "nameAR":"الناظور"
   },
   "9":{
      "nameFR":"Melilla",
      "nameAR":"مليلية"
   },
   "10":{
      "nameFR":"Bouanane",
      "nameAR":"بوعنان"
   },
   "11":{
      "nameFR":"Guercif",
      "nameAR":"كرسيف"
   },
   "12":{
      "nameFR":"Boutagit",
      "nameAR":"بوتاجيت"
   },
   "13":{
      "nameFR":"Tandit",
      "nameAR":"تانديت"
   },
   "14":{
      "nameFR":"Aknol",
      "nameAR":"أكنول"
   },
   "15":{
      "nameFR":"Al Hoceima",
      "nameAR":"الحسيمة"
   },
   "16":{
      "nameFR":"Missour",
      "nameAR":"ميسور"
   },
   "17":{
      "nameFR":"Taza",
      "nameAR":"تازة"
   },
   "18":{
      "nameFR":"Bourd",
      "nameAR":"بورد"
   },
   "19":{
      "nameFR":"Erfoud",
      "nameAR":"أرفود"
   },
   "20":{
      "nameFR":"Rissani",
      "nameAR":"الريصاني"
   },
   "21":{
      "nameFR":"Oued Amlil",
      "nameAR":"واد إمليل"
   },
   "22":{
      "nameFR":"Tahla",
      "nameAR":"تاهلة"
   },
   "23":{
      "nameFR":"Erachidia",
      "nameAR":"الراشيدية"
   },
   "24":{
      "nameFR":"Er-Rich",
      "nameAR":"الريش"
   },
   "25":{
      "nameFR":"El Menzel Beni Yazgha",
      "nameAR":"المنزل بني يازغة"
   },
   "26":{
      "nameFR":"Taounate",
      "nameAR":"تاونات"
   },
   "27":{
      "nameFR":"Tissa",
      "nameAR":"تيسة"
   },
   "28":{
      "nameFR":"Boulemane",
      "nameAR":"بولمان"
   },
   "29":{
      "nameFR":"Midelt",
      "nameAR":"ميدلت"
   },
   "30":{
      "nameFR":"Sefrou",
      "nameAR":"صفرو"
   },
   "31":{
      "nameFR":"Goulmima",
      "nameAR":"كلميمة"
   },
   "32":{
      "nameFR":"Fes",
      "nameAR":"فاس"
   },
   "33":{
      "nameFR":"Imouzzer kandar",
      "nameAR":"إموزار كندر"
   },
   "34":{
      "nameFR":"Tinejdad",
      "nameAR":"تنجداد"
   },
   "35":{
      "nameFR":"Ifrane",
      "nameAR":"إفران"
   },
   "36":{
      "nameFR":"Moulay Yacoub",
      "nameAR":"مولاي يعقوب"
   },
   "37":{
      "nameFR":"Azrou",
      "nameAR":"أزرو"
   },
   "38":{
      "nameFR":"Chefchaouen",
      "nameAR":"شفشاون"
   },
   "39":{
      "nameFR":"Sebta",
      "nameAR":"سبتة"
   },
   "40":{
      "nameFR":"Tetouan",
      "nameAR":"تطوان"
   },
   "41":{
      "nameFR":"El Hajeb",
      "nameAR":"الحاجب"
   },
   "42":{
      "nameFR":"Moulay Driss Zerhoun",
      "nameAR":"مولاي دريس زرهون"
   },
   "43":{
      "nameFR":"Meknes",
      "nameAR":"مكناس"
   },
   "44":{
      "nameFR":"Ouezzane",
      "nameAR":"وزان"
   },
   "45":{
      "nameFR":"Khenifra",
      "nameAR":"خنيفرة"
   },
   "46":{
      "nameFR":"Sidi Kacem",
      "nameAR":"سيدي قاسم"
   },
   "47":{
      "nameFR":"Tizi Ouasli",
      "nameAR":"تيزي وسلي"
   },
   "48":{
      "nameFR":"Tanger",
      "nameAR":"طنجة"
   },
   "49":{
      "nameFR":"Zagora",
      "nameAR":"زاكورة"
   },
   "50":{
      "nameFR":"Ksar El Kebir",
      "nameAR":"القصر الكبير"
   },
   "51":{
      "nameFR":"Arbaoua",
      "nameAR":"عرباوة"
   },
   "52":{
      "nameFR":"Sidi Slimane",
      "nameAR":"سيدي سليمان"
   },
   "53":{
      "nameFR":"Souk El Arbaa Gharb",
      "nameAR":"سوق أربعاء الغرب"
   },
   "54":{
      "nameFR":"Assilah",
      "nameAR":"أصيلا "
   },
   "55":{
      "nameFR":"Khemisset",
      "nameAR":"الخميسات"
   },
   "56":{
      "nameFR":"Kelaat Magouna",
      "nameAR":"قلعة مكونة"
   },
   "57":{
      "nameFR":"Larache",
      "nameAR":"العرائش"
   },
   "58":{
      "nameFR":"Moulay Bouazza",
      "nameAR":"مولاي بوعزة"
   },
   "59":{
      "nameFR":"Kasba Tadla",
      "nameAR":"قصبة تادلة"
   },
   "60":{
      "nameFR":"Sidi Yahya El Gharb",
      "nameAR":"سيدي يحيى الغرب"
   },
   "61":{
      "nameFR":"Tifelt",
      "nameAR":"تيفلت"
   },
   "62":{
      "nameFR":"Beni Mellal",
      "nameAR":"بني ملال"
   },
   "63":{
      "nameFR":"Meskoura",
      "nameAR":"مسكورة"
   },
   "64":{
      "nameFR":"Oued Zem",
      "nameAR":"واد زم"
   },
   "65":{
      "nameFR":"Azilal",
      "nameAR":"أزيلال"
   },
   "66":{
      "nameFR":"Fquih Ben Salah",
      "nameAR":"فقيه بن صالح"
   },
   "67":{
      "nameFR":"Kenitra",
      "nameAR":"قنيطرة"
   },
   "68":{
      "nameFR":"Rommani",
      "nameAR":"الرماني"
   },
   "69":{
      "nameFR":"Rabat-Salé",
      "nameAR":"الرباط سلا"
   },
   "70":{
      "nameFR":"Khouribga",
      "nameAR":"خريبكة"
   },
   "71":{
      "nameFR":"Ouarzazate",
      "nameAR":"ورزازات"
   },
   "72":{
      "nameFR":"Demnate",
      "nameAR":"دمنات"
   },
   "73":{
      "nameFR":"Benslimane",
      "nameAR":"بن سليمان"
   },
   "74":{
      "nameFR":"Bouznika",
      "nameAR":"بوزنيقة"
   },
   "75":{
      "nameFR":"El Gara",
      "nameAR":"الكارة"
   },
   "76":{
      "nameFR":"Mohammedia",
      "nameAR":"المحمدية"
   },
   "77":{
      "nameFR":"Kelaat Sraghna",
      "nameAR":"قلعة السراغنة"
   },
   "78":{
      "nameFR":"Berrchid",
      "nameAR":"برشيد"
   },
   "79":{
      "nameFR":"Settat",
      "nameAR":"سطات"
   },
   "80":{
      "nameFR":"Casablanca",
      "nameAR":"الدار البيضاء"
   },
   "81":{
      "nameFR":"Taliouine",
      "nameAR":"تاليوين"
   },
   "82":{
      "nameFR":"Benguerir",
      "nameAR":"بنكرير"
   },
   "83":{
      "nameFR":"Tata",
      "nameAR":"طاطا"
   },
   "84":{
      "nameFR":"Marrakech",
      "nameAR":"مراكش"
   },
   "85":{
      "nameFR":"Akka",
      "nameAR":"أقا"
   },
   "86":{
      "nameFR":"Azemmour",
      "nameAR":"أزمور"
   },
   "87":{
      "nameFR":"Aghram",
      "nameAR":"أغرام"
   },
   "88":{
      "nameFR":"El Jadida",
      "nameAR":"الجديدة"
   },
   "89":{
      "nameFR":"Youssoufia",
      "nameAR":"اليوسفية"
   },
   "90":{
      "nameFR":"Taroudant",
      "nameAR":"تارودانت"
   },
   "91":{
      "nameFR":"Tafraout",
      "nameAR":"تافراوت"
   },
   "92":{
      "nameFR":"Safi",
      "nameAR":"أسفي"
   },
   "93":{
      "nameFR":"Zag",
      "nameAR":"الزاك"
   },
   "94":{
      "nameFR":"Assa",
      "nameAR":"أسا"
   },
   "95":{
      "nameFR":"Agadir",
      "nameAR":"أكادير"
   },
   "96":{
      "nameFR":"Tiznit",
      "nameAR":"تيزنيت"
   },
   "97":{
      "nameFR":"Essaouira",
      "nameAR":"الصويرة"
   },
   "98":{
      "nameFR":"Guelmim",
      "nameAR":"كلميم"
   },
   "99":{
      "nameFR":"Sidi Ifni",
      "nameAR":"سيدي إفني"
   },
   "100":{
      "nameFR":"Tan-Tan",
      "nameAR":"طانطان"
   },
   "101":{
      "nameFR":"Smara",
      "nameAR":"سمارة"
   },
   "102":{
      "nameFR":"Tarfaya",
      "nameAR":"طرفاية"
   },
   "103":{
      "nameFR":"Laayoun",
      "nameAR":"العيون"
   },
   "104":{
      "nameFR":"Boujdour",
      "nameAR":"بوجدور"
   },
   "105":{
      "nameFR":"Dakhla",
      "nameAR":"الداخلة"
   },
   "106":{
      "nameFR":"Lagouira",
      "nameAR":"الكويرة"
   },
   "107":{
      "nameFR":"Alnif",
      "nameAR":"النيف"
   },
   "108":{
      "nameFR":"Bejaad",
      "nameAR":"أبي جعد"
   },
   "109":{
      "nameFR":"Aousserd",
      "nameAR":"أوسرد"
   },
   "110":{
      "nameFR":"Tinghir",
      "nameAR":"تنغير"
   },
   "111":{
      "nameFR":"Chtouka Ait Baha",
      "nameAR":"أشتوكة أيت باها"
   },
   "112":{
      "nameFR":"Fnideq",
      "nameAR":"الفنيدق"
   },
   "113":{
      "nameFR":"Skhour Rehamna",
      "nameAR":"صخور الرحامنة"
   },
   "114":{
      "nameFR":"Sidi Ifni",
      "nameAR":"سيدي إفني"
   },
   "115":{
      "nameFR":"Ouezzane",
      "nameAR":"وزان"
   }
}
```

### For get name of Rabat
:information_source: **ID number of Rabat city is 69**
- Go to https://www.prayertimes.mahmoud.ma/api/cities/69

return
```json=
{
   "nameFR":"Rabat-Salé",
   "nameAR":"الرباط سلا"
}
```
---
## Created by

* 🇲🇦 **Mahmoud Zakaria** 
* 🌐 [www.mahmoud.ma](https://www.mahmoud.ma/)
