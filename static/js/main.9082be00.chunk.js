(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,a,n){},162:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),o=n(10),m=n.n(o),r=(n(66),n(26)),l=n(27),s=n(31),c=n(28),u=n(19),d=n(30),h=(n(67),n(68),n(59)),v=n.n(h),N=n(60),g=n.n(N),b=n(37),k=n.n(b),p=n(54),f=n.n(p),y=n(56),S=n.n(y),E=n(57),w=n.n(E),C=n(29),j=(n(69),function(e){function a(e){var n;return Object(r.a)(this,a),(n=Object(s.a)(this,Object(c.a)(a).call(this,e))).componentWillUnmount=function(){console.log("asdf")},n.onClickNavigate=function(e){var a=n.props.details.numberInSurah,t=n.props.details.number,i=n.props.details.numberOfAyahs;switch(e.target.value){case"Next":a<i?a++:t<114?(t++,a=1):console.log("You are on the last Ayah of the last Surah"),console.log(t+":"+a);break;case"Prev":a>1?a--:t>1?t--:console.log("You are on the first Ayah of the first Surah"),console.log(t+":"+a);break;default:console.log("asd")}},n.state={},n}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.results,a=this.props.details;if(!this.props.results)return null;return i.a.createElement("div",{className:"listview-wrapper"},i.a.createElement("button",{hidden:!0,onClick:this.onClickNavigate,value:"Prev"},"prev"),i.a.createElement("section",{className:"titles-wrapper"},i.a.createElement("p",null,"Ref: ",i.a.createElement("span",null,a.number,":",a.numberInSurah)),i.a.createElement(function(){return i.a.createElement(C.a,{trigger:i.a.createElement("button",{value:"More Info"},"More Info"),on:"click",position:"right center",closeOnDocumentClick:!0},i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("h2",null,a.name),i.a.createElement("p",null,a.englishName," | ",a.englishNameTranslation),i.a.createElement("p",null,"Surah: ",a.number," | Ayah: ",a.numberInSurah))))},null)),i.a.createElement("button",{hidden:!0,onClick:this.onClickNavigate,value:"Next"},"next"),i.a.createElement(f.a,{component:"ul",disablePadding:!1,dense:!1},e.map(function(e,n){return i.a.createElement(S.a,{key:n,className:"no-padding"},i.a.createElement(w.a,{className:"verse-text"},"translation"===e.edition.type&&i.a.createElement("span",{className:"ayah-details"},e.edition.language),i.a.createElement("p",{className:"ar"===e.edition.language?"txt-arabic":""},e.text),"ar"===e.edition.language&&i.a.createElement("center",null,i.a.createElement("audio",{controls:"controls"},i.a.createElement("source",{src:a.audio,type:"audio/wav"}),"Your browser does not support the ",i.a.createElement("code",null,"audio")," element."))))})))}}]),a}(i.a.Component));n(157);var I=function(){return i.a.createElement("div",{className:"loader-wrapper"},i.a.createElement("p",null,"Loading..."))},O=n(58),T=function(e){function a(e){var n;return Object(r.a)(this,a),(n=Object(s.a)(this,Object(c.a)(a).call(this,e))).onClick=function(e){n.setState({preloader:!0});var a=n.state.inputVal;String(a).split(":").length<=1&&n.state.selectedSurah.number&&(a=n.state.selectedSurah.number+":"+a),a&&fetch("https://api.alquran.cloud/v1/ayah/"+a+"/editions/quran-simple-enhanced,en.asad,en.pickthall,ml.abdulhameed,ar.alafasy").then(function(e){return e.json()}).then(function(e){n.setState({searchError:"",rawData:e,searchBlockClass:"search-wrapper shrink"}),console.log(e),n.processData(e)}).catch(n.setState({preloader:!1,searchError:"err"}))},n.updateInputVal=function(e){n.setState({inputVal:e.target.value})},n.selectSurah=function(e){var a=[];n.setState({selectedSurah:null}),e.target.value>0&&(a=n.state.surahList.filter(function(a){return Number(a.number)===Number(e.target.value)}),n.setState({selectedSurah:a[0]})),console.log(a),n.setState({ayahDetails:{},mainResult:[],inputVal:1},function(){n.ayahInput.focus()})},n.changeSurah=function(e){console.log(e.target.value);var a=[];n.setState({selectedSurah:null}),e.target.value>0&&(a=n.state.surahList.filter(function(a){return Number(a.number)===Number(e.target.value)}),n.setState({selectedSurah:a[0]})),console.log(a),n.setState({ayahDetails:{},mainResult:[],inputVal:1},function(){n.ayahInput.focus()})},n.chkSelectChange=function(e){var a=e.target,t=Boolean(n.state.chkTrans.english),i=Boolean(n.state.chkTrans.malayalam);switch(console.log(e.target.value),a.value){case"english":t=!t,n.setState({chkTrans:{english:t,malayalam:i}},function(){console.log(n.state.chkTrans.elglish),a.className=t?"toggle-btn selected":"toggle-btn",n.state.rawData.status&&"OK"===n.state.rawData.status&&n.processData(n.state.rawData)});break;case"malayalam":i=!i,n.setState({chkTrans:{english:t,malayalam:i}},function(){console.log(n.state.chkTrans.malayalam),a.className=i?"toggle-btn selected":"toggle-btn",n.state.rawData.status&&"OK"===n.state.rawData.status&&n.processData(n.state.rawData)})}},n.state={mainResult:[],inputVal:"",ayahDetails:{},rawData:{},surahList:[],searchError:"",searchBlockClass:"search-wrapper",selectedSurah:{},preloader:!0,chkTrans:{english:!1,malayalam:!1}},n.handleLoad=n.handleLoad.bind(Object(u.a)(n)),n.chkSelectChange=n.chkSelectChange.bind(Object(u.a)(n)),n}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad)}},{key:"handleLoad",value:function(){var e=this;console.log(O),this.setState({preloader:!0}),fetch("https://api.alquran.cloud/v1/surah").then(function(e){return e.json()}).then(function(a){var n;n=a.data.map(function(e){return e}),e.setState({surahList:n,preloader:!1})}).catch(this.setState({preloader:!1,searchError:this.getErrMessage("list")}))}},{key:"searchForAyah",value:function(){var e=this,a=this.state.inputVal;fetch("https://api.alquran.cloud/v1/ayah/"+a+"/editions/quran-simple-enhanced,en.asad,en.pickthall,ml.abdulhameed,ar.alafasy").then(function(e){return e.json()}).then(function(a){e.setState({searchError:"",rawData:a,searchBlockClass:"search-wrapper shrink"}),console.log(a),e.processData(a)}).catch(this.setState({preloader:!1,searchError:"err"}))}},{key:"getErrMessage",value:function(e){var a=this.state.inputVal.split(":"),n=this.state.selectedSurah;return"list"===e?"Surah list data error":a.length>1?Number(a[0])>114||Number(a[0])<1?"Invalid Surah reference":n&&(Number(a[1])<1||Number(a[1])>Number(n.numberOfAyahs))?"Invalid Ayah number. Enter Ayah 1 through "+n.numberOfAyahs:"":Number(a[0])<1||Number(a[0])>60232?"Invalid Ayah number. Enter any from 1 to 60232":""}},{key:"processData",value:function(e){var a=this,n=[],t="",i=null;return this.setState({ayahDetails:{},mainResult:[]}),e.data.map(function(e){var o=null,m=!0;if(e.audio)""===t&&(t=e.audio);else{switch(o={edition:e.edition,text:e.text},e.edition.language){case"en":m=a.state.chkTrans.english;break;case"ml":m=a.state.chkTrans.malayalam;break;default:m=!0}m&&n.push(o),m=!0}return i||(i=e.surah,i=Object.assign(i,{hizbQuarter:e.hizbQuarter,juz:e.juz,manzil:e.manzil,ayahNumber:e.number,numberInSurah:e.numberInSurah,page:e.page,ruku:e.ruku,sajda:e.sajda})),!0}),t&&(i=Object.assign(i,{audio:t})),this.setState({ayahDetails:i,mainResult:n,preloader:!1}),!0}},{key:"findLang",value:function(e,a){var n=e.filter(function(e){return e.code===a});return!!n.length&&n[0]}},{key:"render",value:function(){var e,a=this;this.state.mainResult.length&&(e=i.a.createElement(j,{key:this.state.ayahDetails&&this.state.number,results:this.state.mainResult,details:this.state.ayahDetails}));var n=this.state.surahList;return i.a.createElement("div",{className:"page-wrapper"},i.a.createElement("header",null,i.a.createElement(v.a,{position:"static",color:"default"},i.a.createElement(g.a,null,i.a.createElement(k.a,{variant:"h1",size:"small",color:"inherit"},"Q-Search")))),i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("section",{className:this.state.searchBlockClass,id:"search-block"},i.a.createElement("div",{className:"row-flex ayah-input-wrapper"},i.a.createElement("div",{className:"col-flex"},i.a.createElement("label",{htmlFor:"surah-list"},"Surah:"),i.a.createElement(function(){return i.a.createElement(C.a,{trigger:i.a.createElement("button",{value:"Surahs",className:"surah-button"},"..."),on:"click",position:"center center",modal:!0,closeOnDocumentClick:!0},i.a.createElement("div",{className:"surah-wrapper"},i.a.createElement("h3",null,"Select Surah:"),i.a.createElement("ul",null,n.map(function(e){return i.a.createElement("li",{value:e.number,key:e.number,onClick:a.selectSurah},e.number," - ",e.englishName," ")}))))},null),this.state.selectedSurah.englishName&&i.a.createElement("label",{ref:function(e){a.surahLabel=e},className:"surah-name"},this.state.selectedSurah.englishName)),i.a.createElement("div",{className:"col-flex"},i.a.createElement("label",{htmlFor:"ayah-input"},"Ayah Number:"),i.a.createElement("input",{type:"number",value:this.state.inputVal,onChange:function(e){return a.updateInputVal(e)},placeholder:"Enter your search",ref:function(e){a.ayahInput=e},className:"input-ayah"}),this.state.selectedSurah.englishName&&i.a.createElement("label",{ref:function(e){a.surahLabel=e},className:"ayah-total"},"of ",this.state.selectedSurah.numberOfAyahs)),i.a.createElement("button",{type:"submit",onClick:this.onClick,value:"Search",className:"search-btn"},"Search")),i.a.createElement("div",{className:"trans-wrapper"},i.a.createElement("label",null,"Translations: "),i.a.createElement("button",{className:"toggle-btn",value:"english",onClick:this.chkSelectChange},"Eng"),i.a.createElement("button",{className:"toggle-btn",value:"malayalam",onClick:this.chkSelectChange},"Mal"))),e),this.state.preloader&&i.a.createElement(I,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e){e.exports=[{code:"ab",name:"Abkhaz",nativeName:"\u0430\u04a7\u0441\u0443\u0430"},{code:"aa",name:"Afar",nativeName:"Afaraf"},{code:"af",name:"Afrikaans",nativeName:"Afrikaans"},{code:"ak",name:"Akan",nativeName:"Akan"},{code:"sq",name:"Albanian",nativeName:"Shqip"},{code:"am",name:"Amharic",nativeName:"\u12a0\u121b\u122d\u129b"},{code:"ar",name:"Arabic",nativeName:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},{code:"an",name:"Aragonese",nativeName:"Aragon\xe9s"},{code:"hy",name:"Armenian",nativeName:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576"},{code:"as",name:"Assamese",nativeName:"\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"},{code:"av",name:"Avaric",nativeName:"\u0430\u0432\u0430\u0440 \u043c\u0430\u0446\u04c0, \u043c\u0430\u0433\u04c0\u0430\u0440\u0443\u043b \u043c\u0430\u0446\u04c0"},{code:"ae",name:"Avestan",nativeName:"avesta"},{code:"ay",name:"Aymara",nativeName:"aymar aru"},{code:"az",name:"Azerbaijani",nativeName:"az\u0259rbaycan dili"},{code:"bm",name:"Bambara",nativeName:"bamanankan"},{code:"ba",name:"Bashkir",nativeName:"\u0431\u0430\u0448\u04a1\u043e\u0440\u0442 \u0442\u0435\u043b\u0435"},{code:"eu",name:"Basque",nativeName:"euskara, euskera"},{code:"be",name:"Belarusian",nativeName:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"},{code:"bn",name:"Bengali",nativeName:"\u09ac\u09be\u0982\u09b2\u09be"},{code:"bh",name:"Bihari",nativeName:"\u092d\u094b\u091c\u092a\u0941\u0930\u0940"},{code:"bi",name:"Bislama",nativeName:"Bislama"},{code:"bs",name:"Bosnian",nativeName:"bosanski jezik"},{code:"br",name:"Breton",nativeName:"brezhoneg"},{code:"bg",name:"Bulgarian",nativeName:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"},{code:"my",name:"Burmese",nativeName:"\u1017\u1019\u102c\u1005\u102c"},{code:"ca",name:"Catalan; Valencian",nativeName:"Catal\xe0"},{code:"ch",name:"Chamorro",nativeName:"Chamoru"},{code:"ce",name:"Chechen",nativeName:"\u043d\u043e\u0445\u0447\u0438\u0439\u043d \u043c\u043e\u0442\u0442"},{code:"ny",name:"Chichewa; Chewa; Nyanja",nativeName:"chiChe\u0175a, chinyanja"},{code:"zh",name:"Chinese",nativeName:"\u4e2d\u6587 (Zh\u014dngw\xe9n), \u6c49\u8bed, \u6f22\u8a9e"},{code:"cv",name:"Chuvash",nativeName:"\u0447\u04d1\u0432\u0430\u0448 \u0447\u04d7\u043b\u0445\u0438"},{code:"kw",name:"Cornish",nativeName:"Kernewek"},{code:"co",name:"Corsican",nativeName:"corsu, lingua corsa"},{code:"cr",name:"Cree",nativeName:"\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"},{code:"hr",name:"Croatian",nativeName:"hrvatski"},{code:"cs",name:"Czech",nativeName:"\u010desky, \u010de\u0161tina"},{code:"da",name:"Danish",nativeName:"dansk"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;",nativeName:"\u078b\u07a8\u0788\u07ac\u0780\u07a8"},{code:"nl",name:"Dutch",nativeName:"Nederlands, Vlaams"},{code:"en",name:"English",nativeName:"English"},{code:"eo",name:"Esperanto",nativeName:"Esperanto"},{code:"et",name:"Estonian",nativeName:"eesti, eesti keel"},{code:"ee",name:"Ewe",nativeName:"E\u028begbe"},{code:"fo",name:"Faroese",nativeName:"f\xf8royskt"},{code:"fj",name:"Fijian",nativeName:"vosa Vakaviti"},{code:"fi",name:"Finnish",nativeName:"suomi, suomen kieli"},{code:"fr",name:"French",nativeName:"fran\xe7ais, langue fran\xe7aise"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular",nativeName:"Fulfulde, Pulaar, Pular"},{code:"gl",name:"Galician",nativeName:"Galego"},{code:"ka",name:"Georgian",nativeName:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"},{code:"de",name:"German",nativeName:"Deutsch"},{code:"el",name:"Greek, Modern",nativeName:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"},{code:"gn",name:"Guaran\xed",nativeName:"Ava\xf1e\u1ebd"},{code:"gu",name:"Gujarati",nativeName:"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"},{code:"ht",name:"Haitian; Haitian Creole",nativeName:"Krey\xf2l ayisyen"},{code:"ha",name:"Hausa",nativeName:"Hausa, \u0647\u064e\u0648\u064f\u0633\u064e"},{code:"he",name:"Hebrew (modern)",nativeName:"\u05e2\u05d1\u05e8\u05d9\u05ea"},{code:"hz",name:"Herero",nativeName:"Otjiherero"},{code:"hi",name:"Hindi",nativeName:"\u0939\u093f\u0928\u094d\u0926\u0940, \u0939\u093f\u0902\u0926\u0940"},{code:"ho",name:"Hiri Motu",nativeName:"Hiri Motu"},{code:"hu",name:"Hungarian",nativeName:"Magyar"},{code:"ia",name:"Interlingua",nativeName:"Interlingua"},{code:"id",name:"Indonesian",nativeName:"Bahasa Indonesia"},{code:"ie",name:"Interlingue",nativeName:"Originally called Occidental; then Interlingue after WWII"},{code:"ga",name:"Irish",nativeName:"Gaeilge"},{code:"ig",name:"Igbo",nativeName:"As\u1ee5s\u1ee5 Igbo"},{code:"ik",name:"Inupiaq",nativeName:"I\xf1upiaq, I\xf1upiatun"},{code:"io",name:"Ido",nativeName:"Ido"},{code:"is",name:"Icelandic",nativeName:"\xcdslenska"},{code:"it",name:"Italian",nativeName:"Italiano"},{code:"iu",name:"Inuktitut",nativeName:"\u1403\u14c4\u1483\u144e\u1450\u1466"},{code:"ja",name:"Japanese",nativeName:"\u65e5\u672c\u8a9e (\u306b\u307b\u3093\u3054\uff0f\u306b\u3063\u307d\u3093\u3054)"},{code:"jv",name:"Javanese",nativeName:"basa Jawa"},{code:"kl",name:"Kalaallisut, Greenlandic",nativeName:"kalaallisut, kalaallit oqaasii"},{code:"kn",name:"Kannada",nativeName:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"},{code:"kr",name:"Kanuri",nativeName:"Kanuri"},{code:"ks",name:"Kashmiri",nativeName:"\u0915\u0936\u094d\u092e\u0940\u0930\u0940, \u0643\u0634\u0645\u064a\u0631\u064a\u200e"},{code:"kk",name:"Kazakh",nativeName:"\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"},{code:"km",name:"Khmer",nativeName:"\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a"},{code:"ki",name:"Kikuyu, Gikuyu",nativeName:"G\u0129k\u0169y\u0169"},{code:"rw",name:"Kinyarwanda",nativeName:"Ikinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz",nativeName:"\u043a\u044b\u0440\u0433\u044b\u0437 \u0442\u0438\u043b\u0438"},{code:"kv",name:"Komi",nativeName:"\u043a\u043e\u043c\u0438 \u043a\u044b\u0432"},{code:"kg",name:"Kongo",nativeName:"KiKongo"},{code:"ko",name:"Korean",nativeName:"\ud55c\uad6d\uc5b4 (\u97d3\u570b\u8a9e), \uc870\uc120\ub9d0 (\u671d\u9bae\u8a9e)"},{code:"ku",name:"Kurdish",nativeName:"Kurd\xee, \u0643\u0648\u0631\u062f\u06cc\u200e"},{code:"kj",name:"Kwanyama, Kuanyama",nativeName:"Kuanyama"},{code:"la",name:"Latin",nativeName:"latine, lingua latina"},{code:"lb",name:"Luxembourgish, Letzeburgesch",nativeName:"L\xebtzebuergesch"},{code:"lg",name:"Luganda",nativeName:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger",nativeName:"Limburgs"},{code:"ln",name:"Lingala",nativeName:"Ling\xe1la"},{code:"lo",name:"Lao",nativeName:"\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"},{code:"lt",name:"Lithuanian",nativeName:"lietuvi\u0173 kalba"},{code:"lu",name:"Luba-Katanga",nativeName:""},{code:"lv",name:"Latvian",nativeName:"latvie\u0161u valoda"},{code:"gv",name:"Manx",nativeName:"Gaelg, Gailck"},{code:"mk",name:"Macedonian",nativeName:"\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a"},{code:"mg",name:"Malagasy",nativeName:"Malagasy fiteny"},{code:"ms",name:"Malay",nativeName:"bahasa Melayu, \u0628\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e"},{code:"ml",name:"Malayalam",nativeName:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"},{code:"mt",name:"Maltese",nativeName:"Malti"},{code:"mi",name:"M\u0101ori",nativeName:"te reo M\u0101ori"},{code:"mr",name:"Marathi (Mar\u0101\u1e6dh\u012b)",nativeName:"\u092e\u0930\u093e\u0920\u0940"},{code:"mh",name:"Marshallese",nativeName:"Kajin M\u0327aje\u013c"},{code:"mn",name:"Mongolian",nativeName:"\u043c\u043e\u043d\u0433\u043e\u043b"},{code:"na",name:"Nauru",nativeName:"Ekakair\u0169 Naoero"},{code:"nv",name:"Navajo, Navaho",nativeName:"Din\xe9 bizaad, Din\xe9k\u02bceh\u01f0\xed"},{code:"nb",name:"Norwegian Bokm\xe5l",nativeName:"Norsk bokm\xe5l"},{code:"nd",name:"North Ndebele",nativeName:"isiNdebele"},{code:"ne",name:"Nepali",nativeName:"\u0928\u0947\u092a\u093e\u0932\u0940"},{code:"ng",name:"Ndonga",nativeName:"Owambo"},{code:"nn",name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},{code:"no",name:"Norwegian",nativeName:"Norsk"},{code:"ii",name:"Nuosu",nativeName:"\ua188\ua320\ua4bf Nuosuhxop"},{code:"nr",name:"South Ndebele",nativeName:"isiNdebele"},{code:"oc",name:"Occitan",nativeName:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa",nativeName:"\u140a\u14c2\u1511\u14c8\u142f\u14a7\u140e\u14d0"},{code:"cu",name:"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",nativeName:"\u0469\u0437\u044b\u043a\u044a \u0441\u043b\u043e\u0432\u0463\u043d\u044c\u0441\u043a\u044a"},{code:"om",name:"Oromo",nativeName:"Afaan Oromoo"},{code:"or",name:"Oriya",nativeName:"\u0b13\u0b21\u0b3c\u0b3f\u0b06"},{code:"os",name:"Ossetian, Ossetic",nativeName:"\u0438\u0440\u043e\u043d \xe6\u0432\u0437\u0430\u0433"},{code:"pa",name:"Panjabi, Punjabi",nativeName:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40, \u067e\u0646\u062c\u0627\u0628\u06cc\u200e"},{code:"pi",name:"P\u0101li",nativeName:"\u092a\u093e\u0934\u093f"},{code:"fa",name:"Persian",nativeName:"\u0641\u0627\u0631\u0633\u06cc"},{code:"pl",name:"Polish",nativeName:"polski"},{code:"ps",name:"Pashto, Pushto",nativeName:"\u067e\u069a\u062a\u0648"},{code:"pt",name:"Portuguese",nativeName:"Portugu\xeas"},{code:"qu",name:"Quechua",nativeName:"Runa Simi, Kichwa"},{code:"rm",name:"Romansh",nativeName:"rumantsch grischun"},{code:"rn",name:"Kirundi",nativeName:"kiRundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan",nativeName:"rom\xe2n\u0103"},{code:"ru",name:"Russian",nativeName:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a"},{code:"sa",name:"Sanskrit (Sa\u1e41sk\u1e5bta)",nativeName:"\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"},{code:"sc",name:"Sardinian",nativeName:"sardu"},{code:"sd",name:"Sindhi",nativeName:"\u0938\u093f\u0928\u094d\u0927\u0940, \u0633\u0646\u068c\u064a\u060c \u0633\u0646\u062f\u06be\u06cc\u200e"},{code:"se",name:"Northern Sami",nativeName:"Davvis\xe1megiella"},{code:"sm",name:"Samoan",nativeName:"gagana faa Samoa"},{code:"sg",name:"Sango",nativeName:"y\xe2ng\xe2 t\xee s\xe4ng\xf6"},{code:"sr",name:"Serbian",nativeName:"\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a"},{code:"gd",name:"Scottish Gaelic; Gaelic",nativeName:"G\xe0idhlig"},{code:"sn",name:"Shona",nativeName:"chiShona"},{code:"si",name:"Sinhala, Sinhalese",nativeName:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"},{code:"sk",name:"Slovak",nativeName:"sloven\u010dina"},{code:"sl",name:"Slovene",nativeName:"sloven\u0161\u010dina"},{code:"so",name:"Somali",nativeName:"Soomaaliga, af Soomaali"},{code:"st",name:"Southern Sotho",nativeName:"Sesotho"},{code:"es",name:"Spanish; Castilian",nativeName:"espa\xf1ol, castellano"},{code:"su",name:"Sundanese",nativeName:"Basa Sunda"},{code:"sw",name:"Swahili",nativeName:"Kiswahili"},{code:"ss",name:"Swati",nativeName:"SiSwati"},{code:"sv",name:"Swedish",nativeName:"svenska"},{code:"ta",name:"Tamil",nativeName:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"},{code:"te",name:"Telugu",nativeName:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"},{code:"tg",name:"Tajik",nativeName:"\u0442\u043e\u04b7\u0438\u043a\u04e3, to\u011fik\u012b, \u062a\u0627\u062c\u06cc\u06a9\u06cc\u200e"},{code:"th",name:"Thai",nativeName:"\u0e44\u0e17\u0e22"},{code:"ti",name:"Tigrinya",nativeName:"\u1275\u130d\u122d\u129b"},{code:"bo",name:"Tibetan Standard, Tibetan, Central",nativeName:"\u0f56\u0f7c\u0f51\u0f0b\u0f61\u0f72\u0f42"},{code:"tk",name:"Turkmen",nativeName:"T\xfcrkmen, \u0422\u04af\u0440\u043a\u043c\u0435\u043d"},{code:"tl",name:"Tagalog",nativeName:"Wikang Tagalog, \u170f\u1712\u1703\u1705\u1714 \u1706\u1704\u170e\u1713\u1704\u1714"},{code:"tn",name:"Tswana",nativeName:"Setswana"},{code:"to",name:"Tonga (Tonga Islands)",nativeName:"faka Tonga"},{code:"tr",name:"Turkish",nativeName:"T\xfcrk\xe7e"},{code:"ts",name:"Tsonga",nativeName:"Xitsonga"},{code:"tt",name:"Tatar",nativeName:"\u0442\u0430\u0442\u0430\u0440\u0447\u0430, tatar\xe7a, \u062a\u0627\u062a\u0627\u0631\u0686\u0627\u200e"},{code:"tw",name:"Twi",nativeName:"Twi"},{code:"ty",name:"Tahitian",nativeName:"Reo Tahiti"},{code:"ug",name:"Uighur, Uyghur",nativeName:"Uy\u01a3urq\u0259, \u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5\u200e"},{code:"uk",name:"Ukrainian",nativeName:"\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},{code:"ur",name:"Urdu",nativeName:"\u0627\u0631\u062f\u0648"},{code:"uz",name:"Uzbek",nativeName:"zbek, \u040e\u0437\u0431\u0435\u043a, \u0623\u06c7\u0632\u0628\u06d0\u0643\u200e"},{code:"ve",name:"Venda",nativeName:"Tshiven\u1e13a"},{code:"vi",name:"Vietnamese",nativeName:"Ti\u1ebfng Vi\u1ec7t"},{code:"vo",name:"Volap\xfck",nativeName:"Volap\xfck"},{code:"wa",name:"Walloon",nativeName:"Walon"},{code:"cy",name:"Welsh",nativeName:"Cymraeg"},{code:"wo",name:"Wolof",nativeName:"Wollof"},{code:"fy",name:"Western Frisian",nativeName:"Frysk"},{code:"xh",name:"Xhosa",nativeName:"isiXhosa"},{code:"yi",name:"Yiddish",nativeName:"\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"},{code:"yo",name:"Yoruba",nativeName:"Yor\xf9b\xe1"},{code:"za",name:"Zhuang, Chuang",nativeName:"Sa\u026f cue\u014b\u0185, Saw cuengh"}]},61:function(e,a,n){e.exports=n(162)},66:function(e,a,n){},67:function(e,a,n){},69:function(e,a,n){}},[[61,1,2]]]);
//# sourceMappingURL=main.9082be00.chunk.js.map