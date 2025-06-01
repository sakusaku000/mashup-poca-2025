export type MessageData = {
    id:string;
    type:"FULL"|"POPUP";
    author:{
        name:string;
        avatar:string;
    };
    content?:string;
    attachment?:string;
}