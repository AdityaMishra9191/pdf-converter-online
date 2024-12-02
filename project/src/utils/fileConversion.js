import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist';
import { extractTextFromDocument } from './mlProcessor';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export async function convertDocxToPdf(docxBuffer) {
  try {
    // First try ML-powered conversion
    const mlText = await extractTextFromDocument(docxBuffer);
    
    // Fallback to mammoth if ML fails
    const { value: htmlContent } = mlText ? 
      { value: mlText } : 
      await mammoth.convertToHtml({ buffer: docxBuffer });
      await mamonth.converttoHtml({ buffer: fileBuffer });
    // Create PDF document
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    
    // Add a page
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();
    
    // Format the text content
    const textLines = (htmlContent || '')
      .replace(/<[^>]*>/g, '')
      .split('\n')
      .filter(line => line.trim());
    
    // Add text to PDF
    let yOffset = height - 50;
    const fontSize = 12;
    const lineHeight = 16;
    
    for (const line of textLines) {
      if (yOffset < 50) {
        const newPage = pdfDoc.addPage([600, 800]);
        yOffset = height - 50;
      }
      
      page.drawText(line, {
        x: 50,
        y: yOffset,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
        maxWidth: width - 100,
        lineHeight
      });
      
      yOffset -= lineHeight;
    }
    
    return await pdfDoc.save();
  } catch (error) {
    console.error('Error converting DOCX to PDF:', error);
    throw error;
  }
}

export async function convertPdfToDocx(pdfBuffer) {
  try {
    // First try ML-powered conversion
    const mlText = await extractTextFromDocument(pdfBuffer);
    
    if (mlText) {
      return new Uint8Array(Buffer.from(mlText));
    }
    
    // Fallback to PDF.js
    const loadingTask = pdfjs.getDocument({ data: pdfBuffer });
    const pdf = await loadingTask.promise;
    let text = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map(item => item.str)
        .join(' ');
      
      text += `Page ${i}\n\n${pageText}\n\n`;
    }
    
    return new Uint8Array(Buffer.from(text));
  } catch (error) {
    console.error('Error converting PDF to DOCX:', error);
    throw error;
  }
}