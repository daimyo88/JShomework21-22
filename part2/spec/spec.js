var app = require("../js/main.js");

 describe("app", function() {

  it("pow positive", function(){

     var result = app.pow(2, 3);
     expect(result).toBe(8);
  });

  it("pow negative", function(){

      var result = app.pow(5, -4);
      expect(result).toBe(0.0016);
  });

  it("check true", function(){

    var result = app.checkInteger(5, 5);
    expect(result).toBe(true);

  });

  it("check with float", function(){

    var result = app.checkInteger(5, 2.4);
    expect(result).toBe(false);

    });

});
