define(['backbone', 'views/slides', 'collections/slides'], function(Backbone, SlidesView, SlidesCollection){
    var AppView = Backbone.View.extend({
        el: 'body',

        initialize: function () {
            var testCollection = [
                {title: 'My first Slide'},
                {title: 'Second Slide'}
            ];
            new SlidesView({
                collection: new SlidesCollection(testCollection)
            });
        }
    });
    return AppView;
});
