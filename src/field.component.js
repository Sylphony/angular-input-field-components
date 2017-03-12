/* 
 * Component properties.
 */
export default {
    bindings: {
        title: "@",
        placeholder: "@",
        maxlength: "@",
        blockClass: "@",
        customClass: "<",
        model: "=?",
        disabled: "<",
        options: "<",
        click: "&",
        focus: "&",
        blur: "&",
        change: "&",
        keypress: "&",
        keydown: "&",
        keyup: "&",
        mouseover: "&"
    },

    templateUrl: ["$element", "$attrs", function($element, $attrs) {
        return "field-" + $attrs.type + ".html";
    }]
};
