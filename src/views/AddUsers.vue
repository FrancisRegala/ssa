<template>
  <div>
    <FormUsers action="addUsers" />
  </div>
</template>

<script>
import FormUsers from './FormUsers'
export default {
  name: 'AddUsers',
  components: {
    FormUsers
  }
}
</script>
