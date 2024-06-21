import bot from "./bot.js";
import phrases from "./phrases.js";
import values from "./values.js";

const channelManaging = () => {    

    bot.on("callback_query", async (query) => {
        const action = query.data;
        const chatId = query.message.chat.id;

        const channelData = action.split(' ');


        const messageId = channelData[1] * 1;

        console.log(messageId);
        
        if(channelData.length = 2 && (channelData[0] === 'done' || channelData[0] === 'delete')) {

            bot.deleteMessage(values.channelId, messageId);
            bot.deleteMessage(values.channelId, messageId + 1);

        }
    })

}

export default channelManaging;