<template>
  <div>
    <h1 v-text="'Deactivated Users'"></h1>
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
              Deactivate user and it will show up here...
              <br>
              <a href="allUsers">All User</a>
            </p>
          </v-col>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="lists"
        :items-per-page="5"
        class="elevation-1"
        v-else>
        <template v-slot:[`item.actions`]="{ item }">
          <td>
            <v-icon v-text="'mdi-recycle'" title="Restore User"
              style="cursor: pointer;" @click="restoreUser(item.id)">
            </v-icon>
            <v-icon v-text="'mdi-delete'" title="Delete User"
              style="cursor: pointer;" @click="permanentDelete(item.id)">
            </v-icon>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeactivatedUsers',
  async created () {
    await this.fetchApi()
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
  },
  methods: {
    async fetchApi () {
      const res = await axios.get('https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test')
      this.lists = res.data
      this.lists = this.lists.filter((list) => {
        return list.soft_delete
      })
    },
    async permanentDelete (id) {
      const permanentDelete = confirm('Are you sure, do you want to permanently deleted?!')
      if (permanentDelete) {
        await axios.delete(`https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test/${id}`)
        await this.fetchApi()
        alert('User successfully deleted.')
      }
    },
    async restoreUser (id) {
      await axios.put(`https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test/${id}`, {
        soft_delete: false
      })
      await this.fetchApi()
      alert('User successfully restored.')
    }
  }
}
</script>
