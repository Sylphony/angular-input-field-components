/**
 * Compiles the Angular component to allow it to be used.
 */
export default function compileElement($compile, $scope, element) {
    const component = $compile(element)($scope);
    $scope.$digest();

    return component;
}
