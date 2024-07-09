import bot from "./bot.js";
import phrases from "./phrases.js";
import { updateUserByChatId, findUserByChatId } from "./models/users.js";
import support from "./support.js";

const marketingChain = () => {    

    bot.on("callback_query", async (query) => {
        const action = query.data;
        const chatId = query.message.chat.id;
        switch (action) {
            case 'contact': 
                bot.sendMessage(chatId, 'Будь ласка, поставте своє запитання, ми обовязково вам допоможемо🦄');
                support();

        }
    })
};

export default marketingChain;