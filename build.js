({
    optimize: 'none', // Comment this property to enable the uglify of the libraries
    baseUrl: '',
    paths: {
			'd3': 'd3.min' , 		
			'd3linechart': 'd3linechart' 		
	}, 
		
	wrap: {
        start: "if (typeof define === 'function' && define.amd){}\nelse if (typeof __visualize__ !== 'undefined' &&\ntypeof __visualize__.define === 'function')\n{\n}\n\n(function(root){\n\nvar define = root.define;\n\n",
        end: "\n\n}(typeof __visualize__ != 'undefined' ? __visualize__ : window));"
    },
    
    name: "d3linechart",
    out: "d3linechart.min.js"
})
