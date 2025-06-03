<template>
    <Transition name="msg-fade">
        <FullMessage :message="messageDisplayStore.full" v-if="messageDisplayStore.full && !messageDisplayStore.full.attachment"/>
    </Transition>
    <Transition name="msg-fade">
        <ImageFullMessage :message="messageDisplayStore.full" v-if="messageDisplayStore.full && messageDisplayStore.full.attachment"/>
    </Transition>

    <!-- DEBUG VERSIONS FOR TESTING -->
    <!-- <FullMessage :message="debugMessage"/> -->
    <!-- <ImageFullMessage :message="debugMessage"/> -->
</template>

<script lang="ts" setup>
    import { useMessageDisplayStore } from '@/stores/MessageDisplayStore';
    const messageDisplayStore = useMessageDisplayStore();
    import DebugMessages from "@/data/DebugMessages.json";
    import type { MessageData } from '@/types/MessageData';
    import FullMessage from '../messages/FullMessage.vue';
    import ImageFullMessage from '../messages/ImageFullMessage.vue';

    // -- import debug message
    const debugMessage = DebugMessages[0] as MessageData;
</script>

<style scoped>
    .msg-fade-leave-to {
        opacity:0;
        transform:scale(.9);
        transition-duration:.6s;
        transition-timing-function:cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }
</style>