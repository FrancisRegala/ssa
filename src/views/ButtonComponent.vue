<template>
  <div>
    <v-icon v-text="'mdi-information'" title="Display Details"
      style="cursor: pointer;" @click="displayDetails">
    </v-icon>
    <v-icon v-text="'mdi-pencil'" title="Edit Details"
      style="cursor: pointer;" @click="editDetails">
    </v-icon>
    <v-icon v-text="'mdi-delete'" title="Deactivate User"
      style="cursor: pointer;" @click="deactivateUser">
    </v-icon>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ButtonComponent',
  props: ['id'],
  methods: {
    async deactivateUser () {
      const deactivate = confirm('Are you sure, do you want to deactivate?!')
      if (deactivate) {
        await axios.put(`https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test/${this.id}`, {
          soft_delete: true
        })
        this.$emit('reFetch')
        alert('User successfully deactivated.')
      }
    },
    displayDetails () {
      this.$router.push({ name: 'DisplayUsers', params: { id: this.id } })
    },
    editDetails () {
      this.$router.push({ name: 'EditUsers', params: { id: this.id } })
    }
  }
}
</script>
