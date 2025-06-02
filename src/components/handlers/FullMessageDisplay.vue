<template>
    <!-- DEBUG VERSION FOR TESTING -->
    <FullMessage :message="debugMessage"/>
</template>

<script lang="ts" setup>
    import { useMessageDisplayStore } from '@/stores/MessageDisplayStore';
    const messageDisplayStore = useMessageDisplayStore();
    import DebugMessages from "@/data/DebugMessages.json";
    import type { MessageData } from '@/types/MessageData';
    import FullMessage from '../messages/FullMessage.vue';

    // -- import debug message
    const debugMessage = DebugMessages[3] as MessageData;
</script>