
const fs = require('fs');


fs.readFile('file1.txt', 'utf8', (err, file1Content) => {
  if (err) {
    console.error('Error reading file1.txt:', err);
    return;
  }

  
  fs.readFile('file2.txt', 'utf8', (err, file2Content) => {
    if (err) {
      console.error('Error reading file2.txt:', err);
      return;
    }

    
    const combinedContent = file1Content + file2Content;

    
    fs.writeFile('combined.txt', combinedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to combined.txt:', err);
        return;
      }
      console.log('Content from file1.txt and file2.txt has been combined and written to combined.txt.');
    });
  });
});
