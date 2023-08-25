//default gulp tasks
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

//build gulp tasks

exports.build = series(scssTask, jsTask);