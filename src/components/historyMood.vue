<template>
  <div class="history-mood-container">
    <div class="wrap">
      <div class="profile-area" ref="profileArea">
        <div class="avatar-name-area">
          <div class="avatar-wrap">
            <img class="avatar" :src="userData.avatar" alt="">
          </div>
          <div class="name">{{ userData.name }}</div>
        </div>
        <p class="average-value">{{ averageValue }}</p>
        <p class="describe-text">周平均心情指数</p>
      </div>
      <div class="chart-area">
        <div class="mood-bar-area">
        <div class="bg-cell" ref="bgCell">
          <div class="line line-100"></div>
          <div class="line line-50"></div>
        </div>
          <ul class="mood-bar-ul">
            <li v-for="(item, index) in moodData" @click="clickBar(item, index)" :key="item.id" class="mood-bar-li">
              <div class="bar-day-area">
                <div class="bar-wrap">
                  <div class="bar" ref="bar" :class="getColorClass(item.value)" :style="getBarStyle(index)">
                    <div class="value-text" ref="valueText" :style="getTextStyle(index)">{{ item.value }}</div>
                    <div class="expression" ref="face" :style="getFaceStyle(index)">
                      <!-- expression-icon -->
                      <expression-icon :level="getExpressLevel(item.value)" />
                    </div>
                  </div>
                </div>
                <div class="day" ref="day" :class="getNowDayClass(index)" :style="getDayStyle(index)">
                  <span class="day-span">{{ item.dayText }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import expressionIcon from "./expressionIcon.vue"

export default {
  name: 'historyMood',
  props: {
    moodData: {
      type: Array,
      default: () => {
        return []
      }
    },
    userData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activeIndex: null
    }
  },
  computed: {
    averageValue() {
      let r = 0
      let total = 0
      let count = 0
      this.moodData.forEach((item)=>{
        if (item.value !== null) {
          total += item.value
          count += 1
        }
      })
      if (!count) {
        count = 1
      }
      r = total / count
      r = r.toFixed(0)
      return r
    },
    fullBarLength() {
      return 2.84 * (window.fontSizeNum || 1)
    },
  },
  components: {
    expressionIcon,
  },
  created() {
  
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.setAnimation()
      }, 0)
    })
  },
  methods: {
    getExpressLevel(value) {
      let level = 1
      if (value < 90 && value > 0) {
        level = 2
      } else if (value >= 90) {
        level = 3
      }
      return level
    },
    getColor(value) {
      let c = '#CFCFCF'
      if (value < 90 && value > 0) {
        c = '#52C873'
      } else if (value >= 90) {
        c = '#FF823C'
      }
      return c
    },
    getColorClass(value) {
      const c = this.getColor(value)
      const cls = `bg-${c.slice(1)}`
      return cls
    },
    getNowDayClass(index) {
      let r = ''
      const len = this.moodData.length
      if (len - 1 === index) {
        r = 'day-now'
      }
      return r
    },
    getBarStyle(index) {
      const r = {
        transitionDelay: `${0.2 + index * 0.1}s, ${index * 0.1}s, 0s, 0s`,
        transitionDuration: '0.4s, 0.2s, 0.3s, 0.3s',
        transitionProperty: 'height, opacity, width, transform' 
      }
      if (this.activeIndex === index) {
        const avtiveStyle = this.getActiveBarStyle()
        Object.assign(r, avtiveStyle)
      }
      return r
    },
    getFaceStyle(index) {
      return {
        transitionDelay: `${index * 0.1}s`
      }
    },
    getTextStyle(index) {
      return {
        transitionDelay: `${0.4 + index * 0.1}s`
      }
    },
    getDayStyle(index) {
      let r = {
        transitionDelay: `${0.27 + index * 0.1}s, 0s, 0s`,
        transitionDuration: '0.27s, 0.3s, 0.3s',
        transitionProperty: 'opacity, color, box-shadow'
      }
      if (this.moodData.length - 1 === index) {
        r = {
          transitionDelay: `${0.27 + index * 0.1}s, ${0.27 + index * 0.1}s`,
          transitionDuration: '0.27s, 0.2s',
          transitionProperty: 'opacity, transform'
        }
      }
      if (this.activeIndex === index) {
        const avtiveStyle = this.getActiveDayStyle()
        Object.assign(r, avtiveStyle)
      }
      return r
    },
    setAnimation() {
      const len = this.moodData.length
      const profile = this.$refs.profileArea
      profile.style.opacity = '1'
      const bgCell = this.$refs.bgCell
      bgCell.style.opacity = '1'
      this.moodData.forEach((item, index) => {
        let percent = 35.8
        const value = item.value
        const bar = this.$refs.bar[index]
        const face = this.$refs.face[index]
        const valueText = this.$refs.valueText[index]
        const day = this.$refs.day[index]
        if (value > 35.8) {
          percent = value
        }
        const barStyle = {
          height: `${percent}%`,
          opacity: '1'
        }
        const faceStyle = {
          transform: 'scale(1)'
        }
        const valueTextStyle = {
          opacity: '1'
        }
        const dayStyle = {
          opacity: '1'
        }
        if (len - 1 === index) {
          Object.assign(dayStyle, {
            transform: 'scale(1)'
          })
        }
        Object.assign(bar.style, barStyle)
        Object.assign(face.style, faceStyle)
        Object.assign(valueText.style, valueTextStyle)
        Object.assign(day.style, dayStyle)
      })
    },
    getActiveBarStyle() {
      const item = this.moodData[this.activeIndex]
      let color = '#FFE9D5'
      let topColor = '#FFA14A'
      let bottomColor = '#FFCC4A'
      if (item.value < 90) {
        color = '#DCFFD6'
        topColor = '#42F373'
        bottomColor = '#A1FD44'
      }
      const style = {
        border: `0.03rem solid ${color}`,
        boxShadow: '0px 0.04rem 0.1rem rgba(0, 0, 0, 0.2)',
        background: `linear-gradient(180deg, ${topColor} 42.71%, ${bottomColor} 100%)`,
        width: '0.5rem',
        transform: 'scale(1.02)'
      }
      return style
    },
    getActiveDayStyle() {
      const item = this.moodData[this.activeIndex]
      let color = this.getColor(item.value)
      const style = {
        color,
        boxShadow: '0px 0.04rem 0.1rem rgba(0, 0, 0, 0.2)',
        borderRadius: '0.08rem',
        background: '#fff',
      }
      return style
    },
    clickBar(item, index) {
      if (item.value === null) {
        return
      }
      this.activeIndex = index
    },
  },
}

</script>

<style scoped>
.history-mood-container {

}
.profile-area {
  background: #FFFFFF;
  box-shadow: 0px -0.12rem 0.12rem 0 rgb(0 0 0 / 8%);
  border-radius: 0.24rem;
  padding: 0.43rem 0.3rem 0 0.3rem;
  width: 3.9rem;
  margin: 0.18rem auto 0 auto;
  position: relative;
  opacity: 0;
  transition: opacity ease-in 0.5s;
}
.avatar-name-area {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-wrap {
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 50%;
  overflow: hidden;
}
.avatar {
  width: 100%;
}
.name {
  font-family: PingFang HK;
  font-style: normal;
  font-weight: 500;
  font-size: 0.2rem;
  margin-left: 0.12rem;
  color: #2D2F33;
}
.average-value {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 0.72rem;
  margin: 0 auto;
  text-align: center;
}
.describe-text {
  font-family: PingFang HK;
  font-style: normal;
  font-weight: 500;
  font-size: 0.18rem;
  color: #929292;
  margin: 0 auto;
  text-align: center;
}
.chart-area {
  margin-top: 0.34rem;
}
.mood-bar-area {
  position: relative;
}
.mood-bar-ul {
  position: relative;
  display: flex;
  padding: 0 0.12rem;
  justify-content: space-between;
  align-items: flex-end;
}
.mood-bar-li {
  position: relative;
  text-align: center;
  width: 0.5rem;
  display: flex;
  justify-content: center;
}
.bg-CFCFCF {
  background: #CFCFCF;
}
.bg-52C873 {
  background: #52C873;
}
.bg-FF823C {
  background: #FF823C;
}
.bar-day-area {}
.bg-cell {
  position: absolute;
  top: 0;
  height: 2.84rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: opacity ease-in 0.5s;
}
.line {
  position: absolute;
  left: 0.12rem;
  right: 0.12rem;
  background: #f2f2f2;
  border-radius: 0.16rem;
  height: 2px;
}
.line-100 {
  top: 0;
}
.line-50 {
  top: 50%;
}
.bar-wrap {
  position: relative;
  height: 2.84rem;
  display: flex;
  align-items: flex-end;
}
.bar {
  font-family: Nunito;
  font-size: 0.2rem;
  color: #fff;
  width: 0.44rem;
  height: 0.44rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  box-sizing: content-box;
}
.bar-active {
  width: 0.5rem;
}
.day {
  margin: 0.21rem auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.36rem;
  width: 0.36rem;
  opacity: 0;
}
.day-span {
  font-family: PingFang HK;
  font-style: normal;
  font-weight: 500;
  font-size: 0.18rem;
}
.day-now {
  width: 0.36rem;
  height: 0.36rem;
  background: #2d2f33;
  color: #fff;
  border-radius: 0.08rem;
  margin-left: auto;
  margin-right: auto;
  transform: scale(0);
}
.day-active {
  background: #fff;
}
.value-text {
  margin: 4px auto 0 auto;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.27s;
}
.expression {
  position: absolute;
  width: 0.36rem;
  height: 0.36rem;
  bottom: 0rem;
  margin: 0.04rem;
  transition: transform linear 0.2s;
  transform: scale(0);
}
</style>

