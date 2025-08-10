import { NextResponse } from "next/server";

function escapeHtml(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  const data = await req.formData();

  const name = (data.get("name") as string | null)?.trim() || "—";
  const email = (data.get("email") as string | null)?.trim() || "—";
  const phone = (data.get("phone") as string | null)?.trim() || "—";
  const taskDescription =
    (data.get("taskDescription") as string | null)?.trim() || "";

  const files = data
    .getAll("file")
    .filter((v): v is File => v instanceof File && typeof v.type === "string");

  const hasText = taskDescription.length > 0;
  const textFile = files.length
    ? `файлов: ${files.length}`
    : "Нет прикрепленных файлов";

  const msg = hasText
    ? `
<b>ТИП ЗАПОЛНЕНИЯ - Фулл:</b>

<b>Имя/Компания:</b> ${escapeHtml(name)}
<b>E-mail:</b> ${escapeHtml(email)}
<b>Телефон:</b> ${escapeHtml(phone)}
<b>Комментарий:</b> ${escapeHtml(taskDescription)}
<b>Прикрепления:</b> ${textFile}
`
    : `
<b>ТИП ЗАПОЛНЕНИЯ - Шорт:</b>

<b>Имя/Компания:</b> ${escapeHtml(name)}
<b>E-mail:</b> ${escapeHtml(email)}
<b>Телефон:</b> ${escapeHtml(phone)}
<b>Прикрепления:</b> ${textFile}
`;

  const token = "5831052266:AAEBsFTI6YTzvrfnDeRYRdJfY_IlkxZfFVs";
  const chat_id = "-1001841443401";

  if (!token || !chat_id) {
    return NextResponse.json(
      { success: false, error: "TG credentials are not configured" },
      { status: 500 }
    );
  }

  // Отправляем сообщение
  const msgRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id,
        parse_mode: "HTML",
        text: msg,
        // при желании можно добавить reply_markup
      }),
    }
  );

  if (!msgRes.ok) {
    const error = await msgRes.text();
    return NextResponse.json({ success: false, error }, { status: 500 });
  }

  const fileErrors: string[] = [];
  for (const file of files) {
    const form = new FormData();
    const isImage = file.type?.startsWith("image/");
    const method = isImage ? "sendPhoto" : "sendDocument";

    // важно добавить chat_id в тело формы
    form.append("chat_id", chat_id);
    form.append(isImage ? "photo" : "document", file, file.name);

    const fileRes = await fetch(
      `https://api.telegram.org/bot${token}/${method}`,
      {
        method: "POST",
        body: form,
      }
    );

    if (!fileRes.ok) {
      fileErrors.push(`${file.name}: ${await fileRes.text()}`);
    }
  }

  if (fileErrors.length) {
    return NextResponse.json(
      {
        success: false,
        error: `Ошибки при отправке файлов:\n${fileErrors.join("\n")}`,
      },
      { status: 207 }
    );
  }

  return NextResponse.json({ success: true });
}
