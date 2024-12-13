
<template>
  <PureInboxScreen :error="isError" :tasks="tasks" />
</template>

<script>
  import PureInboxScreen from './PureInboxScreen.vue'

  import { computed } from 'vue'

  import { useTaskStore } from '../store'

  export default {
    name: 'InboxScreen',
    components: { PureInboxScreen },
    setup() {
      //👇 Creates a store instance
      const store = useTaskStore()

      //👇 Retrieves the error from the store's state
      const isError = computed(() => store.status === 'error')
      return {
        isError,
        tasks: store.tasks
      }
    }
  }
</script>