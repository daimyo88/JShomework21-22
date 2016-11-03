'use strict';
 var app = {
    pow : function(x, y) {
        var result;
        if (app.checkInteger(x, y)) {
            var multiplicand = x;
            for (var i = 1; i < Math.abs(y); i++) {
                multiplicand *= x;
            }
        }
        if ( y > 0 ) result = multiplicand;
        else result = 1/multiplicand;
        return result;
    },
    checkInteger: function(a, b) {
        if (0 !== a - Math.floor(a)) {
            // alert ("Программа вычисления работает только для целых чисел");
            return false;
        }
        if (0 !== b - Math.floor(b)) {
            // alert ("Степень должна быть целым числом");
            return false;
        }
        return true;
    }
  }

try {
  module.exports = app;
} catch(e) {}
