###
  Queue: Simple JS Queue
  http://stephan.steynfaardt.com

  Copyright (c) 2013 Stephan Steynfaardt
  Released under the MIT license
  http://opensource.org/licenses/MIT
###
class Queue
  constructor: (functionList) ->
    @list = []
    if functionList
      if functionList instanceof Array
        @add(func) for func in functionList
      else
        throw new Error("Queue only accepts an Array as an argument.");

  add: (func) ->
    @list.push(func)
    @

  next:() ->
    @list.shift()

  clear: (func) ->
    @list = []
    @
  
  getLength: () ->
    @list.length

  isEmpty: () ->
    if @list.length > 0
      return false
    true

  peek:(offset)->
    offset = offset || 0
    @list[offset]

window.Queue = Queue