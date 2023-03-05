const fs = require('fs');
const allocatedBuffer = Buffer.alloc(1024) //-for temperory storage

fs.open('./files/info.txt', 'r', (err, fileDescriptor) => {
    if (err) {
        console.log(err)
    } else {
        // descriptor is used by subsequent file operations and it is a handle through which you can access the file
        //its used to access the file and uniquely refer a specific file if needed
        console.log(fileDescriptor, "file oponed successfully")

        //  filedescriptor - returned by fs.open
        //  allocatedBufer  - for temperory storage
        //  offset  -    buffer offset starting point
        // allocatedBufer.length - length of the buffer
        // position  - from where read operation should start from 
        fs.read(fileDescriptor, allocatedBuffer, 0, allocatedBuffer.length, 0, (rerr, bytes) => {
            if (rerr) {
                console.log(rerr)
            } else {
                console.log(bytes + " bytes read");
                if (bytes > 0) {
                    console.log(allocatedBuffer.slice(0, bytes).toString());
                }

            }
        })
    }
})