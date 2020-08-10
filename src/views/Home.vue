<template>
  <div
    class=" h-full w-full subpixel-antialiased flex flex-col justify-center items-center "
  >
    <div class=" w-full flex justify-center text-4xl capitalize items-center">
      <chart />
    </div>
    <div
      class="mt-6 mb-5 text-white bg-table  shadow w-11/12 h-full rounded-sm px-5 py-2"
    >
      <div class=" flex justify-between">
        <div class=" flex space-x-5">
          <div class=" capitalize text-xs font-thin flex items-baseline">
            <span class=" text-base font-semibold text-accent px-1">10 </span
            >Active
          </div>
          <div class=" capitalize text-xs font-thin flex items-baseline">
            <span class=" text-base font-semibold text-yellow-400 px-1"
              >14 </span
            >Stage
          </div>
          <div class=" capitalize text-xs font-thin flex items-baseline">
            <span class=" text-base font-semibold text-red-600 px-1">15 </span
            >service
          </div>
        </div>
        <div class=" flex space-x-4 items-center">
          <button class=" text-xl text-white hover:text-gray-700">
            <i class="fas fa-cog"></i>
          </button>
          <button class=" text-sm text-secondary hover:text-green-900">
            <i class="fas fa-sync"></i>
          </button>
        </div>
      </div>
      <div
        class=" mt-1 grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 "
      >
        <!-- List of Matatus in Garage -->
        <button
          class=" bg-tertiary py-1 relative rounded border border-transparent hover:border-accent"
        >
          <img class=" rounded-t" src="../assets/img/matatu.png" alt="" />
          <div class=" py-2  flex flex-col">
            <span class=" text-sm text-gray-600">Tuko SACCO</span>
            <span class=" text-white text-lg capitalize font-semibold"
              >Matatu name</span
            >
            <span class=" uppercase text-xxs text-secondary">route: 109</span>
            <div class=" flex justify-center">
              <star-rating :grade="4" :maxStars="5" :hasCounter="false" />
            </div>
          </div>
          <span class=" font-semibold text-primary absolute top-0 right-0 px-2">
            <span class=" text-accent text-xs font-light">No.</span> 49</span
          >
          <div
            class=" ml-2 w-3 h-3 absolute top-0 left-0 mt-2 rounded-full bg-accent"
          ></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StarRating from "@/components/ratings.vue";
import Chart from "@/components/chart.vue";
export default {
  name: "Home",
  components: { StarRating, Chart }
};
</script>
