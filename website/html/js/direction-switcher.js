if(localStorage.getItem("dir-lang") !== null){
    $("html").attr("dir", localStorage.getItem("dir-lang"));
  }
  $('.dir-switch').click(function(){
    if(localStorage.getItem("dir-lang") == 'ltr'){
      localStorage.setItem("dir-lang",'rtl');
      window.location.reload();
    }else{
      localStorage.setItem("dir-lang",'ltr');
      window.location.reload();
    }
  });