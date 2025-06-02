<template>
    <Transition name="popup-fade">
        <PopupMessage :message="messageDisplayStore.popup" v-if="messageDisplayStore.popup"/>
    </Transition>

    <!-- DEBUG VERSION -->
    <!-- <PopupMessage :message="debugMessage"/> -->
</template>

<script lang="ts" setup>
    import { useMessageDisplayStore } from '@/stores/MessageDisplayStore';
    import PopupMessage from '../messages/PopupMessage.vue';
    import DebugMessages from "@/data/DebugMessages.json";
    import type { MessageData } from '@/types/MessageData';

    // -- import message display store
    const messageDisplayStore = useMessageDisplayStore();

    // -- import debug message
    const debugMessage = DebugMessages[9] as MessageData;
</script>

<style scoped>
    .popup-fade-leave-to {
        opacity:0;
        transform:scale(.9);
        transition-duration:.4s;
        transition-timing-function:cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }
</style>