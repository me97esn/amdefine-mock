// Run this file with node.js
require('amdefine-mock/intercept');

// Required mocks:
Mocks = {
	app: {
		foo: function() {
			console.log( "I pity the fool");
		}
	}
}

// Mock global objects
Marionette = {
	Layout: {
		extend: function() {
			console.log('marionette layout extending...');
			return {name:"Mocked Marionette Layout"};
		}
	}
}

// Note, this require has to be after the above Mock definitions
var mod = require('./dependencies.js')
console.log(mod)