// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'imageupload',
    "ngMap"

]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider

        .state('login', {
        url: "/login",
        templateUrl: "views/template2.html",
        controller: 'LoginCtrl'
    })

    .state('forgot-password', {
        url: "/forgot-password",
        templateUrl: "views/template2.html",
        controller: 'ForgotPasswordCtrl'
    })

    .state('register-coach', {
        url: "/coach/register",
        templateUrl: "views/template2.html",
        controller: 'RegisterCoachCtrl'
    })

    .state('register-athlete', {
        url: "/athlete/register",
        templateUrl: "views/template2.html",
        controller: 'RegisterAthleteCtrl'
    })

    .state('athlete-profile', {
        url: "/athlete/profile",
        templateUrl: "views/template.html",
        controller: 'AthleteProfileCtrl'
    })

    .state('athlete-profile-edit', {
        url: "/athlete/profile/edit",
        templateUrl: "views/template.html",
        controller: 'AthleteProfileEditCtrl'
    })

    .state('athlete-search-coach', {
        url: "/athlete/search",
        templateUrl: "views/template.html",
        controller: 'AthleteSearchCtrl'
    })

    .state('athlete-coach-profile', {
        url: "/athlete/coach-profile",
        templateUrl: "views/template.html",
        controller: 'AthleteCoachProfileCtrl'
    })

    .state('athlete-competition', {
        url: "/athlete/competition",
        templateUrl: "views/template.html",
        controller: 'AthleteCompetitionCtrl'
    })

    .state('athlete-blog', {
        url: "/athlete/blog",
        templateUrl: "views/template.html",
        controller: 'AthleteBlogCtrl'
    })

    .state('athlete-blog-detail', {
        url: "/athlete/blog-detail",
        templateUrl: "views/template.html",
        controller: 'AthleteBlogDetailCtrl'
    })

    .state('athlete-mycoach', {
        url: "/athlete/mycoach",
        templateUrl: "views/template.html",
        controller: 'AthleteMyCoachCtrl'
    })
    .state('athlete-injuries', {
        url: "/athlete/injuries",
        templateUrl: "views/template.html",
        controller: 'AthleteInjuriesCtrl'
    })
    .state('athlete-injuries-create', {
        url: "/athlete/injury/create",
        templateUrl: "views/template.html",
        controller: 'AthleteInjuriesCreateCtrl'
    })
    .state('athlete-injuries-edit', {
        url: "/athlete/injury/edit",
        templateUrl: "views/template.html",
        controller: 'AthleteInjuriesEditCtrl'
    })

    .state('faq', {
        url: "/faq",
        templateUrl: "views/template2.html",
        controller: 'FAQCtrl'
    })

    .state('contact-us', {
        url: "/contact-us",
        templateUrl: "views/template2.html",
        controller: 'ContactUsCtrl'
    })

    .state('terms-services', {
        url: "/terms-services",
        templateUrl: "views/template2.html",
        controller: 'TermsServicesCtrl'
    })

    .state('privacy-policy', {
        url: "/privacy-policy",
        templateUrl: "views/template2.html",
        controller: 'PrivacyPolicyCtrl'
    })

    .state('notification', {
        url: "/notification",
        templateUrl: "views/template.html",
        controller: 'NotificationCtrl'
    })

    .state('coach-profile', {
        url: "/coach/profile",
        templateUrl: "views/template.html",
        controller: 'CoachProfileCtrl'
    })

    .state('coach-profile-edit', {
        url: "/coach/profile/edit",
        templateUrl: "views/template.html",
        controller: 'CoachProfileEditCtrl'
    })

    .state('coach-athletes-coached', {
        url: "/coach/athletes-coached",
        templateUrl: "views/template.html",
        controller: 'CoachAthletesCoachedCtrl'
    })

    .state('coach-athletes-list', {
        url: "/coach/athletes-list",
        templateUrl: "views/template.html",
        controller: 'CoachAthletesListCtrl'
    })

    .state('coach-athletes-profile', {
        url: "/coach/athletes-profile",
        templateUrl: "views/template.html",
        controller: 'CoachAthletesProfileCtrl'
    })

    .state('coach-athletes-coachedview', {
        url: "/coach/athletes-coachedview",
        templateUrl: "views/template.html",
        controller: 'CoachAthletesCoachedViewCtrl'
    })

    .state('coach-competition', {
        url: "/coach/competition",
        templateUrl: "views/template.html",
        controller: 'CoachCompetitionCtrl'
    })

    .state('coach-competition-create', {
        url: "/coach/competition/create",
        templateUrl: "views/template.html",
        controller: 'CoachCompetitionCreateCtrl'
    })

    .state('coach-competition-edit', {
        url: "/coach/competition/edit",
        templateUrl: "views/template.html",
        controller: 'CoachCompetitionEditCtrl'
    })

    .state('coach-testing', {
        url: "/coach/testing",
        templateUrl: "views/template.html",
        controller: 'CoachTestingCtrl'
    })

    .state('coach-testing-create', {
        url: "/coach/testing-create",
        templateUrl: "views/template.html",
        controller: 'CoachTestingCreateCtrl'
    })

    .state('coach-testing-edit', {
        url: "/coach/testing-edit",
        templateUrl: "views/template.html",
        controller: 'CoachTestingEditCtrl'
    })

    .state('coach-blog', {
        url: "/coach/blogs",
        templateUrl: "views/template.html",
        controller: 'CoachBlogCtrl'
    })

    .state('coach-blog-detail', {
        url: "/coach/blog-detail",
        templateUrl: "views/template.html",
        controller: 'CoachBlogDetailCtrl'
    })

    .state('coach-blog-create', {
        url: "/coach/blog-create",
        templateUrl: "views/template.html",
        controller: 'CoachBlogCreateCtrl'
    })

    .state('coach-blog-edit', {
        url: "/coach/blog-edit",
        templateUrl: "views/template.html",
        controller: 'CoachBlogEditCtrl'
    })

    .state('forbidden', {
        url: "/forbidden",
        templateUrl: "views/template.html",
        controller: 'ForbiddenCtrl'
    })

    $urlRouterProvider.otherwise("/login");
    $locationProvider.html5Mode(isproduction);

});


firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath + "?file=" + input + other;
            } else {
                return input;
            }
        }
    };
});
firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});


firstapp.directive('uploadImage', function($http, $filter) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {

            $scope.showImage = function() {
                console.log($scope.image);
            };


            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }

            $scope.$watch("image", function(newVal, oldVal) {
                if (newVal && newVal.file) {
                    $scope.uploadNow(newVal);
                }
            });

            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = [];
                    _.each($scope.model, function(n) {
                        $scope.image.push({
                            url: n
                        });
                    });
                }

            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.uploadNow = function(image) {
                $scope.uploadStatus = "uploading";

                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        $scope.uploadStatus = "uploaded";
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
});


firstapp.directive('onlyDigits', function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "text") {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    } else {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});

firstapp.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});

firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('menuOptions', function($document) {
    return {
        restrict: 'C',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            $(element).on("click", function() {
                $(".side-header.opened-menu").toggleClass('slide-menu');
                $(".main-content").toggleClass('wide-content');
                $("footer").toggleClass('wide-footer');
                $(".menu-options").toggleClass('active');
            });

        }
    };
});

firstapp.filter('serverimage', function() {
    return function(input) {
        if (input) {
            return imgpath + input;
        } else {
            return "img/logo.png";
        }
    };
});

firstapp.filter('convDate', function() {
    return function(input) {
        return new Date(input);
    };
});

firstapp.filter('downloadImage', function() {
    return function(input) {
        if (input) {
            return adminurl + "download/" + input;
        } else {
            return "img/logo.png";
        }
    };
});

firstapp.directive('oI', function($document) {
    return {
        restrict: 'C',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            $element.click(function() {
                $element.parent().siblings().children("ul").slideUp();
                $element.parent().siblings().removeClass("active");
                $element.parent().children("ul").slideToggle();
                $element.parent().toggleClass("active");
                return false;
            });

        }
    };
});
firstapp.directive('slimscroll', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            $element.slimScroll({
                height: '400px',
                wheelStep: 10,
                size: '2px'
            });
        }
    };
});

firstapp.directive('addressForm', function($document) {
    return {
        templateUrl: 'views/directive/address-form.html',
        scope: {
            formData: "=ngModel",
            demoForm: "=ngValid"
        },
        restrict: 'EA',
        replace: false,
        controller: function($scope, NgMap, NavigationService) {

            $scope.map = {};
            $scope.change = function() {
                NgMap.getMap().then(function(map) {
                    var latLng = {
                        lat: map.markers[0].position.lat(),
                        lng: map.markers[0].position.lng()
                    };
                    _.assign($scope.formData, latLng);
                });
            };
            var LatLongi = 0;
            $scope.getLatLng = function(address) {

                NavigationService.getLatLng(address, ++LatLongi, function(data, i) {

                    if (i == LatLongi) {
                        $scope.formData = _.assign($scope.formData, data.results[0].geometry.location);
                    }
                });
            };

        },
    };
});
var aa = {};
firstapp.directive('multipleSelect', function($document, $timeout) {
    return {
        templateUrl: 'views/directive/multiple-select.html',
        scope: {
            model: '=ngModel',
            api: "@api",
            name: "@name",
            required: "@required",
            filter: "@filter",
            ngName: "=ngName",
            create: "@ngCreate",

        },
        restrict: 'EA',
        replace: false,
        controller: 'MultipleSelectCtrl',
        link: function(scope, element, attr, NavigationService) {
            var $element = $(element);
            scope.activeKey = 0;
            scope.isRequired = true;
            if (scope.required === undefined) {
                scope.isRequired = false;
            }
            scope.typeselect = attr.typeselect;
            // $scope.searchNew()
            aa = $element;
            var maxItemLength = 40;
            var maxBoxLength = 200;
            $timeout(function() {

                $element.find(".typeText").keyup(function(event) {
                    var scrollTop = $element.find("ul.allOptions").scrollTop();
                    var optionLength = $element.find("ul.allOptions li").length;
                    if (event.keyCode == 40) {
                        scope.activeKey++;
                    } else if (event.keyCode == 38) {
                        scope.activeKey--;
                    } else if (event.keyCode == 13) {
                        $element.find("ul.allOptions li").eq(scope.activeKey).trigger("click");
                    }
                    if (scope.activeKey < 0) {
                        scope.activeKey = optionLength - 1;
                    }
                    if (scope.activeKey >= optionLength) {
                        scope.activeKey = 0;
                    }
                    var newScroll = -1;
                    var scrollVisibility = (scrollTop + maxBoxLength) - maxItemLength;
                    var currentItemPosition = scope.activeKey * maxItemLength;
                    if (currentItemPosition < scrollTop) {
                        newScroll = (maxItemLength * scope.activeKey);

                    } else if (currentItemPosition > scrollVisibility) {
                        newScroll = (maxItemLength * scope.activeKey);

                    }
                    if (newScroll != -1) {
                        $element.find("ul.allOptions").scrollTop(newScroll);
                    }

                    scope.$apply();
                });

            }, 100);

        }
    };
});

firstapp.filter('ageFilter', function() {
    function calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return function(birthdate) {
        return calculateAge(birthdate);
    };
});
firstapp.filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});

firstapp.directive('alphaNumeric', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^0-9a-zA-Z]/g, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput; // or return Number(transformedInput)
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
