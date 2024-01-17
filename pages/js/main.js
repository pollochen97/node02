let cols = document.querySelectorAll(".col");
    cols.forEach(function(col){
    col.addEventListener("click", function(){
    this.classList.toggle("active");
    //   this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active");
    });
});
