define(['backbone'], function(Backbone){
    var Slide = Backbone.View.extend({

        render: function () {
            this.$el.append(
                '<h1>' + this.model.get('title') + '</h1>'
            );
        }
    });
    return Slide;
});
