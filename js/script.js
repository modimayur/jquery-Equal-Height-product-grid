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
 $('.grid-iteam').responsiveEqualHeightGrid();
 $('.grid-iteam .pname').responsiveEqualHeightGrid();
}
