<template>
  <div class="dashboard-component">
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
        <img class="admin" src="../assets/admin.png" />
      </div>
      <div class="dash-icon">
        <img src="../assets/admin_meds.png" />
      </div>

      <h2>Round Status</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardComponent",
};
</script>

<style lang="less" >
.dashboard-component {
  width: 10%;
  background: #fff;
  border-radius: 10px;
  padding-top: 40px;
  height: 100vh;
  font-family: sans-serif;
  @media (max-width: 767px) {
    display: none;
  }
  .dash-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 15px;

    width: 60%;
    margin: auto;
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
    }
  }
  .dash-last-child {
    border-top: 1px dashed #d9e3d9;
    width: 55%;
    margin: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
    align-items: center;
    flex-direction: column;
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

body {
  margin: 0 !important;
}
</style>