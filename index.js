var fs = require('fs');
var path = require('path');
var Shell = require('child_process').exec;
var Step = require('step');

var VOLUMES = '/Volumes';
var SHARE;

function mount(sharepath, cb) {
	SHARE = sharepath;
	Step(
		function mountSmb() {
			var command =
				['osascript -e \'mount volume "smb://',
				path.normalize(SHARE),
				"\"'"];
			Shell(command.join(''), this);
		},
		function handleShellResult(err, stdout, stderr) {
			cb(stderr, getMountedPath());
		}
	)	
}

function umount(cb) {
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