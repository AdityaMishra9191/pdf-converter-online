export const SUPPORTED_FORMATS = {
  PDF: {
    mimeType: 'application/pdf',
    extension: '.pdf'
  },
  DOCX: {
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    extension: '.docx'
  }
};

export const ML_CONFIG = {
  modelName: 'Xenova/donut-base',
  task: 'document-question-answering'
};