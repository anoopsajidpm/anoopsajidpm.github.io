(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t(253)},105:function(e,a,t){},106:function(e,a,t){},108:function(e,a,t){},253:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),c=(t(105),t(34)),o=t(35),i=t(37),u=t(36),h=t(38),m=(t(106),t(107),t(98)),d=t.n(m),p=t(96),g=t.n(p),E=t(97),b=t.n(E),f=t(33),k=t.n(f),v=t(99),w=t.n(v),y=t(54),C=t.n(y),N=t(55),S=t.n(N),j=t(53),O=t.n(j),D=t(94),I=t.n(D),T=t(95),x=t.n(T),z=t(92),V=(t(108),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).componentWillUnmount=function(){console.log("asdf")},t.onClickNavigate=function(e){var a=t.props.details.numberInSurah,n=t.props.details.number,r=t.props.details.numberOfAyahs;switch(e.target.value){case"Next":a<r?a++:n<114?(n++,a=1):console.log("You are on the last Ayah of the last Surah"),console.log(n+":"+a);break;case"Prev":a>1?a--:n>1?n--:console.log("You are on the first Ayah of the first Surah"),console.log(n+":"+a);break;default:console.log("asd")}},t.state={},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.results,a=this.props.details;console.log(a);return r.a.createElement("div",{className:"listview-wrapper"},r.a.createElement("button",{hidden:!0,onClick:this.onClickNavigate,value:"Prev"},"prev"),r.a.createElement("section",{className:"titles-wrapper"},r.a.createElement("p",null,"In Qur'an: ",r.a.createElement("span",null,a.ayahNumber),r.a.createElement("br",null),"In Surah: ",r.a.createElement("span",null,a.number,":",a.numberInSurah)),r.a.createElement(function(){return r.a.createElement(z.a,{trigger:r.a.createElement("button",{value:"More Info"},"More Info"),on:"click",position:"left center",closeOnDocumentClick:!0},r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h2",null,a.name),r.a.createElement("p",null,a.englishName," | ",a.englishNameTranslation),r.a.createElement("p",null,"Surah: ",a.number," | Ayah: ",a.numberInSurah))))},null)),r.a.createElement("button",{hidden:!0,onClick:this.onClickNavigate,value:"Next"},"next"),r.a.createElement(O.a,{component:"ul",disablePadding:!1,dense:!1},e.map(function(e,t){return r.a.createElement(I.a,{key:t,className:"no-padding"},r.a.createElement(x.a,{className:"verse-text"},"translation"===e.edition.type&&r.a.createElement("span",{className:"ayah-details"},e.edition.englishName),r.a.createElement("p",{className:"ar"===e.edition.language?"txt-arabic":""},e.text),"ar"===e.edition.language&&r.a.createElement("center",null,r.a.createElement("audio",{controls:"controls"},r.a.createElement("source",{src:a.audio,type:"audio/wav"}),"Your browser does not support the ",r.a.createElement("code",null,"audio")," element."))))})))}}]),a}(r.a.Component)),R=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).onClick=function(e){var a=t.state.inputVal;fetch("https://api.alquran.cloud/v1/ayah/"+a+"/editions/quran-simple-enhanced,en.asad,en.pickthall,ml.abdulhameed,ar.alafasy").then(function(e){return e.json()}).then(function(e){t.state.searchError=!1,t.setState({rawData:e}),t.state.searchBlockClass="search-wrapper shrink",t.processData(e)}).catch(console.log)},t.updateInputVal=function(e){t.setState({inputVal:e.target.value})},t.chkSelectChange=function(e){switch(e.target.value){case"eng":t.state.chkTrans.english=!t.state.chkTrans.english;break;case"mlm":t.state.chkTrans.malayalam=!t.state.chkTrans.malayalam}t.state.rawData.status&&"OK"===t.state.rawData.status&&t.processData(t.state.rawData)},t.state={mainResult:[],inputVal:"",ayahDetails:{},rawData:{},searchError:!1,searchBlockClass:"search-wrapper",chkTrans:{english:!1,malayalam:!1}},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"processData",value:function(e){var a=this,t=[],n="",r=null;this.setState({ayahDetails:{},mainResult:[]}),e.data.map(function(e){var l=null,s=!0;if(e.audio)""===n&&(n=e.audio);else{switch(l={edition:e.edition,text:e.text},e.edition.language){case"en":s=a.state.chkTrans.english;break;case"ml":s=a.state.chkTrans.malayalam}s&&t.push(l),s=!0}r||(r=e.surah,r=Object.assign(r,{hizbQuarter:e.hizbQuarter,juz:e.juz,manzil:e.manzil,ayahNumber:e.number,numberInSurah:e.numberInSurah,page:e.page,ruku:e.ruku,sajda:e.sajda}))}),n&&(r=Object.assign(r,{audio:n})),this.setState({ayahDetails:r}),this.setState({mainResult:t})}},{key:"render",value:function(){var e,a=this;return this.state.mainResult.length?e=r.a.createElement(V,{results:this.state.mainResult,details:this.state.ayahDetails}):this.state.searchError&&(e=r.a.createElement("p",{className:"error-txt"},"The Referrence entered is Invalid")),r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("header",null,r.a.createElement(g.a,{position:"static",color:"default"},r.a.createElement(b.a,null,r.a.createElement(k.a,{variant:"h1",size:"small",color:"inherit"},"Q-Search")))),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("section",{className:this.state.searchBlockClass,id:"search-block"},r.a.createElement(d.a,{id:"standard-error",label:"Enter your search reference (E.g. 2.263)",placeholder:"Enter search",defaultValue:this.state.inputVal,margin:"normal",autoFocus:!0,onChange:function(e){return a.updateInputVal(e)},fullWidth:!0}),r.a.createElement(w.a,{row:!0},r.a.createElement("p",null,r.a.createElement("strong",null,"Trans: \xa0")),r.a.createElement(C.a,{value:"eng",control:r.a.createElement(S.a,{color:"primary"}),label:"English",labelPlacement:"end",checked:this.state.chkTrans.english,onChange:function(e){return a.chkSelectChange(e)}}),r.a.createElement(C.a,{value:"mlm",control:r.a.createElement(S.a,{color:"primary"}),label:"Malayalam",labelPlacement:"end",checked:this.state.chkTrans.malayalam,onChange:function(e){return a.chkSelectChange(e)}}),r.a.createElement("button",{onClick:this.onClick,value:"Search"},"Search"))),e))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.024ef4a9.chunk.js.map