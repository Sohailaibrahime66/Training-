var a, b, c, d;
a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
d = document.getElementById("four");
var r = document.getElementById("b1");
var s = document.getElementById("b2");

r.onclick = function ()
{
    d.classList.add("mover2");
    a.classList.add("hide2");
    a.classList.remove("show2");
    c.classList.add("movel22");
    b.classList.add("hide2");
    b.classList.remove("show2");
    c.classList.remove("hide2");
    c.classList.add("show2");
    d.classList.remove("hide2");
    d.classList.add("show2");
}
s.onclick = function ()
{
    b.classList.add("mover22");
    c.classList.add("hide2");
    c.classList.remove("show2");
    a.classList.add("movel2");
    d.classList.add("hide2");
    d.classList.remove("show2");
    b.classList.remove("hide2");
    b.classList.add("show2");
    a.classList.remove("hide2");
    a.classList.add("show2");
}