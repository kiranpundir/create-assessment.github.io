<template>
  <div class="formcomponent" v-if="showPopup">
    <div class="title-parent">
      <div class="create-title">
        <h2>Create new assessment</h2>
      </div>
      <div class="close-icon">
        <img @click="closePopup" src="../assets/close.png" />
      </div>
    </div>
    <form>
      <div><label for="name">Name of assessment</label></div>
      <input
        type="text"
        id="name"
        placeholder="Type Here"
        v-model="newAssessment.name"
      /><br />
      <div><label for="title">Purpose of the test is</label></div>
      <select v-model="selectedOption">
        <option value="option1">Select</option>
        <option value="option2">Learning</option>
        <option value="option3">Job</option>
        <option value="option3">Increment</option>
      </select>

      <div><label for="description">Description</label></div>
      <textarea id="description" v-model="newAssessment.description"></textarea
      ><br />
      <div><label for="description">Skills</label></div>
      <div class="recent-data">
        <p v-for="(value, index) in inputValues" :key="index" class="skills">
          {{ value }}<span class="cross">X</span>
        </p>
      </div>

      <input type="text" v-model="newAssessment.job" placeholder="Type Here" />
      <div><label for="duration">Duration of assessment</label></div>
      <input
        type="text"
        id="duration"
        v-model="newAssessment.duration"
        placeholder="HH:MM:SS"
      />
      <button class="save-btn" @click="addAssessment">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      skillValue: "",
      inputValues: ["UI/UX and Design", "No of Question"],
      newAssessment: {
        name: "",
        job: "",
        duration: "",
      },
    };
  },
  props: {
    showPopup: Boolean,
  },
  methods: {
    closePopup() {
      this.$emit("close-popup");
    },
    addAssessment() {
      this.$emit("assessment-added", { ...this.newAssessment });
      this.newAssessment.name = "";
      this.newAssessment.job = "";
      this.newAssessment.duration = "";
      this.newAssessment.description = "";
    },
  },
};
</script>

<style lang="less" scoped>
.formcomponent {
  font-family: sans-serif;
  background: #ffff;
  width: 40%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 767px) {
    width: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 19px;
    top: 66%;
  }
  .title-parent {
    display: flex;
    padding: 0px 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #dadce0;
    h2 {
      font-size: 20px;
      font-weight: 600;
      color: #1c4980;
    }
    .close-icon{
      cursor: pointer;
    }
  }
  form {
    padding: 10px 30px;
    @media (max-width: 767px) {
      padding: 20px 20px;
    }

    select {
      width: 100%;
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    input,
    textarea {
      width: 95%;
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 10px;
      height: 15px;
      line-height: 15px;
    }
    label {
      font-size: 16px;
      font-weight: 600;
      color: #1c4980;
      font-family: system-ui;
    }
    input {
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #dadce0;
    }
    select {
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #dadce0;
    }
    textarea {
      padding: 13px;
      border-radius: 7px;
      border: 1px solid #dadce0;
    }
    input[type="text"] {
      font-size: 14px;
      font-weight: 500;
      color: #1c4980;
      font-family: system-ui;
    }
    .recent-data {
      display: flex;
      flex-wrap: wrap;

      border-radius: 7px;
      border: 1px solid #dadce0;

      p.skills {
        font-size: 12px;
        font-weight: 600;
        color: #1c4980;
        background: #ddedff;
        margin: 10px;
        padding: 15px;
        border-radius: 19px;
        height: 5px;
        line-height: 5px;
        @media (max-width: 767px) {
          padding: 8px;
          height: 10px;
          line-height: 10px;
        }
        span.cross {
          padding: 0px 13px;
          font-size: 13px;
        }
      }
    }
    .save-btn {
      cursor: pointer;
      width: 100%;
      height: 40px;
      background: #0073e6;
      border: 1px solid #0073e6;
      border-radius: 8px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      margin: 20px 0px;
    }
  }
}
body {
  margin: 0 !important;
}
</style>
