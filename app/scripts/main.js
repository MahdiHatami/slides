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

require(['models/slide', 'views/slide'], function (SlideModel, SlideView) {
    var slide = new SlideModel({title: 'my first slide title'});
    var slideView = new SlideView({model: slide});
    slideView.render();
    console.log(slideView.el);
});
