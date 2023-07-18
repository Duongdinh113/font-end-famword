var myApp = angular.module('myApp', []); // truyền vào 2 tham số: tên của ng-app, thành phần phụ thuộc

// viết tắt
myApp.controller('infoController', function($scope) {
    $scope.xinchao = "hello world";

    //khai báo mảng
    $scope.phones = ['samsung', 'oppo', 'apple', 'xiaomi'];

    $scope.nyc = [{
            name: "ngoc trinh",
            date: "2007",
            datelove: "12-2-1999",
            phone: "0343534379"
        },
        {
            name: "ngoc Tunng",
            date: "1995",
            datelove: "12-2-1999",
            phone: "0343534379"
        }
    ];
    // tên mảng[vị trí].thuộc tính
    // khai báo hàm
    // cú phap: $scope.ten_ham = funcition (){ công việc }
    $scope.tenHam = function($number) { // tham số truyền vào number
        alert("a đau quá!" + $number);
    }

    //tạo thêm 1 cột là action
    //tạo 1 nút xin chào
    //sau khi ấn vào thì sẽ hiển thị thông báo "xin chào cục cưng + name"
    // tham số truyền vào number
    $scope.acccc = function($name) {
        alert("xin chào cục cưng" + $name);
    }
    $scope.taget = function() {
            alert('mãi bên nhau bạn nhé')

        }
        // tạo 1 sự kiện
        // khi đưa chuột vào nyc < 18  thì hiển thị đi tù ngược lại
        // tuổi = năm hiện tại - năm sinh
        // get curent year in javascript
    $scope.bai = function($date) {
            if (new Date().getFullYear() - Number($date) >= 18) {
                alert("em muốn 1 đưa hay 2 đứa");
            } else {
                alert("chua du tuoi");
            }
        }
        //
    $scope.themMoi = function() {
            console.log($scope.name)
            console.log($scope.address)
        }
        // tạo 1 vùng controller địa chỉ mới. Nhập vào 2 số và 1 button có sự kiện ng-click
        // sau khi click thì gọi đến 1 phương thức thực hiện việc cộng 2 số 

    // tạo 1 form đăng nhập. Nếu nhập vào mật khẩu là "duongdinh"
    // Nếu nhập vào mật khẩu là "duongdinh"
    // thì hiển thị ở trang HTML (trong thẻ) chào mừng + tên đăng nhập
    // ngược lại thì sẽ hiển thi aleart("nhập sai mật khẩu")

    // tại 1 buyton có sự kueenj onclick
    // sau mỗi lần ấn thì sẽ tăng thêm 1 đơn vị
    // nếu > thì hiển thị cảnh báo ở trang HTML (trong thẻ ) (nf-if)
})
myApp.controller('cong2so', function($scope) {
    $scope.sum = () => {
        console.log((Number($scope.number1) + Number($scope.number2)));
    }
})
myApp.controller('dangNhap', function($scope) {
    $scope.nhap = function() {
        console.log($scope.ten);
        console.log($scope.password)
        if ($scope.password == "duongdinh") {
            alert('đăng nhập thành cồng' + $scope.ten)
        } else {
            alert('sai tài khoản hoặc mật khẩu');
        }
    }

})
myApp.controller('tang', function($scope) {
    $scope.bao = function($count) {
        if (Number($count) > 3) {
            alert('không được quá 3');
        }
    }
})