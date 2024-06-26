const phrases = {
    helloGarage: `Вітаю! 🚐
Це чат-бот СТО ⚙️
За допомогою нього ви зможете записатись на ремонт у вибраний час. Записи приймаються цілодобово. 

Ми працюємо за графіком 👇
Пн-Пт: 10:00-20:00
Cб-Нд: вихідні

Оберіть нижче що вас цікавить!`,
    nameQuestion: `Ввведіть своє імя`,
    phoneQuestion: (userName) => {
        return `Привіт ${userName} Введіть свій номер телефону`;
    },
    modelQuestion: `Введіть марку, модель і рік авто`,
    bookingSummary: (userName, userPhone, userModel) => {
        return `${userName}, Ви забронювали відвідування СТО. Ваш номер телефону ${userPhone}. Авто ${userModel}. Ми перетелефонуємо, перед візитом, щоб нагадати про ваш запис. А також нагадаємо у чат-боті`
    },
    bookingToMannager: (userName, userPhone, userModel) => {
        return `${userName},  ${userPhone}.  ${userModel}.`
    }

}

export default phrases;