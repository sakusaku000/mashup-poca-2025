<template>
    <!-- create main 1080p canvas -->
    <!-- TODO: REMOVE PLACEHOLDER BACKGROUND -->
    <main class="fixed top-0 left-0 w-[1920px] h-[1080px] outline-2 outline-red-500 bg-cover overflow-hidden" style="background-image:url(https://cdn.discordapp.com/attachments/549589798554435625/1378491440778186882/image.png?ex=683ccbb2&is=683b7a32&hm=3be38ca7720af57bac144eeb74b44e26156b55a9793ae832a6ef4a8d9b872996&)">
        
        <!-- Popup Displays: Messages + Avatars. Wrapped in fade transition. These disappear if a full screen message is being displayed  -->
        <Transition name="display-fade">
            <div class="absolute inset-0" v-if="!messageDisplay.full">
                
                <!-- Popup Messages -->
                <PopupMessageDisplay/>

            </div>
        </Transition>
    </main>
</template>

<script setup>
    // -- import message display handlers
    import PopupMessageDisplay from './components/handlers/PopupMessageDisplay.vue';

    // -- import message display store
    import { useMessageDisplayStore } from './stores/MessageDisplayStore';
    const messageDisplay = useMessageDisplayStore();

    // TODO: init connection to socket here, unless debug query flag is provided, then set debug mode
    
    // -- get URL parameters
    const params = new URLSearchParams(window.location.search);

    // -- check if debug mode parameter exists, doesn't matter what its set to
    if (params.get("debug")) {
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
    // -- if no debug parameter is set, make connection to socket server
    else {
        // TODO: setup io connection
    }
</script>

<style>
    .display-fade-enter-from, .display-fade-leave-to {
        opacity:0;
        transition: opacity .2s ease;
    }
</style>