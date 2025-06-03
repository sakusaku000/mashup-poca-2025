import { defineStore } from "pinia";
import type { MessageData } from "@/types/MessageData";
import type { UserPopupData } from "@/types/UserPopupData";
import uniqid from "uniqid";

// -- debug data
import DebugMessages from "../data/DebugMessages.json";
import DebugAvatars from "../data/DebugAvatars.json";

export const useMessageDisplayStore = defineStore("messageDisplay", {
    state:() => ({
        // popup message data
        popup:null as null | MessageData,
        // full screen message data
        full:null as null | MessageData,
        // user icon popup data
        userIconPopup:[] as UserPopupData[]
    }),
    actions:{
        setPopup(message:MessageData) {
            if (this.popup) return;
            this.popup = message;
            setTimeout(() => {
                this.popup = null;
            }, 8000);
        },
        setFull(message:MessageData) {
            if (this.full) return;
            this.full = message;
            setTimeout(() => {
                this.full = null;
            }, 8000);
        },
        setUserPopup(user:UserPopupData) {
            this.userIconPopup.push(user);
            setTimeout(() => {
                this.userIconPopup.splice(this.userIconPopup.findIndex(u => u.userId === user.userId), 1);
            }, 2000);
        },

        // When in debug mode, socket is disabled and random faked events will be sent
        // -- debug mode interval fake events
        setDebugMode() {
            // POPUPS
            // -- every 15 seconds, display random popup message
            setInterval(() => {
                const message = DebugMessages[Math.floor(Math.random()*DebugMessages.length)] as MessageData;
                this.setPopup(message);
            }, 15000);

            // USER ICON POPUPS
            // -- generate a user ID with random avatar and push to array
            setInterval(() => {
                const avatar = DebugAvatars[Math.floor(Math.random()*DebugAvatars.length)];
                this.setUserPopup({
                    userId:uniqid(),
                    userAvatar:avatar
                });
            }, 500);
        },
        // -- on keyboard event, set a random full screen message
        setDebugFullMessage() {
            // -- if there's already a full screen message, don't set new one
            if (this.full) return;

            // -- get random message from debug messages
            const message = DebugMessages[Math.floor(Math.random()*DebugMessages.length)];
            // -- set as full screen message
            this.setFull(message as MessageData);
        }
    }
})