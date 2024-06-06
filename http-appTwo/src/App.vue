<template>
  <user-survey ></user-survey>
  <landing-page ></landing-page>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import UserSurvey from "./components/UserSurvey.vue";
export default {
  components: {
    UserSurvey,
    LandingPage
  },
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       id: new Date().toISOString(),
  //     };
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
};
</script>

<style scoped></style>
