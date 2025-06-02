<template>
    <div class="absolute inset-0 flex items-center justify-center gap-10 -rotate-1 scale-125">
        <div class="relative w-[800px]">
            <!-- author container -->
            <div class="relative flex justify-start gap-8 author-container-anim-in">
                <!-- avatar container -->
                <div class="relative -top-4 w-32 h-32 rounded-full bg-neutral-700 overflow-hidden drop-shadow-[0px_0px_20px_#00000060]">
                    <div class="absolute inset-0 bg-cover" :style="`background-image:url(${message.author.avatar})`"></div>
                </div>

                <!-- username -->
                <span class="text-white font-black text-4xl truncate text-ellipsis max-w-96 drop-shadow-[0px_0px_10px_#00000090] author-name-anim-in">{{ message.author.name }}</span>
            </div>

            <!-- Message contents -->
            <div class="absolute top-[55px] left-[160px] right-0 bg-neutral-100 border border-neutral-200 rounded-2xl rounded-tl-sm p-6 px-7 drop-shadow-[0px_0px_20px_#00000060] message-contents-anim-in">
                <!-- message content -->
                <span v-if="message.content" class="text-3xl font-medium" v-html="formattedContent"></span>

                <!-- Send a message notice -->
                <span class="absolute -bottom-10 right-2 text-xl text-white drop-shadow-[0px_0px_20px_#00000060] post-msg-notice-anim-in">send messages and photos in <b>#95live</b> to appear on screen!</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { MessageData } from '@/types/MessageData';
    import FormatMessageContent from '@/utils/FormatMessageContent';

    const props = defineProps<{
        message:MessageData
    }>();
    const formattedContent = FormatMessageContent(props.message.content, 36);
</script>

<style scoped>
    /* Author Container anim in */
    .author-container-anim-in {
        animation:author-container-anim-in 1.5s forwards cubic-bezier(0.860, 0.000, 0.070, 1.000);
        opacity:0;
    }
    @keyframes author-container-anim-in {
        0% {
            transform:translateX(-800px) scale(.1);
        }
        60% {
            transform:translateY(-20px);
            opacity:1;
        }
        64% {
            transform:translateY(-20px);
            opacity:1;
        }
        100% {
            opacity:1;
        }
    }

    /* Author username anim in */
    .author-name-anim-in {
        animation:author-name-anim-in .6s 1100ms forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        opacity:0;
        transform-origin:left;
    }
    @keyframes author-name-anim-in {
        from {
            transform:scale(.7);
            opacity:0;
        }
        to {
            opacity:1;
        }
    }

    /* Message contents anim in */
    .message-contents-anim-in {
        animation:message-contents-anim-in .7s 1200ms forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        opacity:0;
        transform-origin:top left;
    }
    @keyframes message-contents-anim-in {
        from {
            transform:scale(.7) rotate(-2deg);
            opacity:0;
        }
        to {
            opacity:1;
        }
    }

    /* Post messages notice anim in */
    .post-msg-notice-anim-in {
        animation:post-msg-notice-anim-in 1s 2200ms forwards cubic-bezier(0.860, 0.000, 0.070, 1.000);
        opacity:0;
    }
    @keyframes post-msg-notice-anim-in {
        from {
            transform:translateY(-20px);
        }
        to {
            opacity:1;
        }
    }
</style>