export type File = "video" | "image";

export const fileExistion = (url: string): File | undefined => {
  // Регулярное выражение для извлечения названия и расширения файла
  var regex = /\/([^\/]+)\.(\w+)$/;

  // Использование регулярного выражения
  var match = url.match(regex);

  if (match) {
    var extension = match[2]; // Расширение файла

    // return extension;
    if (
      extension === "png" ||
      extension === "svg" ||
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "webp" ||
      extension === "gif"
    ) {
      return "image";
    } else {
      return "video";
    }
  } else {
    console.log("Не удалось извлечь название и расширение файла.");
  }
};
