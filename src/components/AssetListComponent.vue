<template>
  <div class="right-section">
    <!--header-top mobile start-->
    <div
      id="mySidepanel"
      :style="{ backgroundColor: bgColor }"
      class="sidepanel"
      v-if="shownav"
    >
      <div class="dashboard-components">
        <div class="dash-div-menu">
          <div class="menu">Menu</div>
          <div class="close">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav"
              >×</a
            >
          </div>
        </div>
        <div class="dash-div">
          <div class="dash-icon">
            <img src="../assets/dashboard.png" />
          </div>

          <h2>Dashboard</h2>
        </div>
        <div class="dash-div assesment">
          <div class="dash-icon">
            <img src="../assets/note_alt.png" />
          </div>

          <h2>Assessment</h2>
        </div>
        <div class="dash-div">
          <div class="dash-icon">
            <img src="../assets/quiz.png" />
          </div>

          <h2>My Library</h2>
        </div>
        <div class="dash-last-child">
          <div class="dash-icon">
            <img src="../assets/admin_meds.png" />
          </div>

          <h2>Round Status</h2>
        </div>
      </div>
    </div>
    <div class="header-top">
      <div class="left-icon-div">
        <img @click="openNav" src="../assets/bar.png" />
        <h2>Assessment</h2>
      </div>
      <div class="right-icon-div">
        <img src="../assets/desk-icon.png" />
      </div>
    </div>
    <!--header-top mobile end-->
    <!--assessment tabs section start-->

    <div class="tabs">
      <div class="asses-tab1">
        <h2>Assessment</h2>
      </div>
      <div class="asses-tab2">
        <h2>My Assessments</h2>
      </div>
    </div>
    <!--assessment tabs section end -->
    <!-- total assessment section start-->
    <div class="assesment-section">
      <h2 class="ass-overview">Assessments Overview</h2>

      <div class="flex-div">
        <div class="total-asses">
          <h3>Total Assesment</h3>
          <div class="total-div">
            <img class="img-wrapp" src="../assets/tabbox.png" />
            <p>{{ assessments.length + 1 }}</p>
          </div>
        </div>
        <!-- total assessment end -->
        <!-- candidates section -->
        <div class="candidates">
          <h3>Candidates</h3>
          <div class="cand-content">
            <div class="cand-img">
              <img class="img-wrapp" src="../assets/user.png" />
            </div>

            <div class="candidates-content">
              <div class="tab">
                <div class="first-div">
                  <p>11,145</p>
                  <span>+89</span>
                </div>
                <h4>Total Candidates</h4>
              </div>
              <div class="tab border-remove">
                <div class="second-div">
                  <p>1,14</p>
                  <span>+89</span>
                </div>
                <h4>Who Attempted</h4>
              </div>
            </div>
          </div>
        </div>
        <!-- candidates section end -->

        <!-- candidates  source section strt -->
        <div class="candidates">
          <h3>Candidates source</h3>
          <div class="candidate-sourc-content">
            <div class="cand-img">
              <img class="img-wrapp" src="../assets/web.png" />
            </div>

            <div class="candidates-content">
              <div class="tab">
                <div class="first-div">
                  <p>11,000</p>
                  <span>+89</span>
                </div>
                <h4>E-mail</h4>
              </div>
              <div class="tab">
                <div class="second-div">
                  <p>149</p>
                  <span>+89</span>
                </div>
                <h4>Social Share</h4>
              </div>
              <div class="tab border-remove">
                <div class="third-div">
                  <p>145</p>
                  <span>+89</span>
                </div>
                <h4>Unique Link</h4>
              </div>
            </div>
          </div>
        </div>
        <!-- candidates source section end -->
        <!-- total purpose section start-->
        <div class="total-assest">
          <h3>Total Purpose</h3>
          <div class="total-tab">
            <img class="img-wrapp" src="../assets/share.png" />
            <p>11</p>
          </div>
        </div>
        <!-- total purpose section end -->
      </div>
      <!-- my assessement section start-->
      <div class="cart-section">
        <div class="mob-cart">
          <div class="mob-cart-title">
            <h2 class="ass-titles">My Assessment</h2>
          </div>
          <div class="mob-imgs">
            <img src="../assets/search.png" />
            <img src="../assets/filter.png" />
            <img src="../assets/bar_chart.png" />
          </div>
        </div>

        <h2 class="ass-title">My Assessment</h2>
        <div class="bottom-section">
          <div class="addbox">
            <img class="img-wrapp" @click="formPopup" src="../assets/add.png" />
            <h2>New Assessment</h2>
            <p>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
          <!-- default carts section start -->

          <div class="carts" v-if="showcart">
            <div class="cart-box">
              <div class="cart-img">
                <img class="img-wrapp" src="../assets/bag.png" />
                <img class="del-img" src="../assets/del.png" @click="delCart" />
              </div>
              <h2>Math Assessment</h2>
              <div class="card-title">
                <div class="job">Job</div>
                <div class="calender">
                  <img class="img-wrapp" src="../assets/calendar_today.png" />
                  <span>20 Apr 2023</span>
                </div>
              </div>
              <div class="duration-time">
                <div class="duration">
                  <div class="first-side">
                    <p>00</p>
                    <p class="dur">00</p>
                  </div>
                  <div class="second-side">
                    <p>00</p>
                    <p class="dur">Questions</p>
                  </div>
                </div>
                <div class="share">
                  <img class="sharing" src="../assets/shring.png" />
                  <img class="img-wrapp" src="../assets/lp.png" />
                </div>
              </div>
            </div>
          </div>

          <!-- default carts section end -->
          <!-- carts section start -->

          <div
            class="carts"
            v-for="(assessment, index) in assessments"
            :key="index"
          >
            <div class="cart-box">
              <div class="cart-img">
                <img class="img-wrapp" src="../assets/bag.png" />
                <img
                  class="del-img"
                  src="../assets/del.png"
                  @click="deleteCart(index)"
                />
              </div>
              <h2>{{ assessment.name }}</h2>
              <div class="card-title">
                <div class="job">{{ assessment.job }}</div>
                <div class="calender">
                  <img class="img-wrapp" src="../assets/calendar_today.png" />
                  <span>20 Apr 2023</span>
                </div>
              </div>
              <div class="duration-time">
                <div class="duration">
                  <div class="first-side">
                    <p>{{ assessment.duration }}</p>
                    <p class="dur">Duration</p>
                  </div>
                  <div class="second-side">
                    <p>00</p>
                    <p class="dur">Questions</p>
                  </div>
                </div>
                <div class="share">
                  <img class="sharing" src="../assets/shring.png" />
                  <img class="img-wrapp" src="../assets/lp.png" />
                </div>
              </div>
            </div>
          </div>

          <!-- carts section end -->
        </div>
      </div>
      <!-- my assessement end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AssetListComponent",
  props: {
    assessments: Array,
  },
  data() {
    return {
      shownav: false,
      color: "#0e040417",
      showcart: true,
    };
  },
  methods: {
    openNav() {
      this.shownav = true;
      this.bgColor = this.color;
        
    },
    closeNav() {
      this.shownav = false;
    },
    formPopup() {
      this.$emit("show-popup");
    },
    deleteCart(index) {
      this.$emit("del-cart", index);
    },
    delCart() {
      this.showcart = false;
    },
  },
};
</script>

<style lang="less" scoped>
.right-section {
  font-family: sans-serif;
  background: #fff;
  width: 90%;
  margin-left: 20px;
  margin-right: 20px;
  height: 100vh;
  border-radius: 10px;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0px;
    height: 100 auto;
    position: relative;
  }
  // header top mobile section
  .header-top {
    display: none;
    @media (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
    .left-icon-div {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
      h2 {
        margin: 0px;
        font-weight: 600;
        font-size: 20px;
        color: #1c4980;
        font-family: sans-serif;
        padding-left: 8px;
      }
    }
    .right-icon-div {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  // header top mobile section end
  // assessment tabs section
  .tabs {
    display: flex;

    border-bottom: 1px solid #d9e3d9;
    padding: 10px 0px;
    @media (max-width: 767px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      border-bottom: none;
    }
    .asses-tab1 {
      border-right: 1px solid #d9e3d9;

      h2 {
        padding: 10px 21px;
        margin: 0px;
        font-weight: 600;
        font-size: 20px;
        color: #1c4980;
        font-family: sans-serif;
        line-height: 28px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
    .asses-tab2 {
      h2 {
        padding: 10px 21px;
        margin: 0px;
        font-weight: 600;
        font-size: 20px;
        color: #0073e6;
        font-family: sans-serif;
        line-height: 28px;
        @media (max-width: 767px) {
          font-size: 14px;
          border-bottom: 2px solid #0073e6;
        }
      }
    }
  }
  // assessment tabs section
  // total assessment section start
  .flex-div {
    display: flex;
    border: 2px solid #edeaea;
    border-radius: 10px;
    margin-bottom: 35px;
    @media (max-width: 767px) {
      display: none;
    }
    .total-asses {
      border-right: 2px solid #edeaea;
      padding: 16px 20px;
      .total-div img {
        width: 40px;
        height: 40px;
      }
      .total-div p {
        font-size: 20px;
        font-weight: 700;
        color: #1c4980;
        padding: 0 10px;
        margin: 0;
      }
    }
    .total-assest {
      border-left: none;
      padding: 16px 20px;
      .total-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        .img-wrapp {
          width: 40px;
          height: 40px;
        }
        p {
          padding: 0 20px;
        }
      }
    }

    .candidates {
      border-right: 2px solid #edeaea;
      border-left: none;
      padding: 16px 20px;
      .cand-img .img-wrapp {
        width: 40px;
        height: 40px;
      }
      .candidates-content {
        display: flex;
        p {
          font-size: 20px;
          font-weight: 700;
          color: #1c4980;

          margin: 0;
        }
        span {
          font-size: 12px;
          font-weight: 500;
          color: #05c165;
          padding-left: 4px;
        }
        h4 {
          font-size: 12px;
          font-weight: 500;
          color: #1c4980;
          text-align: left;
          margin: 0px !important;
          padding: 0px !important;
        }
      }
    }
  }
  // total assessment section end
  .assesment-section {
    padding: 20px;
    @media (max-width: 767px) {
      padding: 0px;
    }
    .ass-overview {
      @media (max-width: 767px) {
        display: none;
      }
    }
    h2 {
      font-size: 18px;
      font-weight: 500;
      color: #1c4980;
      margin-top: 10px;

      margin-bottom: 10px;
      @media (max-width: 767px) {
        padding: 0px;
        font-size: 16px;
        margin-bottom: 0px;
      }
    }
    h3 {
      font-size: 14px;
      font-weight: 600;
      color: #1c4980;
      margin-top: 0;
      white-space: pre;
    }
  }

  .tab {
    border-right: 2px solid #e4dfdf;
    padding: 0px 16px;
  }

  .total-div {
    display: flex;
    align-items: center;
  }
  .first-div {
    display: flex;
    align-items: center;
  }
  .second-div {
    display: flex;
    align-items: center;
  }
  .border-remove {
    border-right: none;
  }
  .third-div {
    display: flex;
    align-items: center;
  }
  .cand-content {
    display: flex;
    align-items: center;
  }

  .candidate-sourc-content {
    display: flex;
  }
  // cart section start
  .cart-section {
    .mob-cart {
      display: none;
      @media (max-width: 757px) {
        display: flex;
        justify-content: space-between;
        padding: 18px;
      }
    }
    .ass-title {
      @media (max-width: 757px) {
        display: none;
      }
    }
    .bottom-section {
      display: flex;

      flex-wrap: wrap;
      @media (max-width: 767px) {
        display: block;
      }
      .addbox {
        cursor: pointer;
        border: 2px dashed #e7e7e7;
        border-radius: 8px;
        background: #f6f8fa;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 27%;
        padding: 20px 30px;
        margin-bottom: 16px;
        @media (max-width: 767px) {
          width: 80%;
          margin: auto;
          padding: 20px;
          margin-bottom: 15px;
        }
        p {
          font-size: 12px;
          font-weight: 500;
          color: #1c4980;
          text-align: center;
          margin-top: 0;
          line-height: 1.4;
          @media (max-width: 767px) {
            margin-top: 8px;
          }
        }
      }
      .carts {
        width: 30%;
        border: 2px solid #e7e7e7;
        border-radius: 8px;
        margin-bottom: 16px;
        margin-left: 20px;
        @media (max-width: 767px) {
          width: 80%;
          margin: auto;
          padding: 20px;
          margin-bottom: 15px;
        }

        .cart-box {
          padding: 12px 20px;
          @media (max-width: 767px) {
            padding: 0px;
          }
        }
        .cart-img {
          display: flex;
          justify-content: space-between;
          .img-wrapp {
            width: 40px;
            height: 40px;
          }
          .del-img {
            width: 30px;
            height: 30px;
          }
        }
        span {
          letter-spacing: 1px;
          padding-left: 8px;
        }
        .card-title {
          display: flex;

          font-size: 14px;
          font-weight: 600;
          color: #1c4980;

          padding: 10px;
          padding-left: 0px;
        }
        .calender {
          padding-left: 10px;
          font-size: 12px;
          font-weight: 500;
          color: #8da4bf;
        }

        .duration-time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 2px dashed #e2dbdb;
          padding: 10px 0px;
        }

        .duration {
          display: flex;

          .first-side {
            margin-top: 10px;
            .dur {
              font-size: 12px;
              font-weight: 500;
              color: #1c4980;
            }
          }
          .second-side {
            margin-top: 10px;
            padding: 0 10px;
            .dur {
              font-size: 12px;
              font-weight: 500;
              color: #1c4980;
            }
          }
          p {
            font-size: 14px;
            font-weight: 600;
            color: #1c4980;
            margin: 0;
            /* padding-top: 5px; */
          }
        }
        .job {
          border-right: 1px solid #f7f7f7;
          padding-right: 10px;
        }
        .share {
          display: flex;
          .sharing {
            width: auto;
            padding-right: 10px;
          }
          .img-wrapp {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
  // cart section end
  // dashboard component start

  .dashboard-components {
    display: none;
    @media (max-width: 767px) {
      width: 80%;
      background: #e8eff4;
      border-radius: 10px;

      position: absolute;
      z-index: 9999;

      height: 100vh;
      display: block;
      position: absolute;
    }
    .dash-div-menu {
      display: flex;
      justify-content: space-between;
      padding: 0px 20px;
      align-items: center;
    }
    .menu {
      font-size: 14px;
      color: #1c4980;
      line-height: 16.8px;
      font-weight: 500;
      font-family: sans-serif;
    }
    .close {
      font-size: 40px;
      a {
        text-decoration: none;
        color: black;
      }
    }
    .dash-div {
      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: row;
      padding-bottom: 15px;
      margin: 20px;
      width: auto;

      padding: 10px;

      .dash-icon {
        width: 20px;
        height: 20px;
        img {
          width: 100%;
        }
      }
      h2 {
        font-size: 12px;
        color: #1c4980;
        line-height: 16.8px;
        font-weight: 500;
        font-family: sans-serif;
        padding-left: 10px;
      }
    }
    .dash-last-child {
      border-top: 1px dashed #d9e3d9;
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: left;
      padding-bottom: 15px;
      align-items: center;
      margin: 28px;

      .admin {
        width: auto !important;
        padding-top: 16px;
        padding-bottom: 10px;
      }
      h2 {
        font-size: 12px;
        color: #1c4980;
        line-height: 16.8px;
        font-weight: 500;
        font-family: sans-serif;
        text-align: center;
      }
    }
    .assesment {
      border: 1px solid #0073e6;
      background: #e5f1fc;
      border-radius: 5px;
    }
  }
  // dashboard component end
}
</style>