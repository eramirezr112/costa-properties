import fs from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const docs = [
  {
    filename: "loan-requirements-es.pdf",
    title: "Requisitos para Prestamos",
    lines: [
      "Documentacion inicial",
      "- Identificacion vigente",
      "- Comprobantes de ingresos",
      "- Estados bancarios recientes",
      "- Informacion de la propiedad",
    ],
  },
  {
    filename: "buyer-intake-es.pdf",
    title: "Formulario Inicial de Comprador",
    lines: [
      "Campos sugeridos",
      "- Nombre completo",
      "- Presupuesto estimado",
      "- Zona de interes",
      "- Necesidad de financiamiento",
    ],
  },
  {
    filename: "buying-guide-es.pdf",
    title: "Guia Basica de Compra",
    lines: [
      "Paso a paso",
      "- Definir presupuesto y objetivos",
      "- Seleccionar propiedades",
      "- Revisar documentos y avaluo",
      "- Cierre con asesoria legal",
    ],
  },
  {
    filename: "legal-overview-es.pdf",
    title: "Resumen Legal Inicial",
    lines: [
      "Puntos clave",
      "- Revision registral",
      "- Verificacion de cargas",
      "- Contrato de opcion o compra",
      "- Cierre notarial",
    ],
  },
  {
    filename: "loan-requirements-en.pdf",
    title: "Loan Requirements",
    lines: [
      "Initial documentation",
      "- Valid identification",
      "- Income verification",
      "- Recent bank statements",
      "- Property information",
    ],
  },
  {
    filename: "buyer-intake-en.pdf",
    title: "Buyer Intake Form",
    lines: [
      "Suggested fields",
      "- Full name",
      "- Estimated budget",
      "- Area of interest",
      "- Financing needs",
    ],
  },
  {
    filename: "buying-guide-en.pdf",
    title: "Costa Rica Buying Guide",
    lines: [
      "Step by step",
      "- Define budget and objectives",
      "- Select properties",
      "- Review documents and appraisal",
      "- Close with legal support",
    ],
  },
  {
    filename: "legal-overview-en.pdf",
    title: "Initial Legal Overview",
    lines: [
      "Key points",
      "- Registry review",
      "- Encumbrance verification",
      "- Option or purchase agreement",
      "- Notarial closing",
    ],
  },
];

const outputDir = path.join(process.cwd(), "public", "docs");

await fs.mkdir(outputDir, { recursive: true });

for (const doc of docs) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([612, 792]);
  const titleFont = await pdf.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await pdf.embedFont(StandardFonts.Helvetica);

  page.drawRectangle({ x: 0, y: 0, width: 612, height: 792, color: rgb(0.97, 0.96, 0.93) });
  page.drawText("Costa Properties", {
    x: 48,
    y: 734,
    size: 14,
    font: titleFont,
    color: rgb(0.56, 0.43, 0.22),
  });
  page.drawText(doc.title, {
    x: 48,
    y: 680,
    size: 28,
    font: titleFont,
    color: rgb(0.06, 0.15, 0.25),
  });

  let y = 620;
  for (const line of doc.lines) {
    page.drawText(line, {
      x: 48,
      y,
      size: 13,
      font: bodyFont,
      color: rgb(0.2, 0.32, 0.43),
    });
    y -= 28;
  }

  const bytes = await pdf.save();
  await fs.writeFile(path.join(outputDir, doc.filename), bytes);
}