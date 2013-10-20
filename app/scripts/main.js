require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }

    }
});

require(['views/app'], function(AppView){
    window.App = {
        Vent: _.extend({}, Backbone.Events)
    };
    new AppView();
});
