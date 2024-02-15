import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();

  const file = data.get("file") as File;

  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const taskDescription = data.get("taskDescription") as string | null;
  const company = data.get("company") as string | null;

  let textFile = "См. ниже ↓";
  if (!file.type) {
    textFile = "Нет прикрепленного файла";
  }

  let message;

  if (company?.trim().length === 0 && taskDescription?.trim().length === 0) {
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
  <b>Прикрепленный файл: ${textFile}</b>
      `;
  }

  const token = "5831052266:AAEBsFTI6YTzvrfnDeRYRdJfY_IlkxZfFVs";
  const chat_id = "-1001841443401";

  // Отправляем сообщение
  const messageRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${encodeURIComponent(
      message
    )}`
  );

  if (!messageRes.ok) {
    const error = await messageRes.text();
    return NextResponse.json({ success: false, error });
  }

  if (file.type) {
    const formData = new FormData();

    let method;
    // Проверяем MIME-тип файла
    if (file.type.startsWith("image/")) {
      formData.append("photo", file);
      method = "sendPhoto";
    } else {
      formData.append("document", file);
      method = "sendDocument";
    }

    // Отправляем файл
    const fileRes = await fetch(
      `https://api.telegram.org/bot${token}/${method}?chat_id=${chat_id}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!fileRes.ok) {
      const error = await fileRes.text();
      return NextResponse.json({ success: false, error });
    }
  }

  // Возвращаем успешный ответ, если все прошло хорошо
  return NextResponse.json({ success: true });
}
