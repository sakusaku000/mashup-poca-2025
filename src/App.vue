<template>
    <!-- create main 1080p canvas -->
    <!-- TODO: REMOVE PLACEHOLDER BACKGROUND -->
     <!--  style="background-image:url(https://cdn.discordapp.com/attachments/549589798554435625/1379185042991091722/image.png?ex=683f51aa&is=683e002a&hm=30ad7ba7de31204c20f68415f0b3843b8311c22a10903c296f912ff87661134c&)" -->
    <main class="fixed top-0 left-0 w-[1920px] h-[1080px] outline-2 outline-red-500 bg-cover overflow-hidden" style="background-image:url(https://cdn.discordapp.com/attachments/549589798554435625/1379185042991091722/image.png?ex=683f51aa&is=683e002a&hm=30ad7ba7de31204c20f68415f0b3843b8311c22a10903c296f912ff87661134c&)">
        
        <!-- Popup Displays: Messages + Avatars. Wrapped in fade transition. These disappear if a full screen message is being displayed  -->
        <div class="absolute inset-0 duration-300" :class="messageDisplay.full ? 'opacity-0' : 'delay-500'">
                
            <!-- Popup Messages -->
            <PopupMessageDisplay/>

            <!-- Avatar popups -->
            <UserPopupDisplay/>

        </div>

        <!-- Full Screen Messages -->
        <FullMessageDisplay/>
    </main>

    <!-- debug overlay -->
    <DebugDisplay v-if="debugOverlay"/>
</template>

<script lang="ts" setup>
    import type { Ref } from 'vue';
    import FullMessageDisplay from './components/handlers/FullMessageDisplay.vue';
    import PopupMessageDisplay from './components/handlers/PopupMessageDisplay.vue';
    import { ref } from 'vue';
    import { useMessageDisplayStore } from './stores/MessageDisplayStore';
    import DebugDisplay from './components/handlers/DebugDisplay.vue';
import UserPopupDisplay from './components/handlers/UserPopupDisplay.vue';
import { io } from 'socket.io-client';
import type { MessageData } from './types/MessageData';

    // import message display store
    const messageDisplay = useMessageDisplayStore();

    // TODO: init connection to socket here, unless debug query flag is provided, then set debug mode
    
    // -- get URL parameters
    const params = new URLSearchParams(window.location.search);

    // -- check if fake msg mode parameter exists, doesn't matter what its set to
    if (params.get("fakemsg")) {
        // -- enable listening for keyboard events
        window.onkeydown = (e) => {
            switch(e.key) {
                // -- send a full screen event
                case "m":
                    messageDisplay.setDebugFullMessage();
                    break;
                // -- enable random popups
                case "p":
                    messageDisplay.setDebugMode();
                    break;
            } 
        }
    } 
    // -- if fake msg is disabled, make connection to socket server
    else {
        // -- create socket connection
        const socket = io(import.meta.env.VITE_APP_GUARDIAN_SOCKET_URL);
        socket.on("connect", () => {
            messageDisplay.setSocketActive();
        })
        socket.on("disconnect", () => {
            messageDisplay.setSocketInactive();
        })

        // -- listen for message events
        // FULL
        socket.on("MESSAGE_FULL", (message) => {
            messageDisplay.setFull(message as MessageData);
            console.log(`FULL Message Displayed: ${message}`);
        });
        // POPUP
        socket.on("MESSAGE_POPUP", (message) => {
            messageDisplay.setPopup(message as MessageData);
            console.log(`POPUP Message Displayed: ${message}`);
        });
    }

    // -- check for debug mode overlay param
    const debugOverlay:Ref<boolean> = ref(false);
    if (params.get("debug")) {
        debugOverlay.value = true;
    }
</script>

<style>
    .display-fade-enter-from, .display-fade-leave-to {
        opacity:0;
        transition: opacity .2s ease;
    }
</style>