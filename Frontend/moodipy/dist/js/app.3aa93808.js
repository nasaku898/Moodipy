(function(e){function t(t){for(var o,r,c=t[0],s=t[1],d=t[2],u=0,b=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0301":function(e,t,n){"use strict";n("c31f")},"08e8":function(e,t,n){e.exports=n.p+"img/moodipyLogo.8b5131da.png"},1027:function(e,t,n){"use strict";n("17de")},"17de":function(e,t,n){},2342:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function i(e,t,n,i,a,r){var c=Object(o["y"])("NavBar"),s=Object(o["y"])("router-view");return Object(o["r"])(),Object(o["d"])("div",null,[Object(o["h"])(c),Object(o["h"])(s)])}var a=n("08e8"),r=n.n(a),c=Object(o["H"])("data-v-ec8d14ee");Object(o["u"])("data-v-ec8d14ee");var s={id:"menubar"},d=Object(o["h"])("img",{id:"logo",src:r.a,alt:"Moodipy Logo"},null,-1),l=Object(o["h"])("p",{id:"name"},"MOODIPY",-1),u=Object(o["h"])("button",{id:"about"},"About",-1);Object(o["s"])();var b=c((function(e,t,n,i,a,r){var b=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["d"])("div",s,[Object(o["h"])(b,{to:"/",class:"link"},{default:c((function(){return[d,l]})),_:1}),Object(o["h"])(b,{to:"/about",class:"link"},{default:c((function(){return[u]})),_:1})])})),p={name:"NavBar"};n("da4b");p.render=b,p.__scopeId="data-v-ec8d14ee";var h=p,f={name:"App",components:{NavBar:h},data:function(){return{}},methods:{}};n("1027");f.render=i;var m=f,O=n("6c02"),j=(n("b64b"),Object(o["H"])("data-v-8dbe1eee"));Object(o["u"])("data-v-8dbe1eee");var y={class:"container"},v={id:"frame117"},g=Object(o["h"])("h1",{id:"slogan"},"Music adapted to your mood",-1),w=Object(o["h"])("p",{id:"instruction"},[Object(o["g"])(" 1. Upload an image of your face "),Object(o["h"])("br"),Object(o["g"])(" 2. We'll provide you with a playlist based on your mood ")],-1),k={htmlFor:"imgSelect"},E={id:"file"},I={id:"file-wrapper"},S=Object(o["h"])("p",{id:"select-file"},"Select a file",-1),A={key:0,id:"select-file-description"},x={key:1,id:"select-file-description"},C={key:0,class:"btn",type:"submit"},P={key:0,id:"feedbackClick"},T={id:"playlist-result"},F={id:"playlist"},N={key:1,id:"error-msg"};Object(o["s"])();var D=j((function(e,t,n,i,a,r){var c=Object(o["y"])("Button"),s=Object(o["y"])("router-link"),d=Object(o["y"])("playlist-carousel");return Object(o["r"])(),Object(o["d"])("div",y,[Object(o["h"])("div",v,[g,w,Object(o["h"])("form",{onSubmit:t[3]||(t[3]=function(){return r.retrievePlaylists&&r.retrievePlaylists.apply(r,arguments)})},[Object(o["h"])("input",{type:"file",id:"imgSelect",style:{display:"none"},accept:".png, .jpg",onChange:t[1]||(t[1]=function(){return r.getFileName&&r.getFileName.apply(r,arguments)})},null,32),Object(o["h"])("label",k,[Object(o["h"])("div",E,[Object(o["h"])("div",I,[S,a.fileName?(Object(o["r"])(),Object(o["d"])("p",A,Object(o["A"])(a.fileName),1)):(Object(o["r"])(),Object(o["d"])("p",x," PNG, jpg, gif files up to 10 MB in size are available for download "))])])]),a.fileName?(Object(o["r"])(),Object(o["d"])("button",C,"Search")):Object(o["e"])("",!0),a.fileName?(Object(o["r"])(),Object(o["d"])("button",{key:1,class:"btn",onClick:t[2]||(t[2]=function(){return r.removeFile&&r.removeFile.apply(r,arguments)})}," Delete file ")):Object(o["e"])("",!0)],32),Object.keys(a.playlists).length>0?(Object(o["r"])(),Object(o["d"])("div",P,[Object(o["h"])(s,{to:"/feedback"},{default:j((function(){return[Object(o["h"])(c,{text:"View details and give feedback",background:"#6E41E2",color:"white"})]})),_:1})])):Object(o["e"])("",!0)]),Object(o["h"])("div",T,[Object(o["h"])("p",F,"Playlists "+Object(o["A"])(e.$store.state.emotionDetected),1),Object.keys(a.playlists).length>0?(Object(o["r"])(),Object(o["d"])(d,{key:0,id:"playlist-carousel",playlists:a.playlists},null,8,["playlists"])):Object(o["e"])("",!0),a.errorMsg?(Object(o["r"])(),Object(o["d"])("p",N,Object(o["A"])(a.errorMsg),1)):Object(o["e"])("",!0)])])})),M=n("1da1"),_=(n("96cf"),n("1276"),n("ac1f"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d3b7"),Object(o["H"])("data-v-7f8965a4"));Object(o["u"])("data-v-7f8965a4");var $={"playlist-carousel-wrapper":""};Object(o["s"])();var R=_((function(e,t,n,i,a,r){var c=Object(o["y"])("playlist"),s=Object(o["y"])("slide"),d=Object(o["y"])("navigation"),l=Object(o["y"])("pagination"),u=Object(o["y"])("carousel");return Object(o["r"])(),Object(o["d"])("div",$,[Object(o["h"])(u,{"items-to-show":3.5},{addons:_((function(){return[Object(o["h"])(d),Object(o["h"])(l)]})),default:_((function(){return[(Object(o["r"])(),Object(o["d"])(o["a"],null,Object(o["x"])(10,(function(e){return Object(o["h"])(s,{key:e,id:"spotify-playlist"+e},{default:_((function(){return[Object(o["h"])("div",{onClick:t[1]||(t[1]=function(e){return r.focusPlaylist(e)}),id:"bob"},[Object(o["h"])(c,{playlist:n.playlists[e-1],appendIframe:r.appendIframeSrc},null,8,["playlist","appendIframe"])])]})),_:2},1032,["id"])})),64))]})),_:1},8,["items-to-show"]),a.iframeSrc?(Object(o["r"])(),Object(o["d"])("iframe",{key:0,src:a.iframeSrc,width:"700",height:"250",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"},null,8,["src"])):Object(o["e"])("",!0)])})),L=(n("07ac"),n("4001"),n("0b81")),U=(n("b0c0"),Object(o["H"])("data-v-799ca21a"));Object(o["u"])("data-v-799ca21a");var B={id:"playlist-wrapper"},G={id:"playlist-canvas"},H={id:"playlist-name"};Object(o["s"])();var W=U((function(e,t,n,i,a,r){return Object(o["r"])(),Object(o["d"])("div",B,[Object(o["h"])("div",G,[Object(o["h"])("img",{onClick:t[1]||(t[1]=function(e){return n.appendIframe(n.playlist.external_urls.spotify)}),src:n.playlist.images[0].url},null,8,["src"]),Object(o["h"])("p",H,Object(o["A"])(n.playlist.name),1)])])})),Y={name:"Playlist",props:{playlist:Object,appendIframe:Function}};n("d331");Y.render=W,Y.__scopeId="data-v-799ca21a";var Q=Y,V={name:"PlaylistCarousel",props:{playlists:Array},components:{Carousel:L["a"],Slide:L["d"],Pagination:L["c"],Navigation:L["b"],Playlist:Q},data:function(){return{iframeSrc:"",currentFocus:void 0}},methods:{appendIframeSrc:function(e){var t="https://open.spotify.com/embed/",n=e.split("https://open.spotify.com/");t+=n[1],this.iframeSrc=t},focusPlaylist:function(e){e.preventDefault();for(var t=Object.values(e.path),n=!1,o=0,i=0;i<t.length;i++)if("playlist-canvas"===t[i].id){n=!0,o=i;break}n&&(this.currentFocus&&(this.currentFocus.style=""),t[o].style="border: solid #6e41e2 2px",this.currentFocus=t[o])}}};n("ad5b"),n("c1d5");V.render=R,V.__scopeId="data-v-7f8965a4";var q=V,K=Object(o["H"])("data-v-83c546de"),z=K((function(e,t,n,i,a,r){return Object(o["r"])(),Object(o["d"])("button",{id:"my-btn",style:{background:n.background,color:n.color}},Object(o["A"])(n.text),5)})),J={name:"Button",props:{text:String,background:String,color:String}};n("747a");J.render=z,J.__scopeId="data-v-83c546de";var X=J,Z="https://moodipy-backend.herokuapp.com",ee=n("bc3a").default,te=Z,ne={name:"MusicPage",data:function(){return{fileName:"",playlists:[],errorMsg:""}},components:{PlaylistCarousel:q,Button:X},methods:{retrievePlaylists:function(e){var t=this;e.preventDefault();var n=e.target.imgSelect.files[0],o=new FileReader;o.readAsDataURL(n),o.onload=Object(M["a"])(regeneratorRuntime.mark((function e(){var n,i,a,r,c,s,d,l,u,b,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=o.result,i=";base64,",a=n.split(i),r=a[0].split(":")[1],c=window.atob(a[1]),s=c.length,d=new Uint8Array(s),l=0;l<s;++l)d[l]=c.charCodeAt(l);return u=new Blob([d],{type:r}),e.prev=9,e.next=12,ee.post("https://soen357.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_04&returnRecognitionModel=false&detectionModel=detection_01&faceIdTimeToLive=86400",u,{headers:{"Ocp-Apim-Subscription-Key":"eb726af9045746c888069e4d6b9f4964","Content-Type":"application/octet-stream"},params:{returnFaceId:!0,returnFaceLandmarks:!1,returnFaceAttributes:"age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"}});case 12:return b=e.sent,t.$store.commit("setEmotionQueried",b.data[0].faceAttributes.emotion),e.next=16,ee.post("".concat(te,"/spotify/playlist/emotion"),b.data[0].faceAttributes.emotion);case 16:p=e.sent,t.$store.commit("setEmotionDetected",p.data.emotionDetected),t.errorMsg="",t.playlists=p.data.body.playlists.items,e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](9),e.t0.message?t.errorMsg=e.t0.message:t.errorMsg="Unexpected Error";case 25:case"end":return e.stop()}}),e,null,[[9,22]])})))},getFileName:function(){this.fileName=document.getElementById("imgSelect").value.split(/(\\|\/)/g).pop()},removeFile:function(){document.getElementById("imgSelect").value="",this.getFileName()}},beforeMount:function(){this.$store.state.initialEmotion||jt.push("/")}};n("adb9");ne.render=D,ne.__scopeId="data-v-8dbe1eee";var oe=ne,ie=Object(o["H"])("data-v-cc6abaf4");Object(o["u"])("data-v-cc6abaf4");var ae={id:"frame117"},re=Object(o["h"])("h1",{id:"title"},"Moodipy: playlists adapted to your mood",-1),ce=Object(o["h"])("p",{id:"description"}," Our goal is to help people identify their emotions through music ",-1),se={key:0,id:"errorMsg"},de={key:1,class:"modal"},le=Object(o["h"])("p",{class:"disclaimer-text",style:{"font-weight":"1000"}}," This app is for research purposes and it requires a Spotify account. ",-1),ue=Object(o["h"])("p",{class:"disclaimer-text"}," Moodipy puts the confidentiality of the user at a high priority. That is why your Spotify account's information and your picture will not be saved in our application and will not be trackable. ",-1),be=Object(o["h"])("p",{class:"disclaimer-text"}," Please click the button to be redirected to Spotify login page ",-1),pe=Object(o["h"])("br",null,null,-1),he=Object(o["g"])(" "),fe=Object(o["h"])("br",null,null,-1);Object(o["s"])();var me=ie((function(e,t,n,i,a,r){return Object(o["r"])(),Object(o["d"])("div",ae,[re,ce,Object(o["G"])(Object(o["h"])("input",{id:"input-box","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.inputEmotion=t}),placeholder:"Type your current mood"},null,512),[[o["C"],e.inputEmotion]]),0==a.validEntry?(Object(o["r"])(),Object(o["d"])("div",se," *Please enter a word or a group of word ")):Object(o["e"])("",!0),a.spotifyLoggedIn?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("div",de,[le,ue,be,Object(o["h"])("button",{class:"btn",onClick:t[2]||(t[2]=function(e){return r.redirectToSpotifyLogin()})},"Login")])),pe,he,fe,Object(o["h"])("button",{class:"btn",onClick:t[3]||(t[3]=function(t){return r.changeEmotion(e.inputEmotion)})}," Get Started ")])})),Oe=n("bc3a"),je=n.n(Oe),ye=Z,ve={name:"OnboardingPage",props:["initialEmotion"],data:function(){return{validEntry:!0,spotifyLoggedIn:!0}},methods:{changeEmotion:function(e){this.hasNumber(e)||void 0===this.inputEmotion||""===this.inputEmotion?this.validEntry=!1:(this.$store.commit("updateInitialEmotion",e),this.validEntry=!0,localStorage.setItem("initialEmotion",e),jt.push("/music"))},hasNumber:function(e){return/\d/.test(e)},redirectToSpotifyLogin:function(){window.location="".concat(ye,"/spotify/login")}},beforeMount:function(){var e=this;je.a.get("".concat(ye,"/spotify/status")).catch((function(t){404===t.response.status&&(e.spotifyLoggedIn=!1)}))}};n("0301");ve.render=me,ve.__scopeId="data-v-cc6abaf4";var ge=ve,we=Object(o["H"])("data-v-3a61dd82");Object(o["u"])("data-v-3a61dd82");var ke={id:"frame117"},Ee=Object(o["h"])("h1",{id:"title"},"About Us",-1),Ie=Object(o["h"])("br",null,null,-1),Se=Object(o["h"])("p",{id:"description"},[Object(o["g"])(" Moodipy is a free to use application developped by five university students. The goal of this application is to help people identify their emotions. At the same time, the goal is to show music playlists based on the mood of the user. "),Object(o["h"])("br"),Object(o["h"])("br"),Object(o["g"])(" Emotions help us know what we want or don’t want. Knowing our emotions allow us to be in control of ourselves and have a clearer state of mind. This provides us with the capability of making decisions rationally and not a decision motivated by some sort of unknown emotion. "),Object(o["h"])("br"),Object(o["h"])("br"),Object(o["g"])(" This application was developped for research purposes. The information provided to the application is not saved, except if the user voluntarily agrees to share their feedback. The picture uploaded to this website are not saved. ")],-1);Object(o["s"])();var Ae=we((function(e,t,n,i,a,r){return Object(o["r"])(),Object(o["d"])("div",ke,[Ee,Ie,Se])})),xe={name:"AboutPage"};n("5b54");xe.render=Ae,xe.__scopeId="data-v-3a61dd82";var Ce=xe,Pe=Object(o["H"])("data-v-1f3b603c");Object(o["u"])("data-v-1f3b603c");var Te={class:"container"},Fe=Object(o["h"])("h1",{id:"title"},"Your Feedback",-1),Ne={id:"emotions"},De=Object(o["h"])("p",{id:"emoDetected"},"Emotions detected",-1),Me={class:"box"},_e={class:"lang"},$e={class:"percent"},Re={class:"bar"},Le={id:"center-self"},Ue=Object(o["h"])("p",{id:"heading6"},"You said your current mood was:",-1),Be={id:"parag2"},Ge={key:0,id:"center-self"},He=Object(o["h"])("p",{id:"heading6"}," We have a couple more questions to ask you, however, we need your consent. ",-1),We=Object(o["h"])("p",{id:"parag2"},[Object(o["g"])(" To give your consent, click on the “Give consent” button below. You will be prompt with our consent form. "),Object(o["h"])("br"),Object(o["h"])("br"),Object(o["g"])(' If you do not want to answer more questions, simply click on “I do not want to give consent" and you will be brought back to the main page ')],-1),Ye={class:"buttons"},Qe={key:0,class:"modal"},Ve=Object(o["f"])('<p id="heading6" data-v-1f3b603c>Consent Form</p><p id="consent-form" data-v-1f3b603c> CONSENT TO PARTICIPATE IN Course Project Research <br data-v-1f3b603c><br data-v-1f3b603c> I understand that I have been asked to participate in a research project being conducted under the supervision of Marta Kersten of Computer Science and Software Engineering of Concordia University (x5830, marta.kersten@concordia.ca). <br data-v-1f3b603c><br data-v-1f3b603c> A.PURPOSE <br data-v-1f3b603c> I have been informed that the purpose of the research is to look at the user experience and user interface (UX and UI) design for differenttypes of technologies (e.g. VR, websites, wearables, etc.). Subjects in the study will be asked how they would like to use a personal data market place, what functionalities are important, what goals they would have in using such a market place etc. <br data-v-1f3b603c><br data-v-1f3b603c> B.PROCEDURES <br data-v-1f3b603c> I understand that by participating in the following research I will be requested to answer questions and discuss your feelings towards and opinions of different technologies (e.g. AR, wearables, online stores, etc.). I understand I will be asked about myperception and use of different websites, technologies, etc., what kind of functionality they would deem useful, what would make it usable etc. Furthermore, participants might be asked to look at designs and play around with prototypes and be asked about their opinions on the designs and experiences using these prototypes. Participation in this research will be carried out either using online questionnaires or through personal interviews. <br data-v-1f3b603c><br data-v-1f3b603c> C.RISKS AND BENEFITS <br data-v-1f3b603c> It is not anticipated that you will experience any discomfort from the procedures, and this research is not intended to benefit you personally. <br data-v-1f3b603c><br data-v-1f3b603c> D.CONDITIONS OF PARTICIPATION <br data-v-1f3b603c> • I understand that I am free to withdraw my consent and discontinue my participationat any time without negative consequences. <br data-v-1f3b603c> • I understand that my participation in this study is: CONFIDENTIAL (i.e., the researcher will know, but will not disclose my identity) <br data-v-1f3b603c> • I understand that the data from this study may be published. <br data-v-1f3b603c><br data-v-1f3b603c> I HAVE CAREFULLY STUDIED THE ABOVE AND UNDERSTAND THIS AGREEMENT. I FREELY CONSENT AND VOLUNTARILY AGREE TO PARTICIPATE IN THIS STUDY. </p>',2),qe={id:"center-self"},Ke=Object(o["h"])("p",{id:"heading6"},"What is your name?",-1),ze={id:"usrinput"},Je=Object(o["h"])("p",{id:"heading6"},"Do you still agree with the emotion you inputed?",-1),Xe={id:"buttons"},Ze=Object(o["h"])("br",null,null,-1),et=Object(o["h"])("br",null,null,-1),tt={key:0,id:"usrinput"},nt=Object(o["h"])("p",{id:"heading6"},"Did music help you validate your emotion?",-1),ot={id:"buttons"},it={key:1,id:"center-self"},at=Object(o["h"])("p",{id:"heading6"},"That's it! Thank you for using Moodipy!",-1),rt={id:"buttons"};Object(o["s"])();var ct=Pe((function(e,t,n,i,a,r){var c=Object(o["y"])("Button");return Object(o["r"])(),Object(o["d"])("div",Te,[Fe,Object(o["h"])("div",Ne,[De,Object(o["h"])("div",Me,[Object(o["h"])("ul",null,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(Object.keys(e.$store.state.emotionQueried),(function(t){return Object(o["r"])(),Object(o["d"])("li",{key:t},[Object(o["h"])("div",_e,[Object(o["g"])(Object(o["A"])(t),1),Object(o["h"])("span",$e,"("+Object(o["A"])(100*e.$store.state.emotionQueried[t])+"%)",1)]),Object(o["h"])("div",Re,[Object(o["h"])("div",{class:"progress",style:{background:"#6E41E2",width:100*e.$store.state.emotionQueried[t]+"%"}},null,4)])])})),128))])])]),Object(o["h"])("div",Le,[Ue,Object(o["h"])("p",Be,Object(o["A"])(e.$store.state.initialEmotion),1)]),a.consentGiven?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("div",Ge,[He,We,Object(o["h"])("div",Ye,[Object(o["h"])(c,{text:"Give consent",background:"#6E41E2",color:"white",onClick:t[1]||(t[1]=function(e){return a.showConsentForm=!0})}),a.showConsentForm?(Object(o["r"])(),Object(o["d"])("div",Qe,[Ve,Object(o["h"])(c,{text:"I agree",background:"#6E41E2",color:"white",onClick:t[2]||(t[2]=function(e){return a.showConsentForm=!1,a.consentGiven=!0})}),Object(o["h"])(c,{text:"I disagree",background:"white",color:"#6E41E2",onClick:t[3]||(t[3]=function(e){return a.showConsentForm=!1,a.consentGiven=!1})})])):Object(o["e"])("",!0),Object(o["h"])(c,{text:"I do not want to give consent",background:"white",color:"#6E41E2"})])])),Object(o["G"])(Object(o["h"])("div",qe,[Object(o["h"])("div",null,[Ke,Object(o["h"])("div",ze,[Object(o["G"])(Object(o["h"])("input",{class:"input-box",placeholder:"Your name","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.username=t}),onChange:t[5]||(t[5]=function(t){return e.$store.commit("setUsername",e.username)})},null,544),[[o["C"],e.username]])])]),Object(o["h"])("div",null,[Je,Object(o["h"])("div",Xe,[Object(o["h"])(c,{text:"Yes, I agree",background:"#6E41E2",color:"white",onClick:t[6]||(t[6]=function(t){return e.$store.commit("setAgreeWithInitialEmotion",!0),a.agreeWithEmo=!0})}),Object(o["h"])(c,{text:"No, I disagree",background:"white",color:"#6E41E2",onClick:t[7]||(t[7]=function(t){return e.$store.commit("setAgreeWithInitialEmotion",!1),a.agreeWithEmo=!1})})]),Ze,et,a.agreeWithEmo?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("div",tt,[Object(o["G"])(Object(o["h"])("input",{class:"input-box",placeholder:"Your current emotion","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.finalEmotion=t}),onChange:t[9]||(t[9]=function(t){return e.$store.commit("setFinalEmotion",e.finalEmotion)})},null,544),[[o["C"],e.finalEmotion]])]))]),Object(o["h"])("div",null,[nt,Object(o["h"])("div",ot,[Object(o["h"])(c,{text:"Yes",background:"#6E41E2",color:"white",onClick:t[10]||(t[10]=function(t){return e.$store.commit("setHelpful",!0)})}),Object(o["h"])(c,{text:"No",background:"white",color:"#6E41E2",onClick:t[11]||(t[11]=function(t){return e.$store.commit("setHelpful",!1)})})])])],512),[[o["D"],a.consentGiven]]),a.consentGiven?(Object(o["r"])(),Object(o["d"])("div",it,[at,Object(o["h"])("div",rt,[Object(o["h"])(c,{text:"Submit and bring me back to the home page",background:"#6E41E2",color:"white",onClick:r.handleSubmitFeedback},null,8,["onClick"])])])):Object(o["e"])("",!0)])})),st=n("2591"),dt={apiKey:"AIzaSyAjyn93D9JsUTaB3b0ViI-jxTSQD2W5fME",authDomain:"moodipy.firebaseapp.com",projectId:"moodipy",storageBucket:"moodipy.appspot.com",messagingSenderId:"1047862776477",appId:"1:1047862776477:web:b1e24755e7b75c9964ba74",measurementId:"G-BQGR50VYE5"},lt=st["a"].initializeApp(dt),ut=lt.firestore(),bt=ut.collection("feedback"),pt=function(e){return bt.add(e)},ht={name:"FeedbackPage",components:{Button:X},data:function(){return{showConsentForm:!1,consentGiven:!1,agreeWithEmo:!0,isLoading:!0}},methods:{handleSubmitFeedback:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.$store.state.username&&e.$store.state.initialEmotion&&e.$store.state.emotionQueried&&(e.$store.state.agreeWithInitialEmotion||e.$store.state.finalEmotion)&&e.$store.state.username)){t.next=7;break}return n={name:e.$store.state.username,initialEmotion:e.$store.state.initialEmotion,emotionDetected:e.$store.state.emotionDetected,emotionQueried:e.$store.state.emotionQueried,helpful:e.$store.state.helpful,agreeWithInitialEmotion:e.$store.state.agreeWithInitialEmotion,finalEmotion:e.$store.state.finalEmotion},t.next=4,pt(n);case 4:jt.push("/"),t.next=8;break;case 7:alert("Please fill out the form completely");case 8:case"end":return t.stop()}}),t)})))()},changeColor:function(){this.isLoading=!this.isLoading}},beforeMount:function(){this.$store.state.initialEmotion||jt.push("/")}};n("7ead");ht.render=ct,ht.__scopeId="data-v-1f3b603c";var ft=ht,mt=[{path:"/",name:"Home",component:ge},{path:"/music",name:"MusicPage",component:oe},{path:"/about",name:"AboutPage",component:Ce},{path:"/feedback",name:"FeedbackPage",component:ft}],Ot=Object(O["a"])({history:Object(O["b"])("/"),routes:mt}),jt=Ot,yt=n("5502"),vt=Object(yt["a"])({state:{initialEmotion:"",emotionDetected:"",emotionQueried:[],finalEmotion:"",username:"",helpful:!1,agreeWithInitialEmotion:!1},mutations:{updateInitialEmotion:function(e,t){e.initialEmotion=t},setEmotionDetected:function(e,t){e.emotionDetected=t},setEmotionQueried:function(e,t){e.emotionQueried=t},setFinalEmotion:function(e,t){e.finalEmotion=t},setUsername:function(e,t){e.username=t},setHelpful:function(e,t){e.helpful=t},setAgreeWithInitialEmotion:function(e,t){console.log(t),e.agreeWithInitialEmotion=t}},actions:{},modules:{}});Object(o["c"])(m).use(jt).use(vt).mount("#app")},"589d":function(e,t,n){},"5b54":function(e,t,n){"use strict";n("d188")},"5e05":function(e,t,n){},"747a":function(e,t,n){"use strict";n("2342")},"7ead":function(e,t,n){"use strict";n("dbe3")},"82f4":function(e,t,n){},ad5b:function(e,t,n){"use strict";n("589d")},adb9:function(e,t,n){"use strict";n("82f4")},c1d5:function(e,t,n){"use strict";n("d89b")},c31f:function(e,t,n){},d188:function(e,t,n){},d331:function(e,t,n){"use strict";n("5e05")},d519:function(e,t,n){},d89b:function(e,t,n){},da4b:function(e,t,n){"use strict";n("d519")},dbe3:function(e,t,n){}});
//# sourceMappingURL=app.3aa93808.js.map