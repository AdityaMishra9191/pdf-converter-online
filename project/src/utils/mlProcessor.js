import { pipeline } from '@xenova/transformers';
import { ML_CONFIG } from './constants';

let extractor = null;

async function initializeModel() {
  if (!extractor) {
    try {
      extractor = await pipeline(ML_CONFIG.task, ML_CONFIG.modelName);
    } catch (error) {
      console.error('Error initializing ML model:', error);
      return null;
    }
  }
  return extractor;
}

export async function extractTextFromDocument(buffer) {
  try {
    const model = await initializeModel();
    if (!model) return null;
    
    const base64String = Buffer.from(buffer).toString('base64');
    
    const result = await model({
      image: base64String,
      question: "Extract all text from this document"
    });

    return result.answer;
  } catch (error) {
    console.error('Error in ML processing:', error);
    return null;
  }
}