<template>
  <v-col cols="12" class="productinstruction__page py-10">
    <h2 id="productinstruction" class="productinstruction__title mb-3 pl-3">
      商品說明
    </h2>
    <div class="productinstruction__contentbox">
      <div class="productinstruction__content" :class="{ show: isShowFull }">
        － 澎湖水族館資訊 －
        <br />
        <br />
        <br />
        營業時間：每日：09:00-17:00
        <br />
        地址：88442台灣澎湖縣白沙鄉岐頭村58號
        <br />
        交通資訊
        <br />
        馬公機場：澎21鄉道街202縣道，右轉203縣道往白沙方向，於澎9鄉道向右轉。
        <br />
        馬公港：民福路前往馬公的新生路/205縣道203縣道往白沙方向，於澎9鄉道向右轉。
        <br />
        公車：馬公總站搭藍線-外垵線（馬公-外垵）至岐頭水族館站。
        <br />
        <br />
        <br />
        － 館內活動 －
        <br />
        【每日館內行程】
        <br />
        09:30-10:30 礁岩池‧魚魚啄菜球時間
        <br />
        10:00-11:00 觸摸池‧開放時間
        <br />
        11:00-11:15 大洋池‧餵食秀時間
        <br />
        12:00-13:00 視聽區‧影片放映時間
        <br />
        13:30-14:00 觸摸池‧開放時間
        <br />
        14:00-15:00 礁岩池‧魚魚啄菜球時間
        <br />
        15:00-15:15 大洋池‧餵食秀時間
        <br />
        15:30-16:00 觸摸池‧開放時間
        <br />
        <br />
        <br />
        － 澎湖水族館介紹 －
        <br />
        具有20年歷史的澎湖水族館，經過全面裝修，去年煥然一新，重新開幕！
        水族館的設計概念，外觀以海龜為原型，館內則模擬小海龜由初生步入大海，到最終返鄉產卵，使遊客在參觀過程中，親身感受到海龜充滿勇氣與夢想的ㄧ生。
        踏入方舟後，一步一步地從沙灘緩緩的爬向海洋，過程中沿著沙岸、珊瑚礁到大洋池，探索不同區域、不同特性的海洋生物，每個區域都有館內吉祥物的故事導覽書與集章區，逛館猶如一趟精彩奇幻的海洋之旅！
        館內活動豐富，除了大洋池每日兩次的互動式餵食秀，有超可愛的鯊魚、魟魚、還有比人還大的龍膽石斑大哥！還有每日三次的觸摸池，體驗式互動讓大人小孩都愛翻！最棒的是，館內設置中英文免費的QR
        CODE語音導覽！
        當然，千萬別錯過二樓剛出生水母寶寶、海馬寶寶，還有鬼頭鬼腦的花園鰻。傍晚時分走出戶外，在天橋欣賞海灘夕陽，來杯館內的沁涼冰飲最是享受！
        炎炎夏日絕不能錯過，澎湖最好玩的新選擇！好玩、好拍、好涼、好精彩的澎湖水族館，等你來探索！
        打卡必拍－超美水族館大廳
      </div>
      <!-- 顯示更多 -->
      <div
        v-if="!isShowFull"
        class="productinstruction__showbtn"
        @click="showMoreHandler"
      >
        看完整商品說明
      </div>
    </div>
  </v-col>
</template>
<script>
export default {
  name: "ProductInstruction",
  data() {
    return {
      isShowFull: false,
    };
  },
  methods: {
    showMoreHandler() {
      this.isShowFull = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.productinstruction__page {
  position: relative;
  .productinstruction__title {
    border-left: 3px solid #ff8800;
  }
  .productinstruction__contentbox {
    position: relative;
    .productinstruction__content {
      height: 470px;
      overflow: hidden;
      mask: linear-gradient(to top, transparent, #000);
      &.show {
        mask: none;
        overflow: visible;
        height: auto;
      }
    }
    .productinstruction__showbtn {
      color: #d2750a;
      cursor: pointer;
    }
  }
}
</style>
