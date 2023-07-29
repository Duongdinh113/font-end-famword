var myApp = angular.module('myApp', [])
myApp.controller('datve', function($scope) {
    $scope.datve = "Đặt vé máy bay"
})

myApp.controller('lienhe', function($scope) {
    $scope.lienhe = "Liên hệ"
})

myApp.controller('thongtin', function($scope) {
    $scope.thongtin = "Thông tin"
})
myApp.controller('sanpham', function($scope) {
    $scope.sanpham = [{
            name: "Hà nội đến sài gòn",
            date: "10-10-2023",
            price: "500.000",
            image: "https://bav-ui.useleadr.com/uploads/medium_tp_ho_chi_minh_saigon_d3b91cdfa6.jpg"
        },
        {
            name: "TP.HCM đến Hà Nội",
            date: "10-10-2023",
            price: "500.000",
            image: "https://bav-ui.useleadr.com/uploads/medium_hanoi_ba7693c643.jpg"
        },
        {
            name: "Hà Nội đến Đà Nẵng",
            date: "10-10-2023",
            price: "500.000",
            image: "https://bav-ui.useleadr.com/uploads/medium_tp_ho_chi_minh_saigon_d3b91cdfa6.jpg"
        },
        {
            name: "Hà Nội đến Đà Nẵng",
            date: "10-10-2023",
            price: "500.000",
            image: "https://bav-ui.useleadr.com/uploads/medium_tp_ho_chi_minh_saigon_d3b91cdfa6.jpg"
        },
        {
            name: "Hà Nội đến Đà Nẵng",
            date: "10-10-2023",
            price: "500.000",
            image: "https://bav-ui.useleadr.com/uploads/medium_tp_ho_chi_minh_saigon_d3b91cdfa6.jpg"
        },
        {
            name: "Hà Nội đến Đà Nẵng",
            date: "10-10-2023",
            price: "500.000",
            image: "https://bav-ui.useleadr.com/uploads/medium_tp_ho_chi_minh_saigon_d3b91cdfa6.jpg"
        },
        {
            name: "Hà Nội đến Đà Nẵng",
            date: "10-10-2023",
            price: "500.000",
            image: "https://bav-ui.useleadr.com/uploads/medium_tp_ho_chi_minh_saigon_d3b91cdfa6.jpg"
        },


    ]
})