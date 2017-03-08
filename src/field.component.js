/* 
 * Component properties.
 */
export default {
    bindings: {
        blockClass: "@",
        customClass: "<",
        title: "@",
        placeholder: "@",
        model: "=?",
        disabled: "<",
        options: "<",
        click: "&",
        focus: "&",
        blur: "&",
        change: "&",
        keypress: "&",
        keydown: "&",
        keyup: "&"
    },

    templateUrl: ["$element", "$attrs", function($element, $attrs) {
        return "./field-" + $attrs.type + ".html";
    }]
};
