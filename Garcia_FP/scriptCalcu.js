let display = document.getElementById('display');

function Display(value) { display.value += value; }
function Clear() { display.value = ''; }

function Calculate() 
{
    try { display.value = eval(display.value); } 
    catch (error) { display.value = 'Error'; }
}
