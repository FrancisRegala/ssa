<template>
  <div>
    <FormUsers action="displayUsers" :id="$router.currentRoute.params.id" />
  </div>
</template>

<script>
import FormUsers from './FormUsers'
export default {
  name: 'DisplayUsers',
  components: {
    FormUsers
  }
}
</script>
