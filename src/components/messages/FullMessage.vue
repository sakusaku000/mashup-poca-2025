<template>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <!-- <h1>test</h1> -->
    </div>
</template>

<script lang="ts" setup>
    import type { MessageData } from '@/types/MessageData';

    const props = defineProps<{
        message:MessageData
    }>();

</script>