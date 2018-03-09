# jquery-Equal-Height-product-grid
Equal Height, Product  grid content Equal Height, jquery product grid


$(window).on('load resize ready', function() {
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
 $('.grid--view-items .grid-view-item').responsiveEqualHeightGrid();
 }
