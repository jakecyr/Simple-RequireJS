var findRequiresRegex = /require\([\"|\'](.*)[\"\']\)/;
var initFile = $($('[data-require]:first')[0]).data('require');

loadScript(initFile, function(initialJavaScript){
	loadScripts(initialJavaScript, function(result){
		eval(result);
	})
})

/**
 * Load all script files recursively
 * @param {String} outputFile The JavaScript that is being added to
 * @param {Function} callback The function that is called after all scripts are loaded
 */
function loadScripts(outputFile, callback){
	var results = findRequiresRegex.exec(outputFile)

	if(results && results.length > 0){
		loadScript(results[1], function(loadedJavaScript){
			outputFile = outputFile.replace(findRequiresRegex, loadedJavaScript);
			loadScripts(outputFile, callback);
		})
	} else{
		callback(outputFile)
	}
}

/**
 * Load Single JavaScript file
 * @param  {String}   fileName Name of file to load
 * @param  {Function} callback function to call when done loading file
 */
function loadScript(fileName, callback){
	$.ajax({
		url: fileName,
		method: 'GET',
		dataType: 'text'
	}).done(callback);
}
