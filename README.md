# jquery-Equal-Height-product-grid
Equal Height, Product  grid content Equal Height, jquery product grid

### Install

[jQuery](http://jquery.com/download/) is required, so include it first.
  Download [jquery-equal-height-product-grid.js](https://github.com/modimayur/jquery-Equal-Height-product-grid/blob/master/js/jquery-equal-height-product-grid.js) and [script.js](https://github.com/modimayur/jquery-Equal-Height-product-grid/blob/master/js/script.js) include the script in your HTML file:

	<script src="jquery-equal-height-product-grid.js" type="text/javascript"></script>
	<script src="script.js" type="text/javascript"></script>
	<script type="text/javascript">
	jQuery(window).on('load ready', function() {
		getEqualHeightGrid();
		setTimeout(function(){
			getEqualHeightGrid();
		}, 1000);
		setTimeout(function(){
			getEqualHeightGrid();
		}, 2000);
		setTimeout(function(){
			getEqualHeightGrid();
		}, 3000);
		setTimeout(function(){
			getEqualHeightGrid();
		}, 4000);
		setTimeout(function(){
			getEqualHeightGrid();
		}, 5000);
	});
	function getEqualHeightGrid() {
		jQuery('.single-item-wrapper').responsiveEqualHeightGrid();
		jQuery('.single-item-wrapper .profile-img-wrapper').responsiveEqualHeightGrid();
		jQuery('.single-item-wrapper .sp-tfree-client-review').responsiveEqualHeightGrid();
		jQuery('.single-item-wrapper h2.tfree-client-name').responsiveEqualHeightGrid();
		jQuery('.single-item-wrapper .item-content.entry-content').responsiveEqualHeightGrid();
	}
	</script>
