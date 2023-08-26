<template>
  
  <div class="app-component">
    <div
      class="main-component"
      :class="showPopup == true ? 'overlay-active' : ''"
    >
      <DashboardComponent />
      <AssetListComponent
        @show-popup="showFormPopup"
        @del-cart="delcart"
        :assessments="assessments"
      />
    </div>
    <div class="form-component">
      <FormComponent
        :show-popup="showPopup"
        @close-popup="closePopup"
        @assessment-added="addAssessment"
      />
    </div>
  </div>
</template>

<script>
import AssetListComponent from "./components/AssetListComponent.vue";
import DashboardComponent from "./components/DashboardComponent.vue";
import FormComponent from "./components/FormComponent.vue";
export default {
  name: "App",
  components: {
    FormComponent,
    DashboardComponent,
    AssetListComponent,
  },
  data() {
    return {
      showPopup: false,
      assessments: [],
    };
  },
  methods: {
    showFormPopup() {
      this.showPopup = true;
      document.body.classList.add("overlay-active");
    },
    closePopup() {
      this.showPopup = false;
      document.body.classList.remove("overlay-active");
    },
    addAssessment(assessment) {
      this.assessments.push(assessment);
      this.showPopup = false;
    },
    delcart(index) {
      this.assessments.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
body {
  background: rgb(247, 247, 247);
  margin: 0 !important;
  font-family: sans-serif;
}
.app-component {
  .main-component {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background: rgb(247, 247, 247);
  }
  .overlay-active {
    overflow: hidden;
    opacity: 0.4;
  }
}
</style>
