
<!-- Calculator 1 Pseudocode -->


// variable inputName = findSource('name');
var inputLabel = document.getElementById('inputLabel');
     
    // call function push button 
    function pushBtn(obj) {

        // variable for the pushed button 
        var pushed = obj.innerHTML;

        // if = is pushed...
        if (pushed == '=') {

            // Calculate the numbers input eval(input name)
            inputLabel.innerHTML = eval(inputLabel.innerHTML);

        // if AC is pushed...
        } else if (pushed == 'AC') {

            // Clear all numbers - AC
            inputLabel.innerHTML = '0';

        // else function calls the variable     
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;
        }
    }
}


<!-- Calculator 2 Pseudocode - This one is my favourite!  -->

// call function _ which calls _ to return x
function _(x) {
    return document.getElementById(x);
}

// calls calc to return _ value and also the second value
function calc(val) {
    _('display').value += val;
}

// function c - clears the display and returns ' '.
function c(val) {
_('display').value = '';
}

// function e - if = is pushed, result will be the value of e which is both numbers and the selected value
function e() {
    _('display').value = eval(_('display').value);
}
