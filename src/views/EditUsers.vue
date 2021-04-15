<template>
  <div>
    <FormUsers action="editUsers" :id="$router.currentRoute.params.id"/>
  </div>
</template>

<script>
import FormUsers from './FormUsers'
export default {
  name: 'EditUsers',
  components: {
    FormUsers
  }
}
</script>
