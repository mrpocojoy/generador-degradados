const app = Vue.createApp({
  data: () => ({
    title: "Gradient Generator",
    fcolor: "#18b54e",
    scolor: "#8c29c2",
    direction: "to right",
    degrees: 0,
  }),

  computed: {
    setColor() {
      // if (this.direction === "custom") this.direction = this.degrees + "deg";

      return `background:linear-gradient(${this.direction}, ${this.fcolor},${this.scolor});`;
    },
  },

  methods: {},
});
