<template>
    <div id="app">
        <app-header />
        <history-mood :moodData="moodData" :userData="userData" />
    </div>
</template>

<script>
import historyMood from "./components/historyMood.vue"
import appHeader from "./components/appHeader.vue"

export default {
    name: "App",
    data() {
        return {
            userData: {
                name: "李强",
                avatar: require('./assets/avatar.png'),
            },
            moodData: [
                {
                    value: 86,
                    dayText: "六",
                    dayNum: 6
                },
                {
                    value: 80,
                    dayText: "日",
                    dayNum: 7
                },
                {
                    value: null,
                    dayText: "一",
                    dayNum: 1
                },
                {
                    value: 90,
                    dayText: "二",
                    dayNum: 2
                },
                {
                    value: 92,
                    dayText: "三",
                    dayNum: 3
                },
                {
                    value: 97,
                    dayText: "四",
                    dayNum: 4
                },
                {
                    value: 81,
                    dayText: "五",
                    dayNum: 5
                },
            ],
        };
    },
    components: {
        historyMood,
        appHeader,
    },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
li {
    list-style: none;
}
#app {
  font-size: 0;
}
div {
  box-sizing: border-box;
}
</style>
