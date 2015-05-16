var fs = require('fs');
var path = require('path');
var Shell = require('child_process').exec;

var VOLUMES = '/Volumes';
var SHARE;

function mount(sharepath, cb) {
	SHARE = sharepath;
		}
}

function umount(cb) {
	var p = getMountedPath();
	if (!p) throw new Error("Cannot unmount an undefined path");
	Shell('umount ' + getMountedPath(), function(err, stdout, stderr) {
		cb(stderr);
	});
}

function getMountedPath() {
	return path.join(VOLUMES, path.basename(SHARE));
}

module.exports = {
	mount: mount,
	umount: umount,
	getPath: getMountedPath
};