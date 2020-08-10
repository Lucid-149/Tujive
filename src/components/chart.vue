<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button
      class=" text-xs font-semibold  text-accent hover:text-green-900"
      @click="fillData()"
    >
      Randomize
    </button>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apri",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Cost/Trip",
            backgroundColor: "#00FFC2",
            data: [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101]
          },
          {
            label: "Bookings",
            backgroundColor: "#FF00A8",
            data: [205, 408, 188, 190, 58, 200, 190, 400, 164, 254, 290, 201]
          }
        ]
      };
    }
  }
};
</script>

<style></style>
