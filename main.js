

$(".mainPage").on("click", "img", function(event) {
  event.preventDefault();
  $("section").removeClass("active");
  $(".albums").addClass("active");
  var albumRel = $(this).parent().attr("rel");
  var items = getAlbumPhotos(albumRel);
  var photoDisplay = "";
  items.photo.forEach(function(el) {
    photoDisplay += '<a href="#" rel="">'
    + '<img src="'+ el + '" alt="" />'
  })
    console.log(photoDisplay);
    $(".albums-row-1").html(photoDisplay);
});

var getAlbumPhotos = function(albumClicked){
  var photoArray = myPhotos.filter(function(el){
    return el.albumName === albumClicked.trim();
  }).pop();
  return photoArray;
}

$(".multiAlbums").on("click","li", function(event){
  event.preventDefault();
  var pullAlbum = $(this).attr("rel");
  var items = getAlbumPhotos(pullAlbum);
  var photoDisplay = "";
  items.photo.forEach(function(el) {
    photoDisplay += '<a href="#" rel="">'
    + '<img src="'+ el + '" alt="" />'
  })
    console.log(photoDisplay);
    $(".albums-row-1").html(photoDisplay);
})

$(".albums-row-1").on("click", "img", function(event){
  event.preventDefault();
  var bigImg = $(this).attr("src");

  var singlePhoto = '<img src="'+ bigImg + '" alt="" />'

  $(".photo-container").html(singlePhoto);
  $('.bigPhoto').show()
  // $('.albums-row-1').hide();
  $('.albums').hide();
})





var albumCoverStr = "";
myPhotos.forEach(function(el) {
  albumCoverStr +=
   '<a href="#" rel="' + el.albumName + ' ">'
   + '<img id="' + el.albumName + '" src="'+ el.albumCover + '" alt="" />'
   + '</a>'
});

$(".mainPage-row-1").append(albumCoverStr);
