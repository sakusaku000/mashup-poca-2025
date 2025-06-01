<template>
    <Transition name="popup-fade">
        <PopupMessage :message="messageDisplayStore.popup" v-if="messageDisplayStore.popup"/>
    </Transition>
</template>

<script lang="ts" setup>
    import { useMessageDisplayStore } from '@/stores/MessageDisplayStore';
    import PopupMessage from '../messages/PopupMessage.vue';

    // -- import message display store
    const messageDisplayStore = useMessageDisplayStore();
</script>

<style scoped>
    .popup-fade-leave-to {
        opacity:0;
        transform:scale(.9);
        transition-duration:.4s;
        transition-timing-function:cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }
</style>