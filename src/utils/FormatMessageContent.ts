export default (content:undefined|string, size:number) => {
    if (!content || content.length < 1) return null;

    // -- Truncate content to max of 128 characters
    content = content.length > 128 ? `${content.substring(0,128)}...` : content;

    // -- Match any discord emotes and replace instances with img tags that will display emotes
    const regex = /<(a)?:([a-zA-Z0-9_]+):(\d+)>/g;
    content = content.replace(regex, (match:string, animated:string|undefined, name:string, id:string) => {
        const isAnimated = animated === 'a';
        const extension = isAnimated ? 'gif' : 'png';
        return `<img src="https://cdn.discordapp.com/emojis/${id}.${extension}" alt="${name}" width="${size}" height="${size}" style="display:inline-block; position:relative; top:-2px;"/>`
    })

    return content;
}