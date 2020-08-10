<template>
  <div class="rating flex flex-col justify-center items-center">
    <ul class="list">
      <li
        @click="rate(star)"
        v-for="star in maxStars"
        :class="{ active: star <= stars }"
        :key="star.stars"
        class="star"
      >
        <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i>
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Rating",
  props: ["grade", "maxStars", "hasCounter"],
  data() {
    return {
      stars: this.grade
    };
  },
  methods: {
    rate(star) {
      if (typeof star === "number" && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star;
      }
    }
  }
};
</script>
<style lang="css" scoped>
.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  color: #ffffff;
}
.list {
  padding: 0;
  margin: 0;
}

.star:hover {
  color: #ffe100;
}

.star {
  display: inline-block;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.star:hover:not(.active) {
  color: inherit;
}
.star:first-child {
  margin-left: 0;
}
.star.active {
  color: #ffe100;
}

.info {
  margin-top: 15px;
  font-size: 40px;
  text-align: center;
  display: table;
}
.divider {
  margin: 0 5px;
  font-size: 30px;
}
.score-max {
  font-size: 30px;
  vertical-align: sub;
}
</style>
