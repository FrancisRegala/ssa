<template>
  <div>
    <h1 v-text="title"></h1>
    <v-card elevation="2">
      <v-form v-model="valid" ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="firstname" label="First name" placeholder="First name"
                :rules="requiredRules" :readonly="lock" required>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="lastname" label="Last name" placeholder="Last name"
                :rules="requiredRules" :readonly="lock" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="username" label="User name" placeholder="User name"
                :rules="requiredRules" :readonly="lock" required>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="email" label="Email Address" placeholder="Email Address"
                :rules="emailRules" :readonly="lock" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="password" label="Password" placeholder="Password"
                :rules="passwordRules" :readonly="lock" required type="password">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn color="info" class="mr-4" @click="saveUsers"
                v-show="action==='editUsers'"> Submit
              </v-btn>
              <v-btn color="success" class="mr-4" @click="newUsers"
                v-show="action==='addUsers'"> Add
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormUsers',
  async created () {
    if (this.action === 'addUsers') {
      this.title = 'Add Users'
    } else if (this.action === 'displayUsers') {
      this.title = 'User Details'
      this.lock = true
    } else if (this.action === 'editUsers') {
      this.title = 'Edit Details'
    }
    if (this.id) {
      const res = await axios.get(`https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test/${this.id}`)
      this.user = res.data
      this.firstname = this.user.firstname
      this.lastname = this.user.lastname
      this.username = this.user.username
      this.email = this.user.email
      this.password = this.user.password
    }
  },
  props: ['action', 'id'],
  data: () => ({
    user: [],
    lock: false,
    title: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    valid: false,
    requiredRules: [
      v => !!v || 'This is a required text field'
    ],
    passwordRules: [
      v => !!v || 'This is a required password field'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'This should only contain a valid email value.'
    ]
  }),
  methods: {
    async saveUsers () {
      this.$refs.form.validate()
      if (this.valid) {
        await axios.put(`https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test/${this.id}`, {
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          email: this.email,
          password: this.password
        })
        alert('User details successfully saved!')
        this.$router.push({ name: 'AllUsers' })
        // this.$refs.form.reset()
      }
    },
    async newUsers () {
      this.$refs.form.validate()
      if (this.valid) {
        await axios.post('https://6076b1961ed0ae0017d69919.mockapi.io/api/v1/test/', {
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          email: this.email,
          password: this.password
        })
        alert('User details successfully added!')
        this.$refs.form.reset()
      }
    }
  }
}
</script>
