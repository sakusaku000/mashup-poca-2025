<template>
    <div class="absolute inset-0 flex items-center justify-center">

        <!-- Main container -->
        <div class="absolute inset-28 flex items-center justify-center main-container-anim-in">
            
            <!-- Attachment -->
            <img :src="message.attachment" class="h-full rounded-4xl border-2 border-neutral-200/60 drop-shadow-2xl bg-black/80" :class="message.content ? 'image-scale-down-anim' : 'image-scale-down-anim-imgonly'">

            <!-- Message contents -->
            <div class="absolute -bottom-3 right-10 w-[640px] -rotate-2 flex items-start" v-if="message.content && message.attachment">
                <div class="absolute bottom-0 left-[82px] right-0 bg-neutral-100 border border-neutral-200 rounded-2xl rounded-tl-sm p-4 px-5 drop-shadow-[0px_0px_20px_#000000cf] message-container-anim-in">
                    <!-- author container -->
                    <div class="absolute top-[-47px] left-[-82px] flex justify-start gap-4 message-author-icon-anim-in -z-10">

                        <!-- avatar container -->
                        <div class="relative top-0 w-16 h-16 rounded-full bg-neutral-700 overflow-hidden drop-shadow-[0px_0px_20px_#000000cf]">
                            <div class="absolute inset-0 bg-cover" :style="`background-image:url(${message.author.avatar})`"></div>
                        </div>

                        <!-- username -->
                        <span class="text-white font-black text-3xl truncate text-ellipsis max-w-96 drop-shadow-[0px_0px_10px_#000000cf] message-author-name-anim-in">{{ message.author.name }}</span>
                    </div>

                    <!-- message content -->
                    <span v-if="message.content" class="text-xl font-medium" v-html="formattedContent"></span>

                    <!-- Send a message notice -->
                    <span class="absolute -bottom-9 right-2 text-lg text-white drop-shadow-[0px_0px_10px_#000000] post-msg-notice-anim-in">send messages and photos in <b>#95-live</b> to appear on screen!</span>
                </div>
            </div>

            <!-- Alt author tag (attachment only) -->
            <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-5" v-if="!message.content">
                <!-- avatar container -->
                <div class="relative top-0 w-14 h-14 rounded-full bg-neutral-700 overflow-hidden drop-shadow-[0px_0px_20px_#000000cf] message-author-icon-anim-in">
                    <div class="absolute inset-0 bg-cover" :style="`background-image:url(${message.author.avatar})`"></div>
                </div>
                <!-- username -->
                <span class="text-white font-black text-3xl truncate text-ellipsis max-w-96 drop-shadow-[0px_0px_10px_#000000cf] message-author-name-anim-in">{{ message.author.name }}</span>

                <!-- Send a message notice -->
                <span class="absolute -bottom-9 text-lg text-white drop-shadow-[0px_0px_10px_#000000] post-msg-notice-anim-in">send messages and photos in <b>#95-live</b> to appear on screen!</span>
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
    /* Main container anim in */
    .main-container-anim-in {
        animation:main-container-anim-in 1.4s .4s forwards cubic-bezier(0.860, 0.000, 0.070, 1.000);
        opacity:0;
    }
    @keyframes main-container-anim-in {
        0% {
            transform:scale(.7) translateX(-1200px);
        }
        60% {
            transform:translateY(-30px);
        }
        75% {
            opacity:1;
        }
        100% {
            transform:translateY(0px);
            opacity:1;
        }
    }

    /* Image container scale down anim */
    .image-scale-down-anim {
        animation:image-scale-down-anim .5s 2.5s forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        transform-origin:top left;
    }
    @keyframes image-scale-down-anim {
        to {
            transform:scale(.97);
        }
    }

    /* Image container scale down anim - img only */
    .image-scale-down-anim-imgonly {
        animation:image-scale-down-anim-imgonly .5s 2.5s forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        transform-origin:top;
    }
    @keyframes image-scale-down-anim-imgonly {
        to {
            transform:scale(.9);
        }
    }

    /* message author icon anim in */
    .message-author-icon-anim-in {
        animation:message-author-icon-anim-in .6s 2.7s forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        transform-origin:bottom right;
        opacity:0;
    }
    @keyframes message-author-icon-anim-in {
        from {
            transform:scale(.7);
        }
        to {
            opacity:1;
        }
    }

    /* message author name anim in */
    .message-author-name-anim-in {
        animation:message-author-name-anim-in .6s 2.8s forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        transform-origin:bottom left;
        opacity:0;
    }
    @keyframes message-author-name-anim-in {
        from {
            transform:scale(.7);
        }
        to {
            opacity:1;
        }
    }

    /* message container scale up */
    .message-container-anim-in {
        animation:message-container-anim-in .6s 2.6s forwards cubic-bezier(0.680, -0.550, 0.265, 1.550);
        transform-origin:bottom right;
        opacity:0;
    }
    @keyframes message-container-anim-in {
        from {
            transform:scale(.7);
        }
        to {
            opacity:1;
        }
    }

    /* Post messages notice anim in */
    .post-msg-notice-anim-in {
        animation:post-msg-notice-anim-in 1s 3.5s forwards cubic-bezier(0.860, 0.000, 0.070, 1.000);
        opacity:0;
    }
    @keyframes post-msg-notice-anim-in {
        from {
            transform:translateY(-15px);
        }
        to {
            opacity:1;
        }
    }
</style>