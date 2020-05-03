<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#171a3b;">
      <b-navbar-brand href="#" style="color:#609dda;"><b>COV19-RADAR</b></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="routePage(1)">Data</b-nav-item>
          <b-nav-item @click="routePage(2)">Map</b-nav-item>
          <b-nav-item @click="routePage(3)">Wiki</b-nav-item>
          <b-nav-item @click="routePage(4)">About</b-nav-item>
        </b-navbar-nav>

      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="danger">☕ Buy me a Coffee</b-button>
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <!-- <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
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
            if (this.$route.path !== '/Wiki/share') this.$router.push('/Wiki/share')
            break;
          case 4:
            if (this.$route.path !== '/About/share') this.$router.push('/About/share')
            break;
          default:
            // code block
        }
      }
    }
}
</script>

<style>
</style>