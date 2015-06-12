/*
 * Copyright (c) Einsights Pte. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

;(function(window) {
	"use strict";

	function Einsights(options) {
		this.options = options;
	}

	Einsights.prototype.demo = function() {
		console.log('Hello Einsights!');
	};

	Einsights.prototype.charting = function(){
		console.log('Einsights:Charting');
	};

	window.ein = Einsights;

})(window);