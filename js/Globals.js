let _url = (window.location.href.indexOf(`127.0.0.1`) >= 0) ? `http://localhost:5292` : `/api`;

function $$(Id) {
    return window.document.getElementById(Id);
}

function __(CssClass) {
    return window.document.getElementsByClassName(CssClass);
}

function IsDefined(val) {
    return val !== null && String(typeof val) !== `undefined` ? true : false;
}

function IsSet(val, replacementVal) {
    return window.IsDefined(val) === true ? val : replacementVal;
}

function IsNullOrEmpty(val) {
    return (!IsDefined(val) || val.trim().length === 0);
}
