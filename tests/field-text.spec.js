import angular from "angular";
import "angular-mocks";
import compileElement from "./util/compileElement";
import "./module";

/**
 * The input text type test.
 */
describe("<field type='text'>", () => {
    let $compile, $scope, component;

    beforeEach(() => {
        angular.mock.module("inputFieldComponents");

        angular.mock.inject(($rootScope, _$compile_) => {
            $scope = $rootScope.$new();
            $compile = _$compile_;
        });
    });

    beforeEach(() => {
        // Create event mocks
        $scope.mockEvents = {
            "click": jest.fn(),
            "focus": jest.fn(),
            "blur": jest.fn(),
            "keypress": jest.fn(),
            "keydown": jest.fn(),
            "keyup": jest.fn(),
            "mouseover": jest.fn()
        };

        component = compileElement(
            $compile,
            $scope,
            angular.element(
                `
                <field type="text"
                       ref-id="name"
                       classes="{ 'label': 'labelClass', 'input': 'inputClass' }"
                       name="name"
                       label="Name"
                       placeholder="Placeholder"
                       model="model"
                       disabled="model === 'hello world'"
                       click="mockEvents.click()"
                       focus="mockEvents.focus()"
                       blur="mockEvents.blur()"
                       keypress="mockEvents.keypress()"
                       keydown="mockEvents.keydown()"
                       keyup="mockEvents.keyup()"
                       mouseover="mockEvents.mouseover()">
                </field>
                `
            )
        );
    });

    it("should have two children only", () => {
        expect(component.children().length).toBe(2);
    });

    it("should contain only one <label> child", () => {
        expect(component.find("label").length).toBe(1);
    });

    it("should contain only one input element and it is <input type='text'>", () => {
        const inputEle = component.find("input");

        expect(inputEle.length).toBe(1);
        expect(inputEle[0].type).toBe("text");
    });


    describe("<label>", () => {
        let labelEle;

        beforeEach(() => {
            labelEle = component.children();
        });

        it("should contain all its expected attributes", () => {
            expect(labelEle[0].hasAttribute("class")).toBe(true);
            expect(labelEle[0].hasAttribute("for")).toBe(true);
        });

        it("should have the binded label, 'Name'", () => {
            expect(labelEle.text()).toBe("Name");
        });

        it("should have the reference id, 'name'", () => {
            expect(labelEle.attr("for")).toBe("name");
        });

        it("should have the class, 'labelClass'", () => {
            expect(labelEle.hasClass("labelClass")).toBe(true);
        });
    });


    describe("<input type='text'>", () => {
        let inputEle;

        beforeEach(() => {
            inputEle = component.find("input");
        });

        it("should contain all its expected attributes", () => {
            expect(inputEle[0].hasAttribute("type")).toBe(true);
            expect(inputEle[0].hasAttribute("id")).toBe(true);
            expect(inputEle[0].hasAttribute("class")).toBe(true);
            expect(inputEle[0].hasAttribute("name")).toBe(true);
            expect(inputEle[0].hasAttribute("placeholder")).toBe(true);
            expect(inputEle[0].hasAttribute("maxlength")).toBe(true);
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

        it("should have the id, 'name'", () => {
            expect(inputEle[0].id).toBe("name");
        });

        it("should have the class, 'inputClass'", () => {
            expect(inputEle.hasClass("inputClass")).toBe(true);
        });

        it("should have the name of input be 'name'", () => {
            expect(inputEle[0].name).toBe("name");
        });

        it("should have the binded placeholder, 'Placeholder'", () => {
            expect(inputEle[0].placeholder).toBe("Placeholder");
        });

        it("should trigger correctly on click", () => {
            inputEle.triggerHandler("click");
            expect($scope.mockEvents.click).toHaveBeenCalled();
        });

        it("should trigger correctly on focus", () => {
            inputEle.triggerHandler("focus");
            expect($scope.mockEvents.focus).toHaveBeenCalled();
        });

        it("should trigger correctly on blur", () => {
            inputEle.triggerHandler("blur");
            expect($scope.mockEvents.blur).toHaveBeenCalled();
        });

        it("should trigger correctly on keypress", () => {
            inputEle.triggerHandler("keypress");
            expect($scope.mockEvents.keypress).toHaveBeenCalled();
        });

        it("should trigger correctly on keydown", () => {
            inputEle.triggerHandler("keydown");
            expect($scope.mockEvents.keydown).toHaveBeenCalled();
        });

        it("should trigger correctly on keyup", () => {
            inputEle.triggerHandler("keyup");
            expect($scope.mockEvents.keyup).toHaveBeenCalled();
        });

        it("should trigger correctly on mouseover", () => {
            inputEle.triggerHandler("mouseover");
            expect($scope.mockEvents.mouseover).toHaveBeenCalled();
        });

        it("should update the model correctly", () => {
            $scope.model = "hello";
            $scope.$digest();
            expect(inputEle.val()).toBe("hello");

            $scope.model += " world";
            $scope.$digest();
            expect(inputEle.val()).toBe("hello world");

            $scope.model = "1";
            $scope.$digest();
            expect(inputEle.val()).toBe("1");
        });

        it("should set the disabled attribute when the condition matches", () => {
            $scope.model = "hello";
            $scope.$digest();
            expect(inputEle[0].hasAttribute("disabled")).toBe(false);

            $scope.model += " world";
            $scope.$digest();
            expect(inputEle[0].hasAttribute("disabled")).toBe(true);

            $scope.model = "1";
            $scope.$digest();
            expect(inputEle[0].hasAttribute("disabled")).toBe(false);
        });
    });
});
