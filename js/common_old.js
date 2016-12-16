// Ensure that all product lists are the same height
function setProductListHeights(imgName, className) {
    // hack job putting this here but it needs to be reused by search ajax pager
    if (typeof(DesignMode) != 'undefined') {
        return;
    }
    if (typeof imgName != 'undefined') {
        if (typeof loadedImages[imgName] != 'undefined') {
            return;
        }
        loadedImages[imgName] = true;
    }
    function setProductThumbHeight() {
        var ImageBoxDiv = $('.ProductList:not(.List) .ProductImage a');
        var ImageListDiv = $('.ProductList:not(.List) li');
        var CurrentListHeight = ImageListDiv.height();
        var ProductImageMargin = ImageBoxDiv.css('margin-left') * 2;
        var ImageBoxHeight = ThumbImageHeight;
        if (parseInt(ImageBoxDiv.css("padding-top"), 10)) {
            ImageBoxHeight += parseInt(ImageBoxDiv.css("padding-top"), 10) * 2; //Total Padding Width
        }
        if (parseInt(ImageBoxDiv.css("margin-top"), 10)) {
            ImageBoxHeight += parseInt(ImageBoxDiv.css("margin-top"), 10) * 2; //Total Margin Width
        }

        ImageBoxDiv.height(ImageBoxHeight);
        if ($.browser.msie && $.browser.version >= 7 && $.browser.version < 8) {
            // this is a specific browser check because this fix is only applicable for ie7
            ImageBoxDiv.css('line-height', ImageBoxHeight + 'px');
        }

        // $('.Content .ProductList.List .ProductDetails').css('margin-left',ThumbImageWidth+2+'px');
        // $('.Content .ProductList.List li').height(Math.max(CurrentListHeight, ThumbImageHeight));
    }
    /**
     * Sets the height of the elements passed in to match that of the one that
     * has the greatest height.
     *
     * @param ele The element(s) to adjust the height for.
     * @return void
     */
    function setHeight(ele) {
        var ele = $(ele),
            maxHeight = 0;

        ele
        // reset the height just in case it was set by the stylesheet so
        // we can detect it
        .css('height', 'auto')
        // get the one with the greatest height
        .each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        })
        // and set them all to the greatest height
        .css('height', maxHeight);
    }
    if (!className) {
        className = '.Content';
    }
    setHeight(className + ' .ProductList:not(.List) li .ProductDetails');
    if (typeof imgName != 'undefined') {
        setHeight(className + ' .ProductList:not(.List) li .ProductPriceRating:has(img[src$=\'' + imgName + '\'])');
    }
    setHeight(className + ' .ProductList:not(.List) li');
}
$(window).on('load resize', function() {
    if ($('.Rating img').length > 0) {
        $('.Rating img').each(function() {
            if ($(this).height() == 0) {
                var imgName = $(this).attr('src').split('/');
                var imgKey = imgName.length - 1;
                setProductListHeights(imgName[imgKey]);
            } else {
                setProductListHeights();
                return false;
            }
        });
    } else {
        setProductListHeights();
    }
});
setProductListHeights();