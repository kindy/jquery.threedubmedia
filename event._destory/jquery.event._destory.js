(function($) {
var ev = $.event,
    special = ev.special,
    _destory,
    _key = '_special-fns';

_destory = special._destory = {
    setup: function(data, ns, evh) {
        $(this).data(_key, []);
    },
    add: function(obj) {
        $(this).data(_key).push(obj);
    },
    remove: function(obj) {
        // do nothing now
        // TODO: support remove
    },
    // this -> elem
    teardown: function(ns) {
        var objs = $(this).data(_key);
        for (var i = objs.length - 1; i >= 0; --i) {
            objs[i].handler.call(this);
        }
        objs.length = 0;
    }
};
})(jQuery);
