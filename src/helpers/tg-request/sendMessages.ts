import axios from 'axios';
import botConfig from './botConfig.json';

const sendMessage = async (message: string) => {
    const query = `https://api.telegram.org/bot${botConfig.token}/sendMessage?`;
    const params = `chat_id=${botConfig.chatId}&text=${message}&parse_mode=html`;
    const url = query + params;

    const data = await axios.get(url);
    console.log(data);
}

export default sendMessage;