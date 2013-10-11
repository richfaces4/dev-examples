function selectPopularTag(tag, target) {
    //console.log(target);
    //console.log(target.value);
    if (target) {
        var value = target.getValue().trim();
        if (value.indexOf(tag) == -1) {
            target.setValue(value.length != 0 ? value + ", " + tag : tag);
        }
    }
}

function applyModalPanelEffect(panelId, /*effectFunc,*/ params) {
    if (panelId /*&& effectFunc*/) {

        var modalPanel = $(panelId);

        if (modalPanel && modalPanel.component) {
            var component = modalPanel.component;
            var div = component.getSizedElement();

            //Element.hide(div);
            div.style.visibility = 'hidden';

            //effectFunc.call(this, Object.extend({targetId: div.id}, params || {}));
        }

    }
}

/*
 // fix IE6 footer position
 function kickLayout(selector) {

 if(Richfaces && Richfaces.browser.isIE6) {
 var element = jQuery(selector);
 if(element) {
 element.css('zoom','normal').css('zoom','100%');
 }
 }

 } */

function toJQObject(idEndsOrJQObject) {
    if ((typeof idEndsOrJQObject) == "object") {
        return idEndsOrJQObject;
    }
    return $("[id$='" + idEndsOrJQObject + "']");
}

function show(idEndsOrJQObject) {
    toJQObject(idEndsOrJQObject).fadeIn();
}

function hide(idEndsOrJQObject) {
    toJQObject(idEndsOrJQObject).fadeOut();
}

function select(idEndsOrJQObject) {
    toJQObject(idEndsOrJQObject).fadeTo('slow', 0.50);
}