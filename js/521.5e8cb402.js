"use strict";(self["webpackChunkgreenvill"]=self["webpackChunkgreenvill"]||[]).push([[521],{7521:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var r=s(9269),i=s(3201);const c={class:"product-detail__container"},d={class:"product-detail__title"},u={class:"product-detail__wrapper"},o={class:"product-detail__swiper"},l=["src"],p=["src"],a={class:"product-detail__list"},n={key:0,class:"product-detail__characteristics"},w={class:"product-detail__characteristics_item"},h={key:0,class:"product-detail__descriprion"};function _(t,e,s,_,g,m){const v=(0,r.up)("swiper-slide"),b=(0,r.up)("swiper");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("h1",d,(0,i.zw)(m.product.title),1),(0,r._)("div",u,[(0,r._)("div",o,[(0,r.Wm)(b,{spaceBetween:20,navigation:!1,modules:[_.Thumbs],autoHeight:!0,speed:500,thumbs:{swiper:_.thumbsSwiper},class:"mySwiper2"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.product.photos,(t=>((0,r.wg)(),(0,r.j4)(v,{class:"main-swiper__silde"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:m.getImgUrl(t.img)},null,8,l)])),_:2},1024)))),256))])),_:1},8,["modules","thumbs"]),(0,r.Wm)(b,{modules:[_.Thumbs],slidesPerView:3,spaceBetween:10,"watch-slides-progress":"",onSwiper:_.setThumbsSwiper,breakpoints:{}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.product.photos,(t=>((0,r.wg)(),(0,r.j4)(v,{class:"slide__thumb"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:m.getImgUrl(t.img)},null,8,p)])),_:2},1024)))),256))])),_:1},8,["modules","onSwiper"])]),(0,r._)("div",a,[m.product.characteristics?((0,r.wg)(),(0,r.iD)("ul",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.product.characteristics,(t=>((0,r.wg)(),(0,r.iD)("li",w,(0,i.zw)(t.title)+" : "+(0,i.zw)(t.value),1)))),256))])):(0,r.kq)("",!0)])]),m.product.description?((0,r.wg)(),(0,r.iD)("div",h,(0,i.zw)(m.product.description),1)):(0,r.kq)("",!0)])}var g=s(6448),m=s(1746),v=s(7552),b=s(6237),f=s(9304),I={components:{Swiper:v.tq,SwiperSlide:v.o5},setup(){const t=(0,b.iH)(null),e=e=>{t.value=e};return{Thumbs:f.o3,thumbsSwiper:t,setThumbsSwiper:e}},data(){return{product:{}}},methods:{...(0,g.nv)(m.G,{getProduct:"getProductById"}),getImgUrl(t){return s(5826)("./"+t)},product(){return this.getProduct(this.productId)}},mounted(){console.log(this.productId),console.log(this.getProduct(this.productId)),this.getProduct(this.productId),this.product=this.getProduct(this.productId)},computed:{productId(){return+this.$route.params.id}},watch:{}},S=s(7617);const k=(0,S.Z)(I,[["render",_],["__scopeId","data-v-fd874fc8"]]);var D=k}}]);
//# sourceMappingURL=521.5e8cb402.js.map