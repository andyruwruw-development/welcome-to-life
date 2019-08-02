<template>
  <div class="home">
    <LineBitTransition text="Booting up systems, Loading Testing Cases."/>
    <LineRandomLetterTransition text="Booting up systems, Loading Testing Cases."/>

  </div>
</template>

<script>
// @ is an alias to /src
import LineBitTransition from '@/components/LineBitTransition.vue'
import LineRandomLetterTransition from '@/components/LineRandomLetterTransition.vue'

export default {
  name: 'home',
  components: {
    LineBitTransition,
    LineRandomLetterTransition
  }
}
</script>
