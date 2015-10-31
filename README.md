# resizeend

Script that creates a custom event to check when resize has ended with no dependencies.


## Use

Include the minified version file in your project.

```html
<script src="resizeend.min.js"></script>
```

### Listen

```js
window.addEventListener('resizeend', function() {
    alert('You are not resizing the window anymore!');
});
```

### delay

The scripts takes some time to check if the user has stopped resizing the window. The default is `100`milliseconds but you can change that calling `resizeend.delay(250)`.


## Browser support

This script works in all modern browsers (last version of Firefox, Chrome, Safari, Edge) and Internet Explorer 9 and 10.

> For Internet Explorer 9 and browsers that don't support `requestAnimationFrame` you have to use the legacy version.


## Size
- 1.18KB uncompressed
- 361 bytes minified
- 223 bytes minified and gzipped
