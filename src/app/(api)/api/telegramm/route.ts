export async function POST(req: Request) {
  const body = await req.json();

  const { name, company, email, phone, taskDescription } = body;

  let message;

  if (company.trim().length === 0 && taskDescription.trim().length === 0) {
    message = `
<b>ТИП ЗАПОЛНЕНИЯ - Шорт:</b>

<b>Ваше имя:</b> ${name}
<b>E-mail:</b> ${email}
<b>Телефон:</b> ${phone}
    `;
  } else {
    message = `
<b>ТИП ЗАПОЛНЕНИЯ - Фулл:</b>

<b>Ваше имя:</b> ${name}
<b>Компания:</b> ${company}
<b>E-mail:</b> ${email}
<b>Телефон:</b> ${phone}
<b>Комментарий:</b> ${taskDescription}
    `;
  }

  const token = "5831052266:AAEBsFTI6YTzvrfnDeRYRdJfY_IlkxZfFVs";
  const chat_id = "-1001841443401";

  // const formData = new FormData();
  // formData.append("test", file);

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${encodeURIComponent(
      message
    )}`
  );

  if (telegramRes.ok) {
    return new Response(JSON.stringify({ status: "ok" }));
  } else {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "Не удалось отправить сообщение в Telegram",
      }),
      { status: 500 }
    );
  }
}
