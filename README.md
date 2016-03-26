# ExtJS-Tip-Toast
Tooltip class (alert), kind of Android'Toast/Temporary slide-in-slide-out message

## Introduction
This class was inspired by Sencha Ext.example.msg (see their examples), BootStrap, and Android's Toast
It display a message (with a title) sliding in from top of the screen, then sliding out.
The additional styles (warning, info, danger, success) come directly from Bootstrap 3.4.x (@see getbootstrap.com)

## Implementation
__2 Files:__
- GLC.tip.js  the javascript clas
- tip.scss    the class file

## Usage

```javascript
GLC.tip.toast(title, message, options)
```
with:
```javascript
options: {
  delay: 1000  // delay in ms (default: 1000)
  remove: true // remove the dom element after it is hidden (default: true)
  cls: "" // toast class (default : ""). Could be : success, info, warning, danger
}
```
## Examples
```javascript
        title ="Exemple of title";
        msg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        GLC.tip.toast(title, msg, {cls: "", delay: 1000});
        GLC.tip.toast(title, msg, {cls: "success", delay: 2000});
        GLC.tip.toast(title, msg, {cls: "info", delay: 3000});
        GLC.tip.toast(title, msg, {cls: "danger", delay: 4000});
        GLC.tip.toast(title, msg, {cls: "warning", delay: 5000});
```


## TODO
- [ ] Add a button to "hide" the tip, instead of auto-slideout/ghost
- [ ] Put everything into a, ExtJS package
- [ ] Code improvements
