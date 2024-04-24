

{
    var myIndex = 0;
  carousel2();
  
  function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel2, 7000);    
  }
  }
  
  
  
  
  {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');
   
    searchButton.addEventListener('click', () => {
      const searchTerm = searchBox.value;
      console.log(`Bạn đã tìm kiếm: ${searchTerm}`);
    });
    
  }
  
  
  
  function hideInput() {
    var input = document.getElementById("ip-1");
    if (input.style.display === "none") {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  }
  
  
  
  