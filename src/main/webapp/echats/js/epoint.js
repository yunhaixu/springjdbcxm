(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('新点', {
    	  "type": "FeatureCollection",
    	  "features": [
    	    {
    	      "type": "Feature",
    	      "properties": {},
    	      "geometry": {
    	        "type": "Polygon",
    	        "coordinates": [
    	          [
    	            [
    	              120.56902885437012,
    	              31.897844933532287
    	            ],
    	            [
    	              120.56866407394409,
    	              31.896505946173896
    	            ],
    	            [
    	              120.56946873664856,
    	              31.896369313715788
    	            ],
    	            [
    	              120.56984424591064,
    	              31.897653650816302
    	            ],
    	            [
    	              120.56968331336975,
    	              31.897863150913068
    	            ],
    	            [
    	              120.5693829059601,
    	              31.897999781154105
    	            ],
    	            [
    	              120.56902885437012,
    	              31.897844933532287
    	            ]
    	          ]
    	        ]
    	      }
    	    }
    	  ]});
}));