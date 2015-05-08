# mount-smbfs
## Mount Samba shares via Finder on OSX

## Usage
```javascript
var smbfs = require('mount-smbfs');

smbfs.mount('MACHINE/ShareName', function(err, mountPath) {
	console.log(mountPath); // -> /Volumes/ShareName
});
```

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