var myApp = angular.module('myApp', []);
myApp.controller('bai1', function($scope) {
    $scope.fullname = "Nguyễn Văn Tèo"
    $scope.birthday = "20-10-1995"
    $scope.gender = "nam"
    $scope.photo = "./image/abc.jpg"
    $scope.mark = "8.5"
})
myApp.controller('bai2', function($scope) {
    $scope.student = {
        fullname: "Nguyễn Văn Tèo",
        birthday: "20-10-1995",
        gender: "nam",
        photo: "./image/abc.jpg",
        mark: "8.5"
    }
})
myApp.controller('bai3', function($scope) {
    $scope.students = [{
            fullname: "Nguyễn Văn Tèo",
            birthday: "20-10-1995",
            gender: "nam",
            photo: "./image/abc.jpg",
            mark: "8.5"
        },
        {
            fullname: "Nguyễn Văn Tèo",
            birthday: "20-10-1995",
            gender: "nam",
            photo: "./image/abc.jpg",
            mark: "8.5"
        },
        {
            fullname: "Nguyễn Văn Tèo",
            birthday: "20-10-1995",
            gender: "nam",
            photo: "./image/abc.jpg",
            mark: "8.5"
        }
    ]
})
myApp.controller('bai4', function($scope) {
    $scope.calculate = function() {
        var a = parseFloat($scope.width)
        var b = parseFloat($scope.length)
        $scope.acreage = a * b;
        $scope.perimeter = (a + b) * 2;
    }
})
myApp.controller('bai5', function($scope) {
    $scope.student = {
        fullname: "Nguyễn Văn Tèo",
        birthday: "20-10-1995",
        gender: "nam",
        photo: "./image/abc.jpg",
        mark: "4"
    }
    $scope.save = function() {
        var a = parseFloat($scope.student.mark)
        if (a < 5) {
            $scope.student.academic = "rớt"
        } else {
            $scope.student.academic = "đậu"
        }
    }
})