var fs = require('fs');
var path = require('path');
var Shell = require('child_process').exec;

var VOLUMES = '/Volumes';
var SHARE = null;

function mount(sharepath, cb) {
	SHARE = sharepath;
	var command =
		['osascript -e \'mount volume "smb://',
		path.normalize(SHARE),
		"\"'"];
	Shell(command.join(''), function(err, stdout, stderr) {
		var mountpath;
		if (!stderr && !err) {
			mountpath = getMountedPath();
		}
		cb(stderr, mountpath);
	});
}

function umount(mountpath, cb) {
	if (typeof cb === undefined) {
		cb = mountpath;
	}
	mountpath = mountpath || getMountedPath()
	if (!mountpath) {
		throw new Error("Cannot unmount an undefined path");
	}
	Shell('umount ' + mountpath, function(err, stdout, stderr) {
		cb(stderr);
	});
}

function getMountedPath() {
	if (!SHARE) {
		return undefined;
	}
	return path.join(VOLUMES, path.basename(SHARE));
}

module.exports = {
	mount: mount,
	umount: umount,
	getPath: getMountedPath
};