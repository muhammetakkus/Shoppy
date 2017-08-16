
/** PURE JS checkbox check event için 2 yöntem */


//dinamik eklenen checkbox'ları görmüyor?
let checkBox = qs(".to-do-checkbox");
on(document, "DOMContentLoaded", function () {
    on(checkBox, "change", function (e) {
        console.log("aaaa");
    });
});


//onchange="checkEvent(this);"
function checkEvent(elem)
{
    if (elem.checked)
    {
        alert("Im Checked");
    }
    else
    {
        alert("Im not checked");
    }
}
