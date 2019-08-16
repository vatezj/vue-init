// common-mixin.vue
export default {
  data() {
      return {}
  },
  created () {
      
  },
  methods: {
      routerLink(page, replace = false) {
          if (replace) {
              this.$router.replace(page);
          } else {
              this.$router.push(page);
          }
      },
  }
}
