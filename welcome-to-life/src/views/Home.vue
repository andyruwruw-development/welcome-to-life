<template>
  <div class="home">
    <LineBitTransition text="Welcome to something else"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LineBitTransition from '@/components/LineBitTransition.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LineBitTransition
  }
}
</script>
