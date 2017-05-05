const fs = require("fs");

/* 
 * Component properties.
 */
export default {
    bindings: {
        refId: "@",
        classes: "<",
        name: "@",
        label: "@",
        placeholder: "@",
        maxlength: "@",
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

    template: ["$element", "$attrs", "$log", function($element, $attrs, $log) {
        switch ($attrs.type) {
            case "text":
                return fs.readFileSync(__dirname + "/field-text.html", "utf8");
            case "textarea":
                return fs.readFileSync(__dirname + "/field-textarea.html", "utf8");
            case "checkbox":
                return fs.readFileSync(__dirname + "/field-checkbox.html", "utf8");
            case "dropdown":
                return fs.readFileSync(__dirname + "/field-dropdown.html", "utf8");
        }

        $log.warn("There does not exist a template for the " + $attrs.type + " type."); 
    }]
};
