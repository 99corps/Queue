/*
  Queue: Simple JS Queue
  http://stephan.steynfaardt.com

  Copyright (c) 2013 Stephan Steynfaardt
  Released under the MIT license
  http://opensource.org/licenses/MIT
*/
(function() {
  var Queue;

  Queue = (function() {

    function Queue(functionList) {
      var func, _i, _len;
      this.list = [];
      if (functionList) {
        if (functionList instanceof Array) {
          for (_i = 0, _len = functionList.length; _i < _len; _i++) {
            func = functionList[_i];
            this.add(func);
          }
        } else {
          throw new Error("Queue only accepts an Array as an argument.");
        }
      }
    }

    Queue.prototype.add = function(func) {
      this.list.push(func);
      return this;
    };

    Queue.prototype.next = function() {
      return this.list.shift();
    };

    Queue.prototype.clear = function(func) {
      this.list = [];
      return this;
    };

    Queue.prototype.getLength = function() {
      return this.list.length;
    };

    Queue.prototype.isEmpty = function() {
      if (this.list.length > 0) {
        return false;
      }
      return true;
    };

    Queue.prototype.peek = function(offset) {
      offset = offset || 0;
      return this.list[offset];
    };

    return Queue;

  })();

  window.Queue = Queue;

}).call(this);
