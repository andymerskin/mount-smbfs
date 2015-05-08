# mount-smbfs
## Mount Samba shares via Finder on OSX

## Usage
```javascript
var smbfs = require('mount-smbfs');

smbfs.mount('MACHINE/ShareName', function(err, mountPath) {
	console.log(mountPath); // -> /Volumes/ShareName
});
```

## Documentation

### mount(sharepath, callback)
Mounts the specified share path to a Volume, and displays Finder's authentication if credentials are necessary.

### umount(callback)
Unmounts the currently mounted share.

### getPath()
Returns the volume path string, e.g. `/Volumes/SharedFolder`

#### Arguments
* `sharepath`: The full share path to connect to, e.g. `MACHINE/SharedFolder`
* `callback(err, mountpath)`: Where `mountpath` is the resulting volume path string: `/Volumes/SharedFolder`

## Example: mount a share & get a list of files
```javascript
var smbfs = require('mount-smbfs');
var fs = require('fs');

smbfs.mount('MACHINE/ShareName', function(err, mountPath) {
	fs.readdir(mountPath, function(err, files) {
		console.log(files);
	});
});
```

## License
The MIT License (MIT)

Copyright (c) 2015 Andy Merskin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.