(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bfff9da"],{"0ca8":function(t,s,e){},"0e58":function(t,s,e){"use strict";e("173d")},"173d":function(t,s,e){},"1ce2":function(t,s,e){"use strict";e("0ca8")},"2bc5":function(t,s,e){"use strict";e("14d9"),e("abd3");var a=e("f625"),i=e("80d2"),c=Object(i["i"])("v-breadcrumbs__divider","li"),l=e("7560"),n=e("58df");s["a"]=Object(n["a"])(l["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],s=!!this.$scopedSlots.item,e=[];for(let i=0;i<this.items.length;i++){const c=this.items[i];e.push(c.text),s?t.push(this.$scopedSlots.item({item:c})):t.push(this.$createElement(a["a"],{key:e.join("."),props:c},[c.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const s=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},s)}})},"2d21":function(t,s,e){"use strict";e("51cd")},"2f0f":function(t,s,e){},"51cd":function(t,s,e){},"6ca7":function(t,s,e){},7636:function(t,s,e){"use strict";e("2f0f")},abd3:function(t,s,e){},ac7c:function(t,s,e){"use strict";e("6ca7"),e("ec29");var a=e("9d26"),i=e("c37a"),c=e("fe09");s["a"]=c["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...s}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...s,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},b789:function(t,s,e){"use strict";e.r(s);var a=e("62ad"),i=e("a523"),c=e("0fd9"),l=function(){var t=this,s=t._self._c;return s(i["a"],{attrs:{fluid:"",id:"cart__page"}},[s(i["a"],[s(c["a"],[s(a["a"],{attrs:{cols:"12"}},[s("CartCard")],1)],1)],1),s(i["a"],[s(c["a"],[s("CartCategoryBlock")],1)],1)],1)},n=[],r=e("2bc5"),o=e("f625"),d=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cartcard__page"},[s("div",{staticClass:"cartcard__breadcrumbs"},[s(r["a"],{staticClass:"pa-0 mb-3",attrs:{items:t.items,divider:">"},scopedSlots:t._u([{key:"item",fn:function({item:e}){return[s(o["a"],{attrs:{href:e.href,disabled:e.disabled}},[s("span",{class:e.class},[t._v(" "+t._s(e.text)+" ")])])]}}])})],1),s("div",{staticClass:"cartcard__container"},[s("div",{staticClass:"cartcard__head pa-3"},[t._v("購物車")]),s("div",{staticClass:"cartcard__body pa-3"},[s("CartItems")],1),s("div",{staticClass:"cartcard__foot pa-3 pt-0"},[s("CartFoot")],1)]),t._m(0)])},u=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"cartcard__continue d-flex justify-end"},[s("div",{staticStyle:{color:"#d2750a"}},[t._v("繼續購物 >")])])}],v=e("ac7c"),m=function(){var t=this,s=t._self._c;return s("div",t._l(t.cartItems,(function(e,i){return s("div",{key:i,staticClass:"cartitem__container py-3"},[s(c["a"],[s(a["a"],{staticClass:"pr-md-0",attrs:{cols:"1",sm:"1",md:"1",lg:"1"}},[s("div",{staticClass:"d-flex justify-center"},[s(v["a"],{attrs:{color:"orange",value:"orange"},model:{value:e.checkbox,callback:function(s){t.$set(e,"checkbox",s)},expression:"item.checkbox"}})],1)]),s(a["a"],{staticClass:"pl-md-0",attrs:{cols:"3",sm:"2",md:"2",lg:"2"}},[s("div",{staticClass:"cartitem__imgbox"},[s("div",{staticClass:"cartitem__img"})])]),s(a["a"],{attrs:{cols:"8",sm:"9",md:"9",lg:"6"}},[s("div",{staticClass:"cartitem__infobox"},[s("div",{staticClass:"d-flex mb-1"},[s("div",{staticClass:"text-sm-body-1 text-caption main text-no-wrap mr-1"},[t._v(" 名稱 ")]),s("span",{staticClass:"checkoutcard__bold text-sm-body-1 text-caption"},[t._v(" "+t._s(e.name)+" ")])]),s("div",{staticClass:"d-flex mb-1"},[s("div",{staticClass:"text-sm-body-1 text-caption main text-no-wrap mr-1"},[t._v(" 方案 ")]),s("span",{staticClass:"checkoutcard__bold text-sm-body-1 text-caption"},[t._v(" "+t._s(e.plan)+" ")])]),e.day?s("div",{staticClass:"d-flex mb-1"},[s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v("天數:")]),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(t._s(e.day))])]):t._e(),e.spec?s("div",{staticClass:"d-flex mb-1"},[s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v("商品規格:")]),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(t._s(e.spec))])]):t._e(),e.receive?s("div",{staticClass:"d-flex mb-1"},[s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v("取件地:")]),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(t._s(e.receive))])]):t._e(),e.return?s("div",{staticClass:"d-flex mb-1"},[s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v("還件地:")]),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(t._s(e.return))])]):t._e(),s("div",{staticClass:"d-flex flex-wrap mb-1"},[e.date?s("div",{staticClass:"d-flex align-start"},[s("svg-icon",{attrs:{iconClass:"calendar",className:"calendar mx-1"}}),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(t._s(e.date))])],1):t._e(),e.time?s("div",{staticClass:"d-flex align-start"},[s("svg-icon",{attrs:{iconClass:"time",className:"time mx-1"}}),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(t._s(e.time))])],1):t._e(),e.shopping?s("div",{staticClass:"d-flex align-start"},[s("svg-icon",{attrs:{iconClass:"shopping",className:"shopping mx-1"}}),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(" 個 x "+t._s(e.shopping)+" ")])],1):t._e(),e.aldult?s("div",{staticClass:"d-flex align-start"},[s("svg-icon",{attrs:{iconClass:"person",className:"person mx-1"}}),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(" 成人 x "+t._s(e.aldult)+" ")])],1):t._e(),e.car?s("div",{staticClass:"d-flex align-start"},[s("svg-icon",{attrs:{iconClass:"car",className:"car mx-1"}}),s("div",{staticClass:"text-sm-body-1 text-caption"},[t._v(" 輛 x "+t._s(e.car)+" ")])],1):t._e()]),s("div",{staticClass:"d-flex d-lg-none justify-end"},[s("div",{staticClass:"cartitem__pricebox d-flex align-center"},[s("div",{staticClass:"d-flex font-weight-bold"},[s("div",{staticClass:"cartitem__currency text-subtitle-1 font-weight-bold"},[t._v(" TWD ")]),s("div",{staticClass:"cartitem__price text-subtitle-1 font-weight-bold ml-2"},[t._v(" "+t._s(e.price)+" ")])]),s("svg-icon",{attrs:{iconClass:"delete",className:"delete ml-1"}})],1)])])]),s(a["a"],{staticClass:"d-none d-lg-block",attrs:{cols:"0",sm:"0",md:"0",lg:"3"}},[s("div",{staticClass:"cartitem__pricebox d-flex align-center justify-end"},[s("div",{staticClass:"d-flex font-weight-bold"},[s("div",{staticClass:"cartitem__currency text-subtitle-1 font-weight-bold"},[t._v(" TWD ")]),s("div",{staticClass:"cartitem__price text-subtitle-1 font-weight-bold ml-2"},[t._v(" "+t._s(e.price)+" ")])]),s("svg-icon",{attrs:{iconClass:"delete",className:"delete ml-1"}})],1)])],1)],1)})),0)},p=[],h={name:"CartItem",data(){return{cartItems:[{id:0,checkbox:!1,imgUrl:"",name:"台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",plan:"台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",day:"雙週14天",spec:"",receive:"桃園機場|第一航廈",return:"桃園機場|第二航廈",date:"2021-12-02",time:"",shopping:1,aldult:0,car:0,price:1200},{id:1,checkbox:!1,imgUrl:"",name:"台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",plan:"台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",day:"雙週14天",spec:"",receive:"宅配",return:"宅配",date:"2021-12-02",time:"",shopping:1,aldult:0,car:0,price:1200},{id:2,checkbox:!1,imgUrl:"",name:"首爾市區|機票 & 租車",plan:"首爾市區包車",day:"",spec:"商品規格內容",receive:"",return:"",date:"2021-12-02",time:"8:00",shopping:0,aldult:1,car:1,price:2e4},{id:3,checkbox:!1,imgUrl:"",name:"首爾市區|機票 & 租車",plan:"首爾市區包車",day:"",spec:"商品規格內容",receive:"",return:"",date:"2021-12-02",time:"8:00",shopping:0,aldult:1,car:1,price:2e4}]}}},_=h,f=(e("7636"),e("2877")),g=Object(f["a"])(_,m,p,!1,null,"53d2b334",null),C=g.exports,b=function(){var t=this,s=t._self._c;return s("div",[s(c["a"],[s(a["a"],{staticClass:"py-0",attrs:{cols:"12"}},[s("div",{staticClass:"d-flex align-center"},[s(v["a"],{attrs:{color:"orange",value:"orange"},model:{value:t.isAllSelect,callback:function(s){t.isAllSelect=s},expression:"isAllSelect"}}),s("div",[t._v("全選(3)")]),s("div",{staticClass:"px-3"},[t._v("|")]),s("div",{staticClass:"cartfoot__delectall"},[t._v("刪除已選項目")])],1)])],1),s(c["a"],[s(a["a"],{staticClass:"d-none d-lg-block",attrs:{cols:"0",lg:"5"}}),s(a["a"],{attrs:{cols:"12",lg:"7"}},[s("div",{staticClass:"cartfoot__points pa-3"},[t._v("你將獲得額外 888 Gomaji Points")]),s("div",{staticClass:"d-flex justify-end align-center pa-3 pr-0"},[s("div",{staticClass:"cartfoot__pricedetail d-flex flex-column align-end"},[s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"text-caption mr-1"},[t._v("3件商品合計")]),s("div",{staticClass:"font-weight-black text-body-1 mr-1",staticStyle:{color:"#444"}},[t._v(" TWD ")]),s("div",{staticClass:"cartfoot__price font-weight-black text-body-1"},[t._v(" 22,400 ")])]),s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"text-caption mr-1"},[t._v("Gomaji Points")]),s("svg-icon",{attrs:{iconClass:"gpoint",className:"gpoint mr-1"}}),s("div",{staticClass:"cartfoot__point font-weight-black text-body-1"},[t._v(" 983 ")])],1)]),s("div",{staticClass:"cartfoot__checkout py-3 px-6 ml-3"},[t._v("前往結帳")])])])],1)],1)},x=[],y={name:"CartFoot",data(){return{isAllSelect:!1}}},k=y,I=(e("2d21"),Object(f["a"])(k,b,x,!1,null,"6b66b2bf",null)),S=I.exports,w={name:"CartCard",components:{CartItems:C,CartFoot:S},data(){return{items:[{text:"購物車",disabled:!1,href:"test",class:"active"},{text:"填寫付款方式",disabled:!0,href:"test",class:"none"}]}}},j=w,$=(e("1ce2"),Object(f["a"])(j,d,u,!1,null,"12faf4a8",null)),V=$.exports,A=e("1d4d"),O=function(){var t=this,s=t._self._c;return s(a["a"],{staticClass:"pr-0 pr-lg-3",attrs:{cols:"12"}},[s("div",{staticClass:"d-flex justify-space-between align-end pr-3"},[s("h3",[t._v("多數旅客還買了以下商品")]),s("h4",{staticClass:"grey--text"},[t._v("查看更多")])]),s("carousel",{attrs:{id:"custom__carousel",margin:5,responsive:t.responsiveObj,dots:!1,nav:!1}},[s("Prev",{attrs:{slot:"prev"},slot:"prev"}),t._l(t.customList,(function(e){return s("div",{key:e.id,staticClass:"custom__item"},[s("div",{staticClass:"custom__shadowbox d-flex flex-column"},[s("div",{staticClass:"custom__img",style:t.styleObj(e)},[s("div",{staticClass:"custom__tagarea d-flex justify-space-between"},[s("div",{staticClass:"custom__tags d-flex"},[s("div",{staticClass:"custom__tag travel"},[t._v("國旅券適用")]),s("div",{staticClass:"custom__tag art"},[t._v("藝fun券適用")])]),s("div",{staticClass:"custom__heartarea d-flex justify-center align-center"},[s("svg-icon",{attrs:{iconClass:e.heartStatus,className:e.heartStatus}})],1)])]),s("div",{staticClass:"custom__popover d-flex justify-start align-center"},[s("svg-icon",{attrs:{iconClass:"lightning",className:"lightning"}}),s("div",[t._v("立即確認")])],1),s("div",{staticClass:"custom__detail"},[s("div",{staticClass:"custom__title"},[s("div",{staticClass:"icon__flipbox"},[s("div",{staticClass:"icon__front"},[s("svg-icon",{attrs:{iconClass:"bigticket",className:"bigticket"}})],1),s("div",{staticClass:"icon__back"})]),t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"custom__status d-flex justify-start align-center"},[s("div",{staticClass:"custom__status__item hot"},[t._v("熱賣中")]),s("div",{staticClass:"custom__status__item instant"},[t._v("即時確認")]),s("div",{staticClass:"custom__status__count d-flex justify-space-between align-center"},[s("svg-icon",{attrs:{iconClass:"fire",className:"fire"}}),s("span",{staticStyle:{color:"#6d6c6c","font-size":"0.6rem","font-weight":"800"}},[t._v(" 300+ 個已訂購 ")])],1)]),s("div",{staticClass:"custom__info d-flex justify-space-between align-center"},[s("div",{staticClass:"custom__location"},[s("svg-icon",{attrs:{iconClass:"location",className:"location"}}),s("span",{staticStyle:{"font-weight":"800"}},[t._v("台灣 苗栗")])],1),s("div",{staticClass:"custom__delprice"},[t._v("TWD 500")])]),s("div",{staticClass:"custom__bottom d-flex justify-space-between align-end"},[s("div",{staticClass:"custom__rating d-flex justify-start align-center"},[s(A["a"],{attrs:{"background-color":"#ff8800",color:"#ff8800",dense:"",hover:"","half-increments":"",length:"5",size:18},model:{value:e.startRating,callback:function(s){t.$set(e,"startRating",s)},expression:"item.startRating"}}),s("span",{staticClass:"ml-2",staticStyle:{color:"#6d6c6c","font-size":"16px","font-weight":"500"}},[t._v("("+t._s(e.rating)+")")])],1),s("div",{staticClass:"custom__pricebox"},[t._v(" TWD "),s("span",{staticClass:"custom__price"},[t._v(" "+t._s(e.price)+" ")])])])])])])})),s("Next",{attrs:{slot:"next"},slot:"next"})],2)],1)},D=[],N=e("7ec7"),P=e.n(N),F=e("0a29"),R=e("819a"),B={name:"CartCategoryBlock",components:{carousel:P.a,Prev:F["a"],Next:R["a"]},data(){return{responsiveObj:{0:{items:1,dots:!1,stagePadding:20},600:{items:2,dots:!1},960:{items:3,dots:!1},1264:{items:4,dots:!1},1904:{items:4,dots:!1}},customList:[{id:0,title:"苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",price:150,deletPrice:500,rating:75,url:e("73ee"),heartStatus:"love_empty",startRating:4},{id:1,title:"苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",price:150,deletPrice:500,rating:75,url:e("a979"),heartStatus:"love_line",startRating:3},{id:2,title:"苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",price:150,deletPrice:500,rating:75,url:e("a2c8"),heartStatus:"love_full",startRating:5},{id:3,title:"苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",price:150,deletPrice:500,rating:75,url:e("a86f"),heartStatus:"love_full",startRating:3.5},{id:4,title:"苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",price:150,deletPrice:500,rating:75,url:e("63df"),heartStatus:"love_full",startRating:4},{id:5,title:"苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",price:150,deletPrice:500,rating:75,url:e("f230"),heartStatus:"love_full",startRating:4}]}},methods:{styleObj(t){return{background:`url(${t.url})`,"background-size":"cover","background-position":"center center"}}}},W=B,T=(e("0e58"),Object(f["a"])(W,O,D,!1,null,"7b717448",null)),L=T.exports,z={name:"Cart",components:{CartCard:V,CartCategoryBlock:L}},E=z,G=(e("bb6d"),Object(f["a"])(E,l,n,!1,null,"7072595a",null));s["default"]=G.exports},bb6d:function(t,s,e){"use strict";e("db43")},db43:function(t,s,e){},ec29:function(t,s,e){},f625:function(t,s,e){"use strict";var a=e("1c87"),i=e("58df");s["a"]=Object(i["a"])(a["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:s,data:e}=this.generateRouteLink();return t("li",[t(s,{...e,attrs:{...e.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}})},fe09:function(t,s,e){"use strict";e.d(s,"b",(function(){return n}));e("14d9");var a=e("c37a"),i=e("5311"),c=e("8547"),l=e("58df");function n(t){t.preventDefault()}s["a"]=Object(l["a"])(a["a"],i["a"],c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,s=this.internalValue;return this.isMultiple?!!Array.isArray(s)&&s.some(s=>this.valueComparator(s,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,s):Boolean(s):this.valueComparator(s,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:n},t):t},genInput(t,s){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},s),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:n},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let s=this.internalValue;if(this.isMultiple){Array.isArray(s)||(s=[]);const e=s.length;s=s.filter(s=>!this.valueComparator(s,t)),s.length===e&&s.push(t)}else s=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(s,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(s,t)?null:t:!s;this.validate(!0,s),this.internalValue=s,this.hasColor=s},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-4bfff9da.3058cb8c.js.map