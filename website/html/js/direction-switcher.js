if(localStorage.getItem("dir-lang") !== null){
    $("html").attr("dir", localStorage.getItem("dir-lang"));
  }
  $('.dir-rtl').click(function(){
      localStorage.setItem("dir-lang",'rtl');
      window.location.reload();
  });
  $('.dir-ltr').click(function(){
      localStorage.setItem("dir-lang",'ltr');
      window.location.reload();
  });