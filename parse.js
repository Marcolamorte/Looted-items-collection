import fs from 'fs';
import path from 'path';

// Recreate __dirname in ES modules
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Remove the leading '/' on Windows to avoid duplication of the path
const filePath = 'PROVA_JSON_ITEMS_MARCO.JSON';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log('Parsed JSON:', jsonData);
    // now create a new file with the parsed data but in javascript format
    fs.writeFile('parsedData.js', `const jsonData = ${JSON.stringify(jsonData, null, 2)};`, (writeErr) => {
      if (writeErr) {
        console.error('Error writing the parsed data:', writeErr);
        return;
      }
      console.log('The file has been saved!');
    });
    
  } catch (parseErr) {
    console.error('Error parsing JSON file:', parseErr);
  }
});
