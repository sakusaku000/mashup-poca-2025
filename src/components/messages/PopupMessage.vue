<template>
    <div class="absolute" :class="side ? 'top-[360px] left-22 -rotate-3 rounded-tl-sm' : 'top-[520px] right-22 rotate-3'">
        <!-- author container -->
        <div id="author" class="absolute -top-14 flex items-center gap-3 author-container-anim-in" :class="side ? '-left-4' : '-right-4'">
            <!-- blurred darken bg -->
            <div class="absolute inset-0 -inset-x-4 bg-black/20 -z-20 blur-lg" :class="side ? 'author-name-anim-in' : 'author-name-anim-in-alt'"></div>

            <!-- avatar container -->
            <div class="relative w-10 h-10 rounded-full bg-neutral-700 overflow-hidden" :class="!side ? 'order-last' : ''">
                <div class="absolute inset-0 bg-cover" :style="`background-image:url(${message.author.avatar})`"></div>
            </div>
            <!-- username -->
            <span class="text-white font-black text-xl truncate text-ellipsis max-w-60" :class="side ? 'author-name-anim-in' : 'author-name-anim-in-alt'">{{ message.author.name }}</span>
        </div>

        <!-- Message contents container -->
        <div class="bg-neutral-100 border border-neutral-200 rounded-2xl p-4 max-w-96 drop-shadow-[0px_0px_20px_#00000060]" :class="side ? 'rounded-tl-sm contents-container-anim-in' : 'rounded-tr-sm contents-container-anim-in-alt'">
            <!-- Message contents: attachment and text -->
            <div id="messageContent" class="flex flex-col gap-4 items-center">
                <!-- message attachment -->
                <img :src="message.attachment" v-if="message.attachment" class="bg-black/60 max-h-80 rounded-2xl outline-2 outline-neutral-300">
                
                <!-- message content -->
                <span v-if="message.content" class="mx-3 text-xl" v-html="formattedContent"></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { MessageData } from '@/types/MessageData';
    import FormatMessageContent from '@/utils/FormatMessageContent';
    import { ref, type Ref } from 'vue';
    
    // -- define message data prop
    const props = defineProps<{
        message:MessageData 
    }>();
    const formattedContent = FormatMessageContent(props.message.content, 32);

    // -- determine side of screen to display at random
    const side:Ref<boolean> = ref(false);
    if (Math.floor(Math.random()*10) < 5) side.value = true; 
</script>

<style scoped>
    /* Author Icon Container Animation */
    .author-container-anim-in {
        animation:author-container-anim-in 1.5s forwards cubic-bezier(0.860, 0.000, 0.070, 1.000);
    }
    @keyframes author-container-anim-in {
        0% {
            transform:translateY(1000px) translateX(-100px);
        }
        60% {
            transform:translateY(-20px)
        }
    }

    /* Author name animation */
    .author-name-anim-in {
        animation:author-name-anim-in .6s 910ms forwards cubic-bezier(0.860, 0.000, 0.070, 1.000);
        opacity:0;
    }
    @keyframes author-name-anim-in {
        from {
            transform:scale(.9) translateX(-10px);
        }
        to {
            opacity:1;
        }
    }
    /* Author name animation (right side) */
    .author-name-anim-in-alt {
        animation:author-name-anim-in-alt .6s 910ms forwards cubic-bezier(0.860, 0.000, 0.070, 1.000);
        opacity:0;
    }
    @keyframes author-name-anim-in-alt {
        from {
            transform:scale(.9) translateX(10px);
        }
        to {
            opacity:1;
        }
    }

    /* Message contents animation */
    .contents-container-anim-in {
        animation:contents-container-anim-in .6s 1000ms forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        transform-origin:top left;
        opacity:0;
    }
    @keyframes contents-container-anim-in {
        from {
            transform:scale(.8) rotate(-2deg);
        }
        to {
            opacity:1;
        }
    }
    /* Message Contents Animation (Right side) */
    .contents-container-anim-in-alt {
        animation:contents-container-anim-in-alt .6s 1000ms forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        transform-origin:top right;
        opacity:0;
    }
    @keyframes contents-container-anim-in-alt {
        from {
            transform:scale(.8) rotate(2deg);
        }
        to {
            opacity:1;
        }
    }
</style>