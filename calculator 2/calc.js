// Calculator Functions

function _(x) {
    return document.getElementById(x);

}

function calc(val) {
    _('display').value += val;

}

// Clear Value

function c(val) {
_('display').value = '';

}

// Equals Value

function e() {
    _('display').value = eval(_('display').value);
}

