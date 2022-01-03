$(document).ready(() => { 

  $("button").on('mouseenter', () =>{
    $(event.currentTarget).toggleClass('button-active');
  }).on('mouseleave', () =>{
    $(event.currentTarget).toggleClass('button-active');
  });
  

  $('#dayCounterSubmitBtn').on('click', () => {
    $("#dayCounterrefreshBtn").show();
  });

  
  $("#dDayCounterBtn").on('click', () =>{
    resetDateCounter();
    $("section").hide();
    $("#homePage").hide();
    $("#dDayCounter").show();    
  });

  

  $("#heightWeightBtn").on('click', () =>{
    resetHeightCounter();
    resetWeightCounter();
    $("section").hide();
    $("#homePage").hide();
    $("#heightWeightConverter").show();    
  });


  $('#heightSubmitBtn').on('click', () => {
    $("#heightRefreshBtn").show();
  });


  $("#homePageBtn").on('click', () =>{
    $("section").hide();
    $("#homePage").show();    
  });


  $("#leapYrCheckerBtn").on('click', () =>{
    resetYearChecker();
    $("section").hide();
    $("#homePage").hide();
    $("#leapYearChecker").show();
  });


  $("#lotto649Btn").on('click', () =>{
    lotto649Counter();
    $("section").hide();
    $("#homePage").hide();
    $("#lotto649NumberGenerator").show();    
  });


  $('#submitButton').on('click', () => {
    $("#refreshButton").show();
  });

  
  $('#weightSubmitBtn').on('click', () => {
    $("#weightRefreshBtn").show();
  });

})