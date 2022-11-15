import axios from 'axios';
import config from '@config';

const sendMessage = async (message: string) => {
    const query = `https://api.telegram.org/bot${config.botToken}/sendMessage?`;
    const params = `chat_id=${config.chatId}&text=${message}&parse_mode=html`;
    const url = query + params;

    const data = await axios.get(url);
}

export default sendMessage;