<template>
    <div class="absolute bottom-10 right-10">
        <!-- avatar container -->
        <div class="relative w-10 h-10 rounded-full bg-neutral-700 overflow-hidden bounce-var-1">
            <div class="absolute inset-0 bg-cover" :style="`background-image:url(${props.user.userAvatar})`"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { UserPopupData } from '@/types/UserPopupData';
    const props = defineProps<{
        user:UserPopupData
    }>()

    // -- determine random animation type classes
    const typeId = Math.floor(Math.random()*3);
    const type:{[id:number]:string} = {
        0:"",
        1:"",
        2:""
    };
</script>

<style scoped>
    /* bounce var 1 */
    .bounce-var-1 {
        animation:bounce-var-1 .6s 2s forwards cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transform:translateY(1000px);
    }
    @keyframes bounce-var-1 {
        0% {
            transform:translateY(100px) translateX(-100px);
        }
        50% {
            transform:translateY(-100px);
        }
        100% {
            transform:translateY(100px) translateX(100px);
        }
    }
</style>