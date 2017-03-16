import compileElement from "./util/compileElement";

/**
 * The input text type test.
 */
describe("<field type='text'>", function() {
    let $compile, $scope, component;

    beforeEach(angular.mock.module("inputFieldComponents"));
    beforeEach(angular.mock.module("templates"));

    beforeEach(angular.mock.inject(($rootScope, _$compile_) => {
        $scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    beforeEach(() => {
        // Create spy mockups to use for events
        $scope.mockClick = jasmine.createSpy("mockClick");
        $scope.mockBlur = jasmine.createSpy("mockBlur");
        $scope.mockKeypress = jasmine.createSpy("mockKeypress");

        component = compileElement(
            $compile,
            $scope,
            angular.element(
                `
                <field type="text"
                       title="Title here"
                       placeholder="placeholder"
                       block-class="form"
                       click="mockClick()"
                       blur="mockBlur()"
                       keypress="mockKeypress()">
                </field>
                `
            )
        );
    });

    it("should contain only one child element and it is <label>", () => {
        const labelEle = component.children();

        expect(labelEle.length).toBe(1);
        expect(labelEle[0].nodeName).toBe("LABEL");
    });

    it("should contain only one element for title and it is <span>", () => {
        const titleEle = component.find("span");

        expect(titleEle.length).toBe(1);
    });

    it("should contain only one input element and it is <input type='text'>", () => {
        const inputEle = component.find("input");

        expect(inputEle.length).toBe(1);
        expect(inputEle[0].type).toBe("text");
    });

    describe("<label>", function() {
        it("should contain all its expected attributes", () => {
            const labelEle = component.children();

            expect(labelEle[0].hasAttribute("class")).toBe(true);
            expect(labelEle[0].hasAttribute("ng-class")).toBe(true);
        });
    });

    describe("<span> title", function() {
        it("should contain all its expected attributes", () => {
            const titleEle = component.find("span");

            expect(titleEle[0].hasAttribute("class")).toBe(true);
            expect(titleEle[0].hasAttribute("ng-class")).toBe(true);
        });

        it("should have the binded title", () => {
            const titleEle = component.find("span");

            expect(titleEle.attr("data-title")).toBe("Title here");
        });
    });

    describe("<input type='text'>", function() {
        it("should contain all its expected attributes", () => {
            const inputEle = component.find("input");

            expect(inputEle[0].hasAttribute("type")).toBe(true);
            expect(inputEle[0].hasAttribute("class")).toBe(true);
            expect(inputEle[0].hasAttribute("placeholder")).toBe(true);
            expect(inputEle[0].hasAttribute("maxlength")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-class")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-model")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-click")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-focus")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-blur")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-keypress")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-keydown")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-keyup")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-mouseover")).toBe(true);
            expect(inputEle[0].hasAttribute("ng-disabled")).toBe(true);
        });

        it("should trigger correctly on click", () => {
            const inputEle = component.find("input");

            inputEle.triggerHandler("click");
            expect($scope.mockClick).toHaveBeenCalled();
        });

        it("should trigger correctly on blur", () => {
            const inputEle = component.find("input");

            inputEle.triggerHandler("blur");
            expect($scope.mockBlur).toHaveBeenCalled();
        });

        it("should trigger correctly on keypress", () => {
            const inputEle = component.find("input");

            inputEle.triggerHandler("keypress");
            expect($scope.mockKeypress).toHaveBeenCalled();
        });
    });
});