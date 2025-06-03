<template>


    <!-- DEBUG user popup -->
    <UserPopup :user="{
        userId:'0', 
        userAvatar:'https://cdn.discordapp.com/avatars/255673616342056961/41e435daeb8894562d5b6fc588ed8630.png?size=4096'
    }"/>
</template>

<script lang="ts" setup>
    import { useMessageDisplayStore } from '@/stores/MessageDisplayStore';
    import UserPopup from '../UserPopup.vue';

    // -- import message display store
    const messageDisplayStore = useMessageDisplayStore();
</script>