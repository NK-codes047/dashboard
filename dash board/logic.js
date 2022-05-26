function openSidebar() {
    document.getElementById("mySidebar").style.display = "flex";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "26%";
  }
  function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("main").style.marginLeft = "60px";
  }
  function open_userTool(){
    document.getElementById("userPannel").style.display = "block";
    document.getElementById("user").setAttribute("onclick","close_userTool()");
  }
  function close_userTool(){
    document.getElementById("userPannel").style.display = "none";
    document.getElementById("user").setAttribute("onclick","open_userTool()");
  }