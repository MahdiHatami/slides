define(['backbone'], function(Backbone){

    var Slide = Backbone.Model.extend({
        defaluts:{
            type: 'note',
            title:'unknown'
        }
    });
    return Slide;
});

