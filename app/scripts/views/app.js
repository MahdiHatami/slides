define(['backbone', 'views/slides', 'collections/slides','router'], function(Backbone, SlidesView, SlidesCollection, MainRouter){
    var AppView = Backbone.View.extend({
        el: 'body',

        initialize: function () {

            new SlidesView({
                collection: new SlidesCollection(window.slides)
            });

            App.router = new MainRouter();
            Backbone.history.start();
        },

        events:{
            'keyup': 'keyUp'
        },

        keyUp: function(e){
            //left = 37
            //right= 39
            if(e.keyCode === 39 || e.keyCode === 37){
                App.Vent.trigger('changeSlide', {
                    direction: e.keyCode === 39 ? 'next' : 'prev'
                });
            }
        }

    });
    return AppView;
});
