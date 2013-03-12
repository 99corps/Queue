# Queue

A simple queue implementation for JavaScript, allows to easily create a new queue, add and remove ietems from the queue, quickly view items and get the queue size.

### Useage 

Include the `Queue.min.js` in your HTML before the closing `</body>` tag

```html
<script src="src/Queue.min.js"></script>
```

now create a new Queue

```javascript
var myQ = new Queue([1,2,3,4]);
```

	
#### Add items to the Queue
```javascript
myQ.add('new item to add');
```

#### Get the next item in the Queue
`.next()` removes and returns the item from the front of the Queue

```javascript
myQ.next();
//returns 1

myQ.next();
//now returns 2
```

#### Get Queue size
```javascript
myQ.getLength();
```

#### Check if Queue is empty
```javascript
myQ.isEmpty();
```	
returns a boolean `true` if the Queue is empty else `false`

#### View an item without removing it from the Queue
```javascript
//view the item in front
myQ.peek();

//view the second item in the Queue
myQ.peek(1);

//view the third item in the Queue
myQ.peek(2);
```	

#### Clear the Queue
```javascript
//view the item in front
myQ.clear();
```	
