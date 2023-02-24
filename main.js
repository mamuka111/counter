let decrease = document.querySelector(".decrease")
let reset = document.querySelector(".reset")
let increase = document.querySelector(".increase")
let main = document.querySelector(".main")
let p = 0;
main.innerHTML = p;
decrease.addEventListener("click", function() {
    p--;
    main.innerHTML = p;
    main.style.color = 'red';
  });
  reset.addEventListener("click", function() {
    p = 0;
    main.innerHTML = p;
    main.style.color = 'black';

  });
  increase.addEventListener("click", function() {
    p++;
    main.innerHTML = p;
    main.style.color = 'green';
  });