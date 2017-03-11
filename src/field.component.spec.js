/**
 * Compiles the Angular component to allow it to be used.
 */
function compileElement($compile, $scope, element) {
    const component = $compile(element)($scope);
    $scope.$digest();

    return component;
}


/**
 * The tests.
 */
describe("Field Components", function() {
    let $compile, $scope;

    beforeEach(angular.mock.module("inputFieldComponents"));
    beforeEach(angular.mock.module("templates"));

    beforeEach(angular.mock.inject(($rootScope, _$compile_) => {
        $scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    // Text field tests
    describe("<field type='text'>", function() {
        let component;

        beforeEach(() => {
            component = compileElement(
                $compile,
                $scope,
                angular.element(
                    `
                    <field type="text" 
                           placeholder="placeholder"
                           block-class="form">
                    </field>
                    `
                )
            );
        });

        it("should contain a <label> immediately as the child", () => {
            const labelEle = component.children();

            expect(labelEle[0].nodeName).toBe("LABEL");
        });

        it("should contain only one input element and it is <input type='text'>", () => {
            const inputEle = component.find('input');

            expect(inputEle.length).toBe(1);
            expect(inputEle[0].type).toBe("text");
        });
    });

});
