<template>
  <div>
    <h1 v-text="'All Users'"></h1>
    <v-card elevation="2">
      <v-row class="text-center" v-if="lists.length < 1">
        <v-col cols="12">
          <v-img
            :src="require('../assets/empty.png')"
            class="my-3"
            contain
            height="200"
          />
          <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
              Empty Table
            </h1>
            <p class="subheading font-weight-regular">
              Create new user and it will show up here...
              <br>
              <a href="addUsers">Add User</a>
            </p>
          </v-col>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="lists"
        :items-per-page="15"
        class="elevation-1"
        v-else>
        <template v-slot:[`item.actions`]="{ item }">
          <td>
            <ButtonComponent :id="item.id" @reFetch="fetchApi" />
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent'
import axios from 'axios'

export default {
  name: 'AllUsers',
  components: {
    ButtonComponent
  },
  async created () {
    await this.fetchApi()
  },
  methods: {
    async fetchApi () {
      const res = await axios.get('https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test')
      this.lists = res.data
      this.lists = this.lists.filter((list) => {
        return !list.soft_delete
      })
    }
  },
  data () {
    return {
      lists: [],
      headers: [
        { text: 'Firstname', value: 'firstname', class: 'title' },
        { text: 'Lastname', value: 'lastname', class: 'title' },
        { text: 'Username', value: 'username', class: 'title' },
        { text: 'Email Address', value: 'email', class: 'title' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>
