import bot from "./bot.js";
import { findAllUsersIds } from "./models/users.js";

const adds = () => {
    bot.on('message', async (msg) => {
        const adminUser = 269694206;

        if (msg.from.id === adminUser && msg.text === '_sendadd') {                 
            const userIds = await findAllUsersIds();  
            for (const userId of userIds) {
                await bot.sendMessage(userId, 'вітання');
            }
        }
    });
}

export default adds;