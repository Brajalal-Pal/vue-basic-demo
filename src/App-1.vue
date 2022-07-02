<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <LifecycleTest v-if="numberOfClicks < 10" :numberOfClicks="numberOfClicks" />
  <CongratulationMessage :numberOfClicks="numberOfClicks" />
  <CounterButton @increment="increment" :numberOfClicks="numberOfClicks" />
  <TimerComponent @tick="onTick" name="Timer 1" :delay="2000" />
  <TimerComponent @tick="onTick" name="Timer 2" :delay="5000" />
  <PeopleList />
  <hr />
  <FlashingMessage :delay="500" message="Hello Friends" />
</template>

<script>
import PeopleList from "./components/PeopleList.vue";
import CounterButton from "./components/CounterButton.vue";
import CongratulationMessage from "./components/Congratulations.vue";
import LifecycleTest from "./components/LifecycleTest.vue";
import TimerComponent from "./components/Timer.vue";
import FlashingMessage from "./components/FlashingMessage.vue";

export default {
  name: "App",
  components: {
    PeopleList,
    CounterButton,
    CongratulationMessage,
    LifecycleTest,
    TimerComponent,
    FlashingMessage,
  },
  data() {
    return {
      numberOfClicks: 0,
    };
  },
  methods: {
    increment() {
      this.numberOfClicks += 1;
    },
    onTick(name) {
      console.log(name + ": Tick!!");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
