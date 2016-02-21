

var togglePics = $("body").find("a");
togglePics.click(function(event){
  event.preventDefault();
  var selectedPage = "." + $(this).attr('rel');
  $(selectedPage).siblings('div').addClass('inactive');
  $(selectedPage).removeClass('inactive');
});



var albumCoverStr = "";
photos.forEach(function(el) {
  albumCoverStr +=
   '<a id="album-1" href="" rel="">'
   + '<img src="'+ el.albumCover + '" alt="" />'
   + '</a>'
  + '</div>'
});

$('.mainPage-row-1').append(albumCoverStr);

// var albumCoverStr2 = "";
// photos.forEach(function(el) {
//   albumCoverStr2 +=
//    '<a id="album-1" href="">'
//    + '<img src="'+ el.albumCover2 + '" alt="" />'
//    + '</a>'
//   + '</div>'
// });
//
// $('.albums-row-1').append(albumCoverStr2);
