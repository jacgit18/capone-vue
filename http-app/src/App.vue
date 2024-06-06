<template>
  <user-survey @survey-submit="storeSurvey"></user-survey>
</template>

<script>
import UserSurvey from "./components/UserSurvey.vue";
export default {
  components: {
    UserSurvey,
  },
  data() {
    return {
      savedSurveyResults: [],
    };
  },
  methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
    },
  },
};
</script>

<style scoped></style>
