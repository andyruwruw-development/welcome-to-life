<template>
  <div class="home">
    <LineBitTransition text="Welcome to something else"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LineBitTransition from '@/components/LineBitTransition.vue'

export default {
  name: 'home',
  components: {
    LineBitTransition
  }
}
</script>
