import angular from "angular";

class MainCtrl {
    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {
        const fieldClassesBase = {
            label: "field__label",
            title: "field__title",
            input: "field__input"
        };

        this.classes = {
            text: Object.assign(fieldClassesBase, {
                label: fieldClassesBase.label += " field__label--text",
                title: fieldClassesBase.title += " field__title--text",
                input: fieldClassesBase.input += " field__input--text",
            }),
        };

        this.events = {
            click: function(b, $event) {
                console.log(b, $event);
            }
        };
    }
}

MainCtrl.$inject = ["$scope"];

export default MainCtrl;
