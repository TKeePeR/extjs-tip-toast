/*
 * Tooltip coming from top of the screen
 * Usage : GLC.tip.msg(title, message)
 * Inpired by Ext.example.msg
 */
Ext.define('GLC.tip', {

    singleton: true
    ,msgCt : null
    ,divId : 'msg-div'
    ,options: { // default options
        delay : 1000,
        remove: true,
        cls: ""
    }

    ,createBox: function(title, msg, boxCls) {
        return Ext.String.format(
            '<div class="msg {3} {0}border-box"><h3>{1}</h3><p>{2}</p></div>',
            Ext.baseCSSPrefix, title, msg, boxCls?boxCls:""
        );
    }

    ,toast: function(title, message, options) {
        options = Ext.apply( this.options, options );
        if (this.msgCt) {
            document.body.appendChild(this.msgCt.dom);
        } else {
            this.msgCt = Ext.DomHelper.append(document.body, { id: this.divId }, true);
        }
        var box = this.createBox(title, message, options.cls),
            m = Ext.DomHelper.append(this.msgCt, box, true); // Ext.DomHelper.Element
        delete options.cls; // not necessary
        m.hide();
        m.slideIn('t').ghost("t", options);
    }
});
