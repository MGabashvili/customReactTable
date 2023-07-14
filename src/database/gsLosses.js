const DATA = JSON.parse(`[
    {
      "Regions": "East",
      "Gas Stations": "Akhalkalaki",
      "January": -1457,
      "February": -1144,
      "March": -1248,
      "April": -851,
      "May": -1062,
      "June": -1029
    },
    {
      "Regions": "East",
      "Gas Stations": "Akhaltsikhe",
      "January": -511,
      "February": -388,
      "March": -369,
      "April": -419,
      "May": -472,
      "June": -901
    },
    {
      "Regions": "East",
      "Gas Stations": "Borjomi",
      "January": -256,
      "February": -523,
      "March": -380,
      "April": -377,
      "May": -306,
      "June": -313
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Vakhushti",
      "January": -780,
      "February": 443,
      "March": -194,
      "April": -253,
      "May": 140,
      "June": 241
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Dighomi 1",
      "January": -371,
      "February": -59,
      "March": -348,
      "April": -386,
      "May": -679,
      "June": -995
    },
    {
      "Regions": "East",
      "Gas Stations": "Gori",
      "January": -955,
      "February": 89,
      "March": 22,
      "April": -179,
      "May": -93,
      "June": -487
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Natsionali",
      "January": -359,
      "February": -378,
      "March": -49,
      "April": -284,
      "May": 7,
      "June": -853
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Sanzona 1",
      "January": 145,
      "February": -180,
      "March": -247,
      "April": -262,
      "May": -367,
      "June": -878
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Isani",
      "January": -152,
      "February": -96,
      "March": -134,
      "April": -276,
      "May": -142,
      "June": -301
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Audi",
      "January": -316,
      "February": 435,
      "March": -99,
      "April": -233,
      "May": -249,
      "June": -575
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Lilo",
      "January": 303,
      "February": 361,
      "March": 290,
      "April": -581,
      "May": -27,
      "June": -670
    },
    {
      "Regions": "East",
      "Gas Stations": "Marneuli",
      "January": -184,
      "February": -244,
      "March": 146,
      "April": -2,
      "May": -2,
      "June": -50
    },
    {
      "Regions": "East",
      "Gas Stations": "Gori 3",
      "January": "-",
      "February": -281,
      "March": 10,
      "April": -75,
      "May": -197,
      "June": -437
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Sachkhere",
      "January": -191,
      "February": -134,
      "March": 118,
      "April": 270,
      "May": 436,
      "June": 311
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Javakheti 2",
      "January": -324,
      "February": 861,
      "March": 799,
      "April": 833,
      "May": 894,
      "June": 12
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Sheshelidze",
      "January": 293,
      "February": 229,
      "March": -171,
      "April": -145,
      "May": 301,
      "June": -178
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Chiatura",
      "January": -90,
      "February": -60,
      "March": -90,
      "April": -65,
      "May": 65,
      "June": -135
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Didube",
      "January": 9,
      "February": 50,
      "March": -95,
      "April": -187,
      "May": -190,
      "June": -342
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "ZMK",
      "January": 21,
      "February": -126,
      "March": -149,
      "April": 108,
      "May": 69,
      "June": -525
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Bagebi",
      "January": 709,
      "February": 814,
      "March": 160,
      "April": -218,
      "May": 166,
      "June": 198
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Tsalenjikha",
      "January": -156,
      "February": -29,
      "March": 17,
      "April": 72,
      "May": "-",
      "June": "-"
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Zugdidi 1",
      "January": 264,
      "February": 457,
      "March": 121,
      "April": -150,
      "May": 72,
      "June": -134
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Metekhi",
      "January": 57,
      "February": 203,
      "March": 1,
      "April": -148,
      "May": -261,
      "June": -677
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Samgori 2",
      "January": 176,
      "February": 899,
      "March": 119,
      "April": -148,
      "May": 90,
      "June": -404
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Didube 2",
      "January": -5,
      "February": 71,
      "March": -21,
      "April": -118,
      "May": -498,
      "June": -951
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Poti 1",
      "January": -99,
      "February": 57,
      "March": 148,
      "April": 195,
      "May": 95,
      "June": 57
    },
    {
      "Regions": "East",
      "Gas Stations": "Telavi",
      "January": 134,
      "February": 190,
      "March": -90,
      "April": 33,
      "May": 129,
      "June": -192
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Qsani",
      "January": 140,
      "February": 178,
      "March": 75,
      "April": -78,
      "May": 36,
      "June": -223
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Poti 3",
      "January": -75,
      "February": 35,
      "March": 100,
      "April": 130,
      "May": 100,
      "June": 70
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "salosi",
      "January": 44,
      "February": -58,
      "March": 8,
      "April": 52,
      "May": 165,
      "June": 53
    },
    {
      "Regions": "East",
      "Gas Stations": "Kachreti",
      "January": 55,
      "February": 110,
      "March": 58,
      "April": -35,
      "May": 130,
      "June": -150
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Ambrolauri",
      "January": 15,
      "February": -23,
      "March": 56,
      "April": 73,
      "May": 25,
      "June": -299
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Isani 3",
      "January": -12,
      "February": 21,
      "March": 25,
      "April": 69,
      "May": 17,
      "June": 94
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Kutaisi 6",
      "January": 0,
      "February": 0,
      "March": 0,
      "April": 6,
      "May": 147,
      "June": 194
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Terjola",
      "January": 60,
      "February": 20,
      "March": 60,
      "April": 100,
      "May": 210,
      "June": 80
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Zestafoni",
      "January": 133,
      "February": 42,
      "March": 40,
      "April": 44,
      "May": 325,
      "June": -182
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Chakvi",
      "January": 45,
      "February": 69,
      "March": 51,
      "April": 144,
      "May": 63,
      "June": 7
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Lilo 2",
      "January": 20,
      "February": 206,
      "March": 45,
      "April": 55,
      "May": 65,
      "June": -380
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Sanzona 2",
      "January": 204,
      "February": 132,
      "March": 63,
      "April": 20,
      "May": 56,
      "June": -695
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Lanchkhuti",
      "January": 35,
      "February": 116,
      "March": 170,
      "April": 274,
      "May": -4007,
      "June": -115
    },
    {
      "Regions": "East",
      "Gas Stations": "Bolnisi",
      "January": 259,
      "February": 191,
      "March": 90,
      "April": 55,
      "May": 54,
      "June": -156
    },
    {
      "Regions": "East",
      "Gas Stations": "Marneuli 4",
      "January": 103,
      "February": 266,
      "March": 144,
      "April": 127,
      "May": 198,
      "June": 210
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Dighomi 2",
      "January": 143,
      "February": 276,
      "March": 150,
      "April": 122,
      "May": 123,
      "June": -157
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Ortachala 4",
      "January": 291,
      "February": 236,
      "March": 23,
      "April": 212,
      "May": 134,
      "June": 214
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "GPI",
      "January": 166,
      "February": 389,
      "March": 171,
      "April": 113,
      "May": 131,
      "June": -698
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Gelovani",
      "January": 86,
      "February": 364,
      "March": 266,
      "April": 142,
      "May": 102,
      "June": -450
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Kobuleti 2",
      "January": 315,
      "February": 200,
      "March": 200,
      "April": 230,
      "May": 160,
      "June": 40
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Samtredia",
      "January": 505,
      "February": 186,
      "March": 240,
      "April": 152,
      "May": 155,
      "June": -240
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Gonio",
      "January": 352,
      "February": 345,
      "March": 389,
      "April": 287,
      "May": 314,
      "June": 76
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Batumi 2",
      "January": 432,
      "February": 360,
      "March": 250,
      "April": 343,
      "May": 314,
      "June": -56
    },
    {
      "Regions": "East",
      "Gas Stations": "Marneuli 3",
      "January": 235,
      "February": 543,
      "March": 372,
      "April": 298,
      "May": 178,
      "June": 209
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "HES",
      "January": 906,
      "February": 472,
      "March": 36,
      "April": 37,
      "May": 228,
      "June": 219
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Vazi",
      "January": 269,
      "February": 623,
      "March": 269,
      "April": 291,
      "May": 210,
      "June": -182
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Batumi 7",
      "January": 410,
      "February": 330,
      "March": 440,
      "April": 360,
      "May": 240,
      "June": -30
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Piketi",
      "January": 405,
      "February": 574,
      "March": 380,
      "April": 388,
      "May": 111,
      "June": 14
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Samgori 1",
      "January": 308,
      "February": 779,
      "March": 491,
      "April": 256,
      "May": 124,
      "June": -300
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Ozurgeti",
      "January": 443,
      "February": 469,
      "March": 445,
      "April": 520,
      "May": 303,
      "June": -144
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Khelvachauri",
      "January": 482,
      "February": 441,
      "March": 407,
      "April": 612,
      "May": 363,
      "June": 362
    },
    {
      "Regions": "East",
      "Gas Stations": "Rustavi 2",
      "January": 533,
      "February": 775,
      "March": 390,
      "April": 264,
      "May": 265,
      "June": -24
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "Senaki",
      "January": 516,
      "February": 487,
      "March": 606,
      "April": 754,
      "May": 390,
      "June": 177
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Makhinjauri",
      "January": 700,
      "February": 600,
      "March": 650,
      "April": 550,
      "May": 400,
      "June": 76
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "GelovanI 2",
      "January": 28,
      "February": 782,
      "March": 926,
      "April": 829,
      "May": 1020,
      "June": 438
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Batumi 6",
      "January": 870,
      "February": 950,
      "March": 680,
      "April": 480,
      "May": 510,
      "June": 150
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Batumi 1",
      "January": 1175,
      "February": 600,
      "March": 421,
      "April": 796,
      "May": 408,
      "June": 66
    },
    {
      "Regions": "Tbilisi",
      "Gas Stations": "Eliava",
      "January": 445,
      "February": 1091,
      "March": 870,
      "April": 797,
      "May": 810,
      "June": 706
    },
    {
      "Regions": "Adjara-Guria",
      "Gas Stations": "Batumi 5",
      "January": 530,
      "February": 1395,
      "March": 1150,
      "April": 550,
      "May": 305,
      "June": 210
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "kutaisi 4",
      "January": 985,
      "February": 955,
      "March": 715,
      "April": 1160,
      "May": 1055,
      "June": 835
    },
    {
      "Regions": "Imereti-Samegrelo",
      "Gas Stations": "kutaisi 5",
      "January": 980,
      "February": 1190,
      "March": 1110,
      "April": 1050,
      "May": 1080,
      "June": 1120
    }
  ]`);


  export default DATA;