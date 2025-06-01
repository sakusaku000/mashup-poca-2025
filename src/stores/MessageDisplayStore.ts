import { defineStore } from "pinia";
import type { MessageData } from "@/types/MessageData";
import type { UserPopupData } from "@/types/UserPopupData";

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
        userIconPopup:null as null | UserPopupData
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
            if (this.userIconPopup) return;
            this.userIconPopup = user;
            setTimeout(() => {
                this.userIconPopup = null;
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
            // -- every 6 seconds generate a user ID with random avatar and push to array
            setInterval(() => {
                const avatar = DebugAvatars[Math.floor(Math.random()*DebugAvatars.length)];
                this.setUserPopup({
                    userAvatar:avatar
                });
            }, 6000);
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