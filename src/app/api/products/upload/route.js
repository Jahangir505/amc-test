
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request) {
    const data = await request.formData();
  
    // Array to store file paths
    const filePaths = [];
  
    // Iterate over each file field
    for (const [fieldName, files] of data.entries()) {
      if (Array.isArray(files)) {
        // Handle multiple files for a field
        for (const file of files) {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
  
          // With the file data in the buffer, you can do whatever you want with it.
          // For this example, we'll just write it to the filesystem in a new location
          const path = `./public/uploads/${file.name}`;
          await writeFile(path, buffer);
          console.log(`File uploaded: ${path}`);
  
          // Save the file path for response
          filePaths.push(path);
        }
      } else {
        // Handle a single file for a field
        const file = files;
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
  
        // With the file data in the buffer, you can do whatever you want with it.
        // For this example, we'll just write it to the filesystem in a new location
        const path = `./public/uploads/${file.name}`;
        await writeFile(path, buffer);
        console.log(`File uploaded: ${path}`);
  
        // Save the file path for response
        filePaths.push(path);
      }
    }
    return NextResponse.json({ success: true, files: filePaths });
  }