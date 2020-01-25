/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var uuid = require('node-uuid'),
    timeplan = require('timeplan'),
    im = require('imagemagick');

var exec = require( 'child_process' ).exec;
var path = __dirname + '/../../media';

/*
timeplan.repeat({
    period: "10m",
    task: function() {
        console.log('rm -r ' + path);
        exec( 'rm -r ' + path, function ( err, stdout, stderr ){
        });
    }
});
*/

module.exports = {


    imageUpload: function(req, res) {
        return req.file('file')
        .upload(function onUploadComplete(err, uploadedFiles) {
            if(err) {
                console.log('upload failed with: ', err);
                throw err;
            }

            if(uploadedFiles.length !== 1) {
                throw new Error(
                    'wrong number of files uploaded: ' +
                    uploadedFiels.length
                );
            }

            let meta = uploadedFiles[0];

            let filename =
                new String(meta.fd).substring(meta.fd.lastIndexOf('/') + 1);

            let finalPath =
                req._sails.config.paths.public + '/media/' + filename;

            im.convert(
                [meta.fd, '-resize', '600', finalPath],
                function(err, stdout) {
                    if (err) throw err;

                    res.json({
                        type: "success",
                        id: filename,
                        path: "/media/" + filename
                    });
                }
            );
        });
    }
};
