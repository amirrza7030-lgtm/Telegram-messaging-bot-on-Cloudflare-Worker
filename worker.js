const BOT_TOKEN = 'توکن ربات';
const ADMIN_ID = 'chat_id عددی شما';
const EMAIL_API = 'https://your-secure-api.com/send-email'; // آدرس API ارسال ایمیل

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

    const update = await request.json();
    const msg = update.message;

    if (!msg) return new Response('No message');

    // ذخیره در KV
    await env.BOT_KV.put(`msg_${msg.message_id}`, JSON.stringify(msg));

    // ارسال فایل به ایمیل
    if (msg.document) {
      const fileId = msg.document.file_id;
      const fileName = msg.document.file_name;
      const fileRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`);
      const fileData = await fileRes.json();
      const filePath = fileData.result.file_path;
      const fileUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`;

      await fetch(EMAIL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileUrl, fileName, to: 'ایمیل شخصی شما' })
      });

      await sendMessage(msg.chat.id, `📤 فایل "${fileName}" ارسال شد`);
    }

    // اجرای دستور از ادمین
    if (msg.text && msg.chat.id.toString() === ADMIN_ID) {
      if (msg.text === '/panel') {
        await sendMessage(ADMIN_ID, '🎛 پنل فعال شد. منتظر فرمان هستم.');
      }
      if (msg.text.startsWith('/send ')) {
        const target = msg.text.split(' ')[1];
        await sendMessage(target, '📥 پیام از پنل دریافت شد.');
      }
    }

    return new Response('OK');
  }
};

async function sendMessage(chatId, text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text })
  });
      }Control + Shift + m  tab . esc.
