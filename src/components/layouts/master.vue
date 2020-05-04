<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#171a3b;">
      <b-navbar-brand href="#" style="color:#609dda;">
        <b @click="routePage(1)">COV19-RADAR</b>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="routePage(1)">Data</b-nav-item>
          <b-nav-item @click="routePage(2)">Map</b-nav-item>
          <b-nav-item @click="routePage(3)">Health</b-nav-item>
          <b-nav-item @click="routePage(5)">Sources</b-nav-item>
          <b-nav-item @click="routePage(4)">About</b-nav-item>
        </b-navbar-nav>

      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item><b-button @click="routePage(6)" style="background-color:Transparent;color:#ffc137;border:1px solid #ffc137;" ><font-awesome-icon icon="hand-holding-medical" style="font-size:16px;color:#ffc137;"/> บริจาค</b-button></b-nav-item>
          <b-nav-item><b-button @click="BuyCoffe()" variant="danger">☕ Buy me a Coffee</b-button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'navbar'
        }
    },
    methods: {
      routePage (val) {
        switch(val) {
          case 1:
            if (this.$route.path !== '/Dashboard/share') this.$router.push('/Dashboard/share')
            break;
          case 2:
            if (this.$route.path !== '/Map/share') this.$router.push('/Map/share')
            break;
          case 3:
            if (this.$route.path !== '/Health/share') this.$router.push('/Health/share')
            break;
          case 4:
            if (this.$route.path !== '/About/share') this.$router.push('/About/share')
            break;
          case 5:
            if (this.$route.path !== '/Sources/share') this.$router.push('/Sources/share')
            break;
          case 6:
            if (this.$route.path !== '/Donate/share') this.$router.push('/Donate/share')
            break;
          default:
            // code block
        }
      },
      BuyCoffe () {
        window.open('https://ko-fi.com/beerzezy')
      }
    }
}
</script>

<style>
</style>