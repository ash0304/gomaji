<template>
  <div class="home__input__group d-flex justify-center align-center">
    <input
      type="text"
      class="home__search__input"
      placeholder="輸入目的地、景點、體驗行程或活動名稱..."
      @focus="suggestHandler"
      v-click-outside="{
        handler: outSideHandler,
        include: includeHandler,
      }"
    />
    <button class="home__search__btn">
      <svg-icon iconClass="search" className="search" />
    </button>
    <div :class="{ show: isSuggest === '1' }" class="home__search__suggest">
      <!-- 控制default推薦還是輸入中 -->
      <div class="">
        <!-- recent search(localstorage.length) -->
        <div>
          <h4 class="search__suggest__title mb-2">最近搜尋</h4>
          <div
            class="
              d-flex
              flex-column flex-sm-row
              search__suggest__top
              justify-space-between
              align-start align-sm-center
              mb-4
            "
          >
            <div
              class="search__suggest__recent d-flex justify-start align-center"
            >
              <div class="search__suggest__item">Japan</div>
              <div class="search__suggest__item">France</div>
              <div class="search__suggest__item">Switzerland</div>
              <div class="search__suggest__item">Taiwan</div>
              <div class="search__suggest__item">Russia</div>
            </div>
            <div class="search__suggest_delete" @click="deleteHandler">
              <svg-icon iconClass="delete" className="delete" />
            </div>
          </div>
        </div>
        <!-- Hot suggest -->
        <div>
          <h4 class="search__suggest__title mb-4">熱門目的地</h4>
          <div class="d-flex search__suggest_bottom">
            <div
              class="
                search__suggest__group
                d-flex
                flex-column
                justify-space-around
              "
            >
              <div class="search__suggest__location" v-for="n in 5" :key="n">
                澎湖<svg-icon class="fire ml-2" icon-class="fire" />
              </div>
            </div>
            <div
              class="
                search__suggest__group
                d-flex
                flex-column
                justify-space-around
              "
            >
              <div class="search__suggest__location" v-for="n in 5" :key="n">
                澎湖<svg-icon class="fire ml-2" icon-class="fire" />
              </div>
            </div>
            <div
              class="
                search__suggest__group
                d-flex
                flex-column
                justify-space-around
              "
            >
              <div class="search__suggest__location" v-for="n in 5" :key="n">
                澎湖<svg-icon class="fire ml-2" icon-class="fire" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 搜尋時 加入d-flex 且d-none拆掉可用 -->
      <div class="search__ing__box flex-column d-none">
        <div
          v-for="n in 8"
          :key="n"
          class="search__ing__item d-flex align-center justify-space-between"
        >
          <!-- left -->
          <div class="search__ing__left d-flex justify-start">
            <!-- img -->
            <div class="search__ing__imgbox">
              <div class="search__ing__img"></div>
            </div>
            <!-- content -->
            <div
              class="
                search__ing__content
                d-flex
                flex-column
                align-start
                justify-center
              "
            >
              <div class="search__ing__name">
                桃園青埔｜Xpark 都會型水生公園門票
              </div>
              <div class="search__ing__price__box d-flex align-center">
                <div>TWD</div>
                <div class="search__ing__price">150</div>
                <div class="search__ing__discount">37%OFF</div>
              </div>
            </div>
          </div>

          <!-- right -->
          <div class="search__ing__right d-flex">
            <!-- location -->
            <div
              class="search__ing__location d-flex align-center justify-center"
            >
              <svg-icon iconClass="location" className="location" />
              <div>台北</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchInput",
  data() {
    return {
      isSuggest: "0",
      suggestLocation: [],
    };
  },
  methods: {
    // suggest model open handler
    suggestHandler() {
      this.isSuggest = "1";
    },
    // click outside handler
    outSideHandler() {
      this.isSuggest = "0";
    },
    // handle suggest modal include
    includeHandler() {
      return [document.querySelector(".home__search__suggest")];
    },
    // delete recent search handler
    deleteHandler() {
      console.log(123);
    },
  },
};
</script>
<style lang="scss" scoped>
.home__input__group {
  position: relative;
  width: 100%;
  .home__search__input {
    width: 88%;
    height: 45px;
    background: white;
    padding: 5px 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid rgb(229, 229, 229);
    outline: none;
    &:focus {
      border: 1px solid #ff8800;
    }
  }
  .home__search__btn {
    width: 12%;
    height: 45px;
    background: #ff8800;
    border: 1px solid #ff8800;
    padding: 5px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: white;
    &:hover {
      background: #e27a03;
      border: 1px solid #e27a03;
    }
  }
  .home__search__suggest {
    position: absolute;
    z-index: 10;
    display: none;
    width: 100%;
    height: auto;
    background: white;
    top: 50px;
    left: 0px;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 15%);
    &.show {
      display: block;
    }
    .search__suggest__title {
      text-align: left;
      font-weight: 700;
    }
    .search__suggest__top {
      width: 100%;
      .search__suggest__recent {
        width: 100%;
        .search__suggest__item {
          background: #f6f7f9;
          border-radius: 23px;
          color: #333;
          max-width: 200px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 3px 12px;
          &:hover {
            background: #eaeaea;
            cursor: pointer;
          }
        }
      }
      .search__suggest_delete {
        cursor: pointer;
      }
    }
    .search__suggest_bottom {
      .search__suggest__group {
        width: 100%;
        height: 100%;
        text-align: left;
        .search__suggest__location {
          height: 32px;
          line-height: 32px;
          padding-left: 5px;
          margin-right: 5px;
          cursor: pointer;
          &:hover {
            background: #f6f7f9;
          }
        }
      }
    }
    /* searching block */
    .search__ing__box {
      .search__ing__item {
        width: 100%;
        height: 45px;
        cursor: pointer;
        border-radius: 6px;
        margin: 4px 0;
        .search__ing__left {
          width: 80%;
          height: 45px;
          .search__ing__imgbox {
            width: auto;
            .search__ing__img {
              width: 45px;
              height: 45px;
              margin-right: 8px;
              background: url("https://image.kkday.com/v2/image/get/w_80%2Ch_80%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_101517/20211105021852_5Sdvu/jpg");
              background-size: cover;
            }
          }
          .search__ing__content {
            width: 80%;
            height: 45px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .search__ing__name {
              font-size: 0.9rem;
            }
            .search__ing__price__box {
              font-size: 0.7rem;
              .search__ing__price {
                font-size: 1rem;
                color: #26bec9;
                font-weight: 800;
              }
              .search__ing__discount {
                margin: 0 4px;
                padding: 0 4px;
                background: #ffaf1e;
                color: #fff;
                border-radius: 2px;
              }
            }
          }
        }
        .search__ing__right {
          width: 20%;
          height: 45px;
          .search__ing__location {
            color: #6d6c6c;
            font-size: 0.9rem;
          }
        }
        &:hover {
          background: #f6f7f9;
        }
      }
    }
  }
}
</style>
