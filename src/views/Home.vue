<template>
  <div>
    <h1 v-text="'Home Page'"></h1>
    <v-card elevation="2">
      <v-row>
        <v-col cols="3" class="mx-2" @click="goTo('AllUsers')" style="cursor: pointer">
          <v-card elevation="2" class="text-center pt-2">
            <v-img
              :src="require('../assets/allusers.png')"
              contain
              height="100"
            />
            <div style="color: white; background-color: #b5b0b0">
              <h1>All Users</h1>
              <span>Displaying all users</span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="3" class="mx-2" @click="goTo('AddUsers')" style="cursor: pointer">
          <v-card elevation="2" class="text-center pt-2">
            <v-img
              :src="require('../assets/addusers.png')"
              contain
              height="100"
            />
            <div style="color: white; background-color: #b5b0b0">
              <h1>Add Users</h1>
              <span>Creating new user</span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="3" class="mx-2" @click="goTo('DeactivatedUsers')" style="cursor: pointer">
          <v-card elevation="2" class="text-center pt-2">
            <v-img
              :src="require('../assets/invalid_users.jpg')"
              contain
              height="100"
            />
            <div style="color: white; background-color: #b5b0b0">
              <h1>Deactivated Users</h1>
              <span>Displaying deactivated users</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goTo (routeName) {
      this.$router.push({ name: routeName, params: { id: this.id } })
    }
  }
}
</script>
