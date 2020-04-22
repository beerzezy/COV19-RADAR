<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#3a3748;">
      <b-navbar-brand href="#">COV19-RADAR</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
          <b-nav-item href="#">Dashboard</b-nav-item>
          <b-nav-item href="#">Map</b-nav-item>
          <b-nav-item href="#">Wiki</b-nav-item>
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
    }
}
</script>

<style>
  /* * {
    margin: 0;
    padding: 0;
  } */
  /* .header {
    height: 78px;
    background: #34495e;
    padding: 0 20px;
    color: #fff;
  }
  .logo {
    line-height: 100px;
    float: left;
    text-transform: uppercase;
  }
  .menu {
    float: right;
    line-height: 100px;
  }
  .menu a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 10px;
    transition: 0.4s;
  }
  .show-menu-btn,.hide-menu-btn{
    transition: 0.4s;
    font-size: 30px;
    cursor: pointer;
    display: none;
  }
  .show-menu-btn{
    float: right;
  }
  .show-menu-btn i{
    line-height: 100px;
  }
  .menu a:hover,
  .show-menu-btn:hover,
  .hide-menu-btn:hover{
    color: #3498db;
  }

  .content{
    padding: 0 20px;
  }
  .content img{
    width: 100%;
    max-width: 700px;
    margin: 20px 0;
  }
  .content p{
    text-align: justify;
  }

  #chk{
    position: absolute;
    visibility: hidden;
    z-index: -1111;
  }

  @media screen and (max-width:800px) {
    .show-menu-btn,.hide-menu-btn{
      display: block;
    }
    .menu{
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #333;
      right: -100%;
      top: 0;
      text-align: center;
      padding: 80px 0;
      line-height: normal;
      transition: 0.7s;
    }
    .menu a{
      display: block;
      padding: 20px;
    }
    .hide-menu-btn{
      position: absolute;
      top: 40px;
      right: 40px;
    }
    #chk:checked ~ .menu{
      right: 0;
    }
  } */
</style>