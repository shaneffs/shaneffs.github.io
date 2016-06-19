(function (document, $) {
    "use strict";

    var flickrPhotoStream = function ($el, options) {
        var url = [
            'http://api.flickr.com/services/feeds/photos_public.gne?id=',
            options.id,
            '&format=json&jsoncallback=?'
        ].join('');

        return $.getJSON(url).done(function (data) {
            $.each(data.items, function (index, item) {
                var link = item.media.m.replace('_m', '_c');

                $("<img />")
                    .attr("src", item.media.m.replace('_m', '_c'))
                    .appendTo($el)
                    .wrap(options.container || '')
                    .wrap([
                        '<a href="',
                        link,
                        options.cssClass ? '" class="' + options.cssClass : '',
                        '" title="',
                        item.title,
                        '" data-lightbox="roadtrip"></a>'
                    ].join(''));
            });
        });
    };
    $.fn.flickrPhotoStream = function (options) {
        return flickrPhotoStream($(this).get(), options || {});
    };
})(document, jQuery);