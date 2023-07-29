window.GioiThieuController = function($scope, $routeParams, $http) {
    $scope.datve = "ĐẶT VÉ"

    // $routeParams: để lấy dữ liệu trên url
    $scope.id = $routeParams.id;

    // call API
    // cần thêm tham số $ http (là giao thức để call APPI)

    // Định nghĩa đường dẫn api
    const apiPost = "http://localhost:3000/posts"

    // tạo phương thức để thực hiện call dữ liệu
    // tạo phương thức (hàm) có tên getData
    $scope.getData = function() {
            // console.log(123);
            // sử dụng http đi call API
            $http.get(apiPost).then(function(response) {
                // log ra dữ liệu
                console.log(response.data);
                if (response.status == 200) { // kiểm tra có call API thành công hay không
                    $scope.listPosts = response.data
                    console.log(listPosts);

                }
            })
        }
        // gọi hàm
    $scope.getData()
}