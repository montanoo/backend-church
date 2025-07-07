import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

function readFonts(): string {
  const fontRegularPath = path.resolve(
    __dirname,
    "../pdf/assets/CenturyGothicPaneuropeanRegular.ttf"
  );
  const fontBoldPath = path.resolve(
    __dirname,
    "../pdf/assets/CenturyGothicPaneuropeanBold.ttf"
  );
  const fontItalicPath = path.resolve(
    __dirname,
    "../pdf/assets/CenturyGothicPaneuropeanItalic.ttf"
  );
  const fontBoldItalicPath = path.resolve(
    __dirname,
    "../pdf/assets/CenturyGothicPaneuropeanBoldItalic.ttf"
  );

  const fontRegularUrl = `file://${fontRegularPath.replace(/\\/g, "/")}`;
  const fontBoldUrl = `file://${fontBoldPath.replace(/\\/g, "/")}`;
  const fontItalicUrl = `file://${fontItalicPath.replace(/\\/g, "/")}`;
  const fontBoldItalicUrl = `file://${fontBoldItalicPath.replace(/\\/g, "/")}`;

  return `
    @font-face {
      font-family: "CenturyGothic";
      src: url("${fontRegularUrl}") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "CenturyGothic";
      src: url("${fontBoldUrl}") format("truetype");
      font-weight: bold;
      font-style: normal;
    }
    @font-face {
      font-family: "CenturyGothic";
      src: url("${fontItalicUrl}") format("truetype");
      font-weight: normal;
      font-style: italic;
    }
    @font-face {
      font-family: "CenturyGothic";
      src: url("${fontBoldItalicUrl}") format("truetype");
      font-weight: bold;
      font-style: italic;
    }
    * {
      font-family: "CenturyGothic", sans-serif;
    }
  `;
}

export async function generateBaptismPDF() {
  const htmlPath = path.resolve(__dirname, "../pdf/templates/baptism.html");
  const cssPath = path.resolve(__dirname, "../pdf/styles/certificate.css");
  const logoPath = path.resolve(__dirname, "../pdf/assets/logo.png");

  const logoBase64 = fs.readFileSync(logoPath).toString("base64");
  const cssRaw = fs.readFileSync(cssPath, "utf8");
  const htmlRaw = fs.readFileSync(htmlPath, "utf8");
  const fontsCss = readFonts();

  const fullStyle = `<style>\n${fontsCss}\n${cssRaw}\n</style>`;
  let html = htmlRaw.replace(
    '<link rel="stylesheet" href="__STYLES_PATH__" />',
    fullStyle
  );
  html = html.replace("{{logoBase64}}", logoBase64);
  // fs.writeFileSync("baptism-preview.html", html);

  const data: Record<string, string> = {
    baptizedName: "MAYENCI DE LOS ÁNGELES VELASCO CAÑAS",
    bookNumber: "5(A)",
    folioNumber: "413",
    dateInText: "primer día del mes de mayo del año dos mil cinco",
    birthNameInText: "el primero de noviembre del año dos mil dos mil cuatro",
    placeOfBirthWithPrefix: "en el Hospital Nacional",
    dadName: "Manuel de Jesús Velasco Guardado",
    momsName: "Matilde Cañas Salinas",
    godparentsNames: "María Yessenia Zavala Hernández",
    ministerName: "Pbro. Carlos Enrique Barrera",
    marginInformation: "2073, Velasco Cañas, Mayenci de los Ángeles, H.L.",
    daysAfterMonthAndYear:
      "los veinticinco días del mes de noviembre del año dos mil veinticuatro",
  };

  for (const key in data) {
    html = html.split(`{{${key}}}`).join(data[key] || "");
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  await browser.close();

  // fs.writeFileSync("baptism_certificate_test.pdf", pdfBuffer);
  console.log("✅ PDF generado: baptism_certificate_test.pdf");
  return pdfBuffer;
}
