/**
 * Compiles the Angular component to allow it to be used.
 */
function compileElement($compile, $scope, element) {
    const component = $compile(element)($scope);
    $scope.$digest();

    return component;
}



describe("Field Components Test", function() {
    let component = {}, $scope;

    beforeEach(angular.mock.module("inputFieldComponents"));
    beforeEach(angular.mock.module("templates"));

    beforeEach(angular.mock.inject(function($rootScope, $compile) {
        $scope = $rootScope.$new();
        
        component.text = compileElement(
            $compile, 
            $scope, 
            angular.element(
                `
                <field type="text" 
                       placeholder="placeholder"
                       blockClass="form">
                </field>
                `
            )
        );
    }));

    it("should contain a label element immediately as the child", function() {
        for (let fieldType in component) {
            const labelEle = component[fieldType].children();

            expect(labelEle[0].nodeName).toBe("LABEL");
        }
    });
});
