import angular from "angular";
import field from "./../src/field.component";
import MainCtrl from "./main.controller";
import codeSnippet from "./codeSnippet.directive";

angular
    .module("inputFieldComponents", [])
    .component("field", field)
    .controller("MainCtrl", MainCtrl)
    .directive("codeSnippet", codeSnippet);
