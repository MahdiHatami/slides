require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    },
    shim: {
        "backbone": {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }

    }
});

require(["backbone"], function (Backbone) {
    console.log(Backbone);
});
