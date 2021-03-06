module.exports = {
	getCountries: function() {
		return countries;
	},
	getCowId: function(name) {
		if (countries[name] && countries[name].cowId) {
			return countries[name].cowId;
		} else {
			return null;
		}
	}
}

var countries = {
	"United States of America": {
		cowId: "2",
		name: "United States of America",
		shortName: "USA"
	},
	Canada: {
		cowId: "20",
		name: "Canada",
		shortName: "CAN"
	},
	Bahamas: {
		cowId: "31",
		name: "Bahamas",
		shortName: "BHM"
	},
	Cuba: {
		cowId: "40",
		name: "Cuba",
		shortName: "CUB"
	},
	Haiti: {
		cowId: "41",
		name: "Haiti",
		shortName: "HAI"
	},
	"Dominican Republic": {
		cowId: "42",
		name: "Dominican Republic",
		shortName: "DOM"
	},
	Jamaica: {
		cowId: "51",
		name: "Jamaica",
		shortName: "JAM"
	},
	"Trinidad and Tobago": {
		cowId: "52",
		name: "Trinidad and Tobago",
		shortName: "TRI"
	},
	Barbados: {
		cowId: "53",
		name: "Barbados",
		shortName: "BAR"
	},
	Dominica: {
		cowId: "54",
		name: "Dominica",
		shortName: "DMA"
	},
	Grenada: {
		cowId: "55",
		name: "Grenada",
		shortName: "GRN"
	},
	"St. Lucia": {
		cowId: "56",
		name: "St. Lucia",
		shortName: "SLU"
	},
	"St. Vincent and the Grenadines": {
		cowId: "57",
		name: "St. Vincent and the Grenadines",
		shortName: "SVG"
	},
	"Antigua & Barbuda": {
		cowId: "58",
		name: "Antigua & Barbuda",
		shortName: "AAB"
	},
	"St. Kitts and Nevis": {
		cowId: "60",
		name: "St. Kitts and Nevis",
		shortName: "SKN"
	},
	Mexico: {
		cowId: "70",
		name: "Mexico",
		shortName: "MEX"
	},
	Belize: {
		cowId: "80",
		name: "Belize",
		shortName: "BLZ"
	},
	Guatemala: {
		cowId: "90",
		name: "Guatemala",
		shortName: "GUA"
	},
	Honduras: {
		cowId: "91",
		name: "Honduras",
		shortName: "HON"
	},
	"El Salvador": {
		cowId: "92",
		name: "El Salvador",
		shortName: "SAL"
	},
	Nicaragua: {
		cowId: "93",
		name: "Nicaragua",
		shortName: "NIC"
	},
	"Costa Rica": {
		cowId: "94",
		name: "Costa Rica",
		shortName: "COS"
	},
	Panama: {
		cowId: "95",
		name: "Panama",
		shortName: "PAN"
	},
	Colombia: {
		cowId: "100",
		name: "Colombia",
		shortName: "COL"
	},
	Venezuela: {
		cowId: "101",
		name: "Venezuela",
		shortName: "VEN"
	},
	Guyana: {
		cowId: "110",
		name: "Guyana",
		shortName: "GUY"
	},
	Suriname: {
		cowId: "115",
		name: "Suriname",
		shortName: "SUR"
	},
	Ecuador: {
		cowId: "130",
		name: "Ecuador",
		shortName: "ECU"
	},
	Peru: {
		cowId: "135",
		name: "Peru",
		shortName: "PER"
	},
	Brazil: {
		cowId: "140",
		name: "Brazil",
		shortName: "BRA"
	},
	Bolivia: {
		cowId: "145",
		name: "Bolivia",
		shortName: "BOL"
	},
	Paraguay: {
		cowId: "150",
		name: "Paraguay",
		shortName: "PAR"
	},
	Chile: {
		cowId: "155",
		name: "Chile",
		shortName: "CHL"
	},
	Argentina: {
		cowId: "160",
		name: "Argentina",
		shortName: "ARG"
	},
	Uruguay: {
		cowId: "165",
		name: "Uruguay",
		shortName: "URU"
	},
	"United Kingdom": {
		cowId: "200",
		name: "United Kingdom",
		shortName: "UKG"
	},
	Ireland: {
		cowId: "205",
		name: "Ireland",
		shortName: "IRE"
	},
	Netherlands: {
		cowId: "210",
		name: "Netherlands",
		shortName: "NTH"
	},
	Belgium: {
		cowId: "211",
		name: "Belgium",
		shortName: "BEL"
	},
	Luxembourg: {
		cowId: "212",
		name: "Luxembourg",
		shortName: "LUX"
	},
	France: {
		cowId: "220",
		name: "France",
		shortName: "FRN"
	},
	Monaco: {
		cowId: "221",
		name: "Monaco",
		shortName: "MNC"
	},
	Liechtenstein: {
		cowId: "223",
		name: "Liechtenstein",
		shortName: "LIE"
	},
	Switzerland: {
		cowId: "225",
		name: "Switzerland",
		shortName: "SWZ"
	},
	Spain: {
		cowId: "230",
		name: "Spain",
		shortName: "SPN"
	},
	Andorra: {
		cowId: "232",
		name: "Andorra",
		shortName: "AND"
	},
	Portugal: {
		cowId: "235",
		name: "Portugal",
		shortName: "POR"
	},
	Hanover: {
		cowId: "240",
		name: "Hanover",
		shortName: "HAN"
	},
	Bavaria: {
		cowId: "245",
		name: "Bavaria",
		shortName: "BAV"
	},
	Germany: {
		cowId: "255",
		name: "Germany",
		shortName: "GMY"
	},
	"German Federal Republic": {
		cowId: "260",
		name: "German Federal Republic",
		shortName: "GFR"
	},
	"German Democratic Republic": {
		cowId: "265",
		name: "German Democratic Republic",
		shortName: "GDR"
	},
	Baden: {
		cowId: "267",
		name: "Baden",
		shortName: "BAD"
	},
	Saxony: {
		cowId: "269",
		name: "Saxony",
		shortName: "SAX"
	},
	Wuerttemburg: {
		cowId: "271",
		name: "Wuerttemburg",
		shortName: "WRT"
	},
	"Hesse Electoral": {
		cowId: "273",
		name: "Hesse Electoral",
		shortName: "HSE"
	},
	"Hesse Grand Ducal": {
		cowId: "275",
		name: "Hesse Grand Ducal",
		shortName: "HSG"
	},
	"Mecklenburg Schwerin": {
		cowId: "280",
		name: "Mecklenburg Schwerin",
		shortName: "MEC"
	},
	Poland: {
		cowId: "290",
		name: "Poland",
		shortName: "POL"
	},
	"Austria-Hungary": {
		cowId: "300",
		name: "Austria-Hungary",
		shortName: "AUH"
	},
	Austria: {
		cowId: "305",
		name: "Austria",
		shortName: "AUS"
	},
	Hungary: {
		cowId: "310",
		name: "Hungary",
		shortName: "HUN"
	},
	Czechoslovakia: {
		cowId: "315",
		name: "Czechoslovakia",
		shortName: "CZE"
	},
	"Czech Republic": {
		cowId: "316",
		name: "Czech Republic",
		shortName: "CZR"
	},
	Slovakia: {
		cowId: "317",
		name: "Slovakia",
		shortName: "SLO"
	},
	Italy: {
		cowId: "325",
		name: "Italy",
		shortName: "ITA"
	},
	"Papal States": {
		cowId: "327",
		name: "Papal States",
		shortName: "PAP"
	},
	"Two Sicilies": {
		cowId: "329",
		name: "Two Sicilies",
		shortName: "SIC"
	},
	"San Marino": {
		cowId: "331",
		name: "San Marino",
		shortName: "SNM"
	},
	Modena: {
		cowId: "332",
		name: "Modena",
		shortName: "MOD"
	},
	Parma: {
		cowId: "335",
		name: "Parma",
		shortName: "PMA"
	},
	Tuscany: {
		cowId: "337",
		name: "Tuscany",
		shortName: "TUS"
	},
	Malta: {
		cowId: "338",
		name: "Malta",
		shortName: "MLT"
	},
	Albania: {
		cowId: "339",
		name: "Albania",
		shortName: "ALB"
	},
	Montenegro: {
		cowId: "341",
		name: "Montenegro",
		shortName: "MNG"
	},
	Macedonia: {
		cowId: "343",
		name: "Macedonia",
		shortName: "MAC"
	},
	Croatia: {
		cowId: "344",
		name: "Croatia",
		shortName: "CRO"
	},
	Yugoslavia: {
		cowId: "345",
		name: "Yugoslavia",
		shortName: "YUG"
	},
	"Bosnia and Herzegovina": {
		cowId: "346",
		name: "Bosnia and Herzegovina",
		shortName: "BOS"
	},
	Kosovo: {
		cowId: "347",
		name: "Kosovo",
		shortName: "KOS"
	},
	Slovenia: {
		cowId: "349",
		name: "Slovenia",
		shortName: "SLV"
	},
	Greece: {
		cowId: "350",
		name: "Greece",
		shortName: "GRC"
	},
	Cyprus: {
		cowId: "352",
		name: "Cyprus",
		shortName: "CYP"
	},
	Bulgaria: {
		cowId: "355",
		name: "Bulgaria",
		shortName: "BUL"
	},
	Moldova: {
		cowId: "359",
		name: "Moldova",
		shortName: "MLD"
	},
	Romania: {
		cowId: "360",
		name: "Romania",
		shortName: "ROM"
	},
	Russia: {
		cowId: "365",
		name: "Russia",
		shortName: "RUS"
	},
	Estonia: {
		cowId: "366",
		name: "Estonia",
		shortName: "EST"
	},
	Latvia: {
		cowId: "367",
		name: "Latvia",
		shortName: "LAT"
	},
	Lithuania: {
		cowId: "368",
		name: "Lithuania",
		shortName: "LIT"
	},
	Ukraine: {
		cowId: "369",
		name: "Ukraine",
		shortName: "UKR"
	},
	Belarus: {
		cowId: "370",
		name: "Belarus",
		shortName: "BLR"
	},
	Armenia: {
		cowId: "371",
		name: "Armenia",
		shortName: "ARM"
	},
	Georgia: {
		cowId: "372",
		name: "Georgia",
		shortName: "GRG"
	},
	Azerbaijan: {
		cowId: "373",
		name: "Azerbaijan",
		shortName: "AZE"
	},
	Finland: {
		cowId: "375",
		name: "Finland",
		shortName: "FIN"
	},
	Sweden: {
		cowId: "380",
		name: "Sweden",
		shortName: "SWD"
	},
	Norway: {
		cowId: "385",
		name: "Norway",
		shortName: "NOR"
	},
	Denmark: {
		cowId: "390",
		name: "Denmark",
		shortName: "DEN"
	},
	Iceland: {
		cowId: "395",
		name: "Iceland",
		shortName: "ICE"
	},
	"Cape Verde": {
		cowId: "402",
		name: "Cape Verde",
		shortName: "CAP"
	},
	"Sao Tome and Principe": {
		cowId: "403",
		name: "Sao Tome and Principe",
		shortName: "STP"
	},
	"Guinea-Bissau": {
		cowId: "404",
		name: "Guinea-Bissau",
		shortName: "GNB"
	},
	"Equatorial Guinea": {
		cowId: "411",
		name: "Equatorial Guinea",
		shortName: "EQG"
	},
	Gambia: {
		cowId: "420",
		name: "Gambia",
		shortName: "GAM"
	},
	Mali: {
		cowId: "432",
		name: "Mali",
		shortName: "MLI"
	},
	Senegal: {
		cowId: "433",
		name: "Senegal",
		shortName: "SEN"
	},
	Benin: {
		cowId: "434",
		name: "Benin",
		shortName: "BEN"
	},
	Mauritania: {
		cowId: "435",
		name: "Mauritania",
		shortName: "MAA"
	},
	Niger: {
		cowId: "436",
		name: "Niger",
		shortName: "NIR"
	},
	"Ivory Coast": {
		cowId: "437",
		name: "Ivory Coast",
		shortName: "CDI"
	},
	Guinea: {
		cowId: "438",
		name: "Guinea",
		shortName: "GUI"
	},
	"Burkina Faso": {
		cowId: "439",
		name: "Burkina Faso",
		shortName: "BFO"
	},
	Liberia: {
		cowId: "450",
		name: "Liberia",
		shortName: "LBR"
	},
	"Sierra Leone": {
		cowId: "451",
		name: "Sierra Leone",
		shortName: "SIE"
	},
	Ghana: {
		cowId: "452",
		name: "Ghana",
		shortName: "GHA"
	},
	Togo: {
		cowId: "461",
		name: "Togo",
		shortName: "TOG"
	},
	Cameroon: {
		cowId: "471",
		name: "Cameroon",
		shortName: "CAO"
	},
	Nigeria: {
		cowId: "475",
		name: "Nigeria",
		shortName: "NIG"
	},
	Gabon: {
		cowId: "481",
		name: "Gabon",
		shortName: "GAB"
	},
	"Central African Republic": {
		cowId: "482",
		name: "Central African Republic",
		shortName: "CEN"
	},
	Chad: {
		cowId: "483",
		name: "Chad",
		shortName: "CHA"
	},
	Congo: {
		cowId: "484",
		name: "Congo",
		shortName: "CON"
	},
	"Democratic Republic of the Congo": {
		cowId: "490",
		name: "Democratic Republic of the Congo",
		shortName: "DRC"
	},
	Uganda: {
		cowId: "500",
		name: "Uganda",
		shortName: "UGA"
	},
	Kenya: {
		cowId: "501",
		name: "Kenya",
		shortName: "KEN"
	},
	Tanzania: {
		cowId: "510",
		name: "Tanzania",
		shortName: "TAZ"
	},
	Zanzibar: {
		cowId: "511",
		name: "Zanzibar",
		shortName: "ZAN"
	},
	Burundi: {
		cowId: "516",
		name: "Burundi",
		shortName: "BUI"
	},
	Rwanda: {
		cowId: "517",
		name: "Rwanda",
		shortName: "RWA"
	},
	Somalia: {
		cowId: "520",
		name: "Somalia",
		shortName: "SOM"
	},
	Djibouti: {
		cowId: "522",
		name: "Djibouti",
		shortName: "DJI"
	},
	Ethiopia: {
		cowId: "530",
		name: "Ethiopia",
		shortName: "ETH"
	},
	Eritrea: {
		cowId: "531",
		name: "Eritrea",
		shortName: "ERI"
	},
	Angola: {
		cowId: "540",
		name: "Angola",
		shortName: "ANG"
	},
	Mozambique: {
		cowId: "541",
		name: "Mozambique",
		shortName: "MZM"
	},
	Zambia: {
		cowId: "551",
		name: "Zambia",
		shortName: "ZAM"
	},
	Zimbabwe: {
		cowId: "552",
		name: "Zimbabwe",
		shortName: "ZIM"
	},
	Malawi: {
		cowId: "553",
		name: "Malawi",
		shortName: "MAW"
	},
	"South Africa": {
		cowId: "560",
		name: "South Africa",
		shortName: "SAF"
	},
	Namibia: {
		cowId: "565",
		name: "Namibia",
		shortName: "NAM"
	},
	Lesotho: {
		cowId: "570",
		name: "Lesotho",
		shortName: "LES"
	},
	Botswana: {
		cowId: "571",
		name: "Botswana",
		shortName: "BOT"
	},
	Swaziland: {
		cowId: "572",
		name: "Swaziland",
		shortName: "SWA"
	},
	Madagascar: {
		cowId: "580",
		name: "Madagascar",
		shortName: "MAG"
	},
	Comoros: {
		cowId: "581",
		name: "Comoros",
		shortName: "COM"
	},
	Mauritius: {
		cowId: "590",
		name: "Mauritius",
		shortName: "MAS"
	},
	Seychelles: {
		cowId: "591",
		name: "Seychelles",
		shortName: "SEY"
	},
	Morocco: {
		cowId: "600",
		name: "Morocco",
		shortName: "MOR"
	},
	Algeria: {
		cowId: "615",
		name: "Algeria",
		shortName: "ALG"
	},
	Tunisia: {
		cowId: "616",
		name: "Tunisia",
		shortName: "TUN"
	},
	Libya: {
		cowId: "620",
		name: "Libya",
		shortName: "LIB"
	},
	Sudan: {
		cowId: "625",
		name: "Sudan",
		shortName: "SUD"
	},
	"South Sudan": {
		cowId: "626",
		name: "South Sudan",
		shortName: "SSD"
	},
	Iran: {
		cowId: "630",
		name: "Iran",
		shortName: "IRN"
	},
	Turkey: {
		cowId: "640",
		name: "Turkey",
		shortName: "TUR"
	},
	Iraq: {
		cowId: "645",
		name: "Iraq",
		shortName: "IRQ"
	},
	Egypt: {
		cowId: "651",
		name: "Egypt",
		shortName: "EGY"
	},
	Syria: {
		cowId: "652",
		name: "Syria",
		shortName: "SYR"
	},
	Lebanon: {
		cowId: "660",
		name: "Lebanon",
		shortName: "LEB"
	},
	Jordan: {
		cowId: "663",
		name: "Jordan",
		shortName: "JOR"
	},
	Israel: {
		cowId: "666",
		name: "Israel",
		shortName: "ISR"
	},
	"Saudi Arabia": {
		cowId: "670",
		name: "Saudi Arabia",
		shortName: "SAU"
	},
	"Yemen Arab Republic": {
		cowId: "678",
		name: "Yemen Arab Republic",
		shortName: "YAR"
	},
	Yemen: {
		cowId: "679",
		name: "Yemen",
		shortName: "YEM"
	},
	"Yemen Peoples Republic": {
		cowId: "680",
		name: "Yemen Peoples Republic",
		shortName: "YPR"
	},
	Kuwait: {
		cowId: "690",
		name: "Kuwait",
		shortName: "KUW"
	},
	Bahrain: {
		cowId: "692",
		name: "Bahrain",
		shortName: "BAH"
	},
	Qatar: {
		cowId: "694",
		name: "Qatar",
		shortName: "QAT"
	},
	"United Arab Emirates": {
		cowId: "696",
		name: "United Arab Emirates",
		shortName: "UAE"
	},
	Oman: {
		cowId: "698",
		name: "Oman",
		shortName: "OMA"
	},
	Afghanistan: {
		cowId: "700",
		name: "Afghanistan",
		shortName: "AFG"
	},
	Turkmenistan: {
		cowId: "701",
		name: "Turkmenistan",
		shortName: "TKM"
	},
	Tajikistan: {
		cowId: "702",
		name: "Tajikistan",
		shortName: "TAJ"
	},
	Kyrgyzstan: {
		cowId: "703",
		name: "Kyrgyzstan",
		shortName: "KYR"
	},
	Uzbekistan: {
		cowId: "704",
		name: "Uzbekistan",
		shortName: "UZB"
	},
	Kazakhstan: {
		cowId: "705",
		name: "Kazakhstan",
		shortName: "KZK"
	},
	China: {
		cowId: "710",
		name: "China",
		shortName: "CHN"
	},
	Mongolia: {
		cowId: "712",
		name: "Mongolia",
		shortName: "MON"
	},
	Taiwan: {
		cowId: "713",
		name: "Taiwan",
		shortName: "TAW"
	},
	Korea: {
		cowId: "730",
		name: "Korea",
		shortName: "KOR"
	},
	"North Korea": {
		cowId: "731",
		name: "North Korea",
		shortName: "PRK"
	},
	"South Korea": {
		cowId: "732",
		name: "South Korea",
		shortName: "ROK"
	},
	Japan: {
		cowId: "740",
		name: "Japan",
		shortName: "JPN"
	},
	India: {
		cowId: "750",
		name: "India",
		shortName: "IND"
	},
	Bhutan: {
		cowId: "760",
		name: "Bhutan",
		shortName: "BHU"
	},
	Pakistan: {
		cowId: "770",
		name: "Pakistan",
		shortName: "PAK"
	},
	Bangladesh: {
		cowId: "771",
		name: "Bangladesh",
		shortName: "BNG"
	},
	Myanmar: {
		cowId: "775",
		name: "Myanmar",
		shortName: "MYA"
	},
	"Sri Lanka": {
		cowId: "780",
		name: "Sri Lanka",
		shortName: "SRI"
	},
	Maldives: {
		cowId: "781",
		name: "Maldives",
		shortName: "MAD"
	},
	Nepal: {
		cowId: "790",
		name: "Nepal",
		shortName: "NEP"
	},
	Thailand: {
		cowId: "800",
		name: "Thailand",
		shortName: "THI"
	},
	Cambodia: {
		cowId: "811",
		name: "Cambodia",
		shortName: "CAM"
	},
	Laos: {
		cowId: "812",
		name: "Laos",
		shortName: "LAO"
	},
	Vietnam: {
		cowId: "816",
		name: "Vietnam",
		shortName: "DRV"
	},
	"Republic of Vietnam": {
		cowId: "817",
		name: "Republic of Vietnam",
		shortName: "RVN"
	},
	Malaysia: {
		cowId: "820",
		name: "Malaysia",
		shortName: "MAL"
	},
	Singapore: {
		cowId: "830",
		name: "Singapore",
		shortName: "SIN"
	},
	Brunei: {
		cowId: "835",
		name: "Brunei",
		shortName: "BRU"
	},
	Philippines: {
		cowId: "840",
		name: "Philippines",
		shortName: "PHI"
	},
	Indonesia: {
		cowId: "850",
		name: "Indonesia",
		shortName: "INS"
	},
	"East Timor": {
		cowId: "860",
		name: "East Timor",
		shortName: "ETM"
	},
	Australia: {
		cowId: "900",
		name: "Australia",
		shortName: "AUL"
	},
	"Papua New Guinea": {
		cowId: "910",
		name: "Papua New Guinea",
		shortName: "PNG"
	},
	"New Zealand": {
		cowId: "920",
		name: "New Zealand",
		shortName: "NEW"
	},
	Vanuatu: {
		cowId: "935",
		name: "Vanuatu",
		shortName: "VAN"
	},
	"Solomon Islands": {
		cowId: "940",
		name: "Solomon Islands",
		shortName: "SOL"
	},
	Kiribati: {
		cowId: "946",
		name: "Kiribati",
		shortName: "KIR"
	},
	Tuvalu: {
		cowId: "947",
		name: "Tuvalu",
		shortName: "TUV"
	},
	Fiji: {
		cowId: "950",
		name: "Fiji",
		shortName: "FIJ"
	},
	Tonga: {
		cowId: "955",
		name: "Tonga",
		shortName: "TON"
	},
	Nauru: {
		cowId: "970",
		name: "Nauru",
		shortName: "NAU"
	},
	"Marshall Islands": {
		cowId: "983",
		name: "Marshall Islands",
		shortName: "MSI"
	},
	Palau: {
		cowId: "986",
		name: "Palau",
		shortName: "PAL"
	},
	"Federated States of Micronesia": {
		cowId: "987",
		name: "Federated States of Micronesia",
		shortName: "FSM"
	},
	Samoa: {
		cowId: "990",
		name: "Samoa",
		shortName: "WSM"
	}
};