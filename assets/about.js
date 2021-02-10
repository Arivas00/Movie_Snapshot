function showShannonAbout() {
    $("#ShannonAbout").removeClass("hide");
    $("#Alex").addClass("hide");
    $("#Van").addClass("hide");
    $("#ShannonPic").removeClass("col s4");
    $("#ShannonPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#ShannonGithub").removeClass("hide")
  }
  
  function showAlexAbout() {
    $("#AlexAbout").removeClass("hide");
    $("#Shan").addClass("hide");
    $("#Van").addClass("hide");
    $("#AlexPic").removeClass("col s4");
    $("#AlexPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#AlexGithub").removeClass("hide")
  }
  
  function showVanesaAbout() {
    $("#VanesaAbout").removeClass("hide");
    $("#Shan").addClass("hide");
    $("#Alex").addClass("hide");
    $("#VanesaPic").removeClass("col s4");
    $("#VanesaPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#VanesaGithub").removeClass("hide")
  }
  
  function GangsAllHere() {
    $("#Shan").removeClass("hide");
    $("#Alex").removeClass("hide");
    $("#Van").removeClass("hide");
  
    $("#ShannonPic").removeClass();
    $("#ShannonPic").addClass("col s4");
    $("#AlexPic").removeClass();
    $("#AlexPic").addClass("col s4");
    $("#VanesaPic").removeClass();
    $("#VanesaPic").addClass("col s4");
  
    $("#ShannonAbout").addClass("hide");
    $("#AlexAbout").addClass("hide");
    $("#VanesaAbout").addClass("hide");

    $("#ShannonGithub").addClass("hide")
    $("#AlexGithub").addClass("hide")
    $("#VanesaGithub").addClass("hide")

  
    $("button").addClass("hide");
  
    $("h2").removeClass("hide");
  }
  
  $("#Shan").click(function () {
    showShannonAbout();
  });
  $("#Alex").click(function () {
    showAlexAbout();
  });
  $("#Van").click(function () {
    showVanesaAbout();
  });
  $("button").click(function () {
    GangsAllHere();
  });