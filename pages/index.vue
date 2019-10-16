<template>
  <div>
    <h1>Home Page</h1>
    <svg width="500" height="500">
      <g class="flower" v-for="flower in layoutData.children" :key="flower.data.name" :style="{ transform: `translate(${flower.x}px, ${flower.y}px)`}">
        <circle class="flower__circle" :r="flower.r" :fill="flower.data.color" />
        <text class="flower__label">
          {{ flower.data.name }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
import { hierarchy, pack} from 'd3-hierarchy';

export default {
  data() {
    return {
      flowers: [
        {
          name: 'Roses',
          amount: 25,
          color: '#cc2936'
        },
        {
          name: 'Tulips',
          amount: 40,
          color: '#f2c640'
        },
        {
          name: 'Daisies',
          amount: 15,
          color: '#2a93d4'
        },
        {
          name: 'Narcissuses',
          amount: 9,
          color: '#F7AD0A'
        },
        {
          name: 'Lilac',
          amount: 37,
          color: '#d9fcff'
        },
      ]
    }
  },
  computed: {
    transformFLowerData(){
      return{
        name: 'Top Level',
        children: this.flowers.map(flower => ({
          ...flower,
          size: flower.amount,
          parent: 'Top Level'
        }))
      }
    },
    layoutData() {
      const rootHierarchy =
        hierarchy(this.transformFLowerData)
          .sum(d => d.size)
          .sort((a, b) => {
            return b.value - a.value
          })
      return pack()
        .size([500, 500])
        .padding(10)(rootHierarchy)
    }
  },
  mounted(){
    this.changeTitle();
  },
  methods: {
    changeTitle(){
      d3.selectAll("h1").style("color", "blue");
    }
  }
}
</script>

<style scoped>
.flower {
  transition: transform 0.1s ease-in-out;
}

.flower__circle {
  transition: r 0.1s ease-in-out;
}
</style>
