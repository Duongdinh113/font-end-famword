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
                        // console.log(listPosts);

                }
            })
        }
        // gọi hàm
    $scope.getData()

    // kiểm tra dữ liệu form vadedate form 
    $scope.kiemTraDuLieu = {
        title: false,
        author: false
    }

    // add
    $scope.onSubmit = function() {
        console.log($scope.inputValue);

        // đặt biến để kiểm trà

        let flag = true;

        // kiểm tra thằng title có bỏ trống hay không

        if (!$scope.inputValue || !$scope.inputValue.title) {
            $scope.kiemTraDuLieu.title = true //vadedate form 
            flag = false
        }
        if (!$scope.inputValue || !$scope.inputValue.author) {
            $scope.kiemTraDuLieu.author = true //vadedate form 
            flag = false
        }
        // nếu như không có gì sảy ra mặc định flag làn true
        if (flag) {
            // xử lí thêm dữ liệu
            // lấy dữ liệu nhập vào từ ô inp
            let newPost = {
                title: $scope.inputValue.title,
                author: $scope.inputValue.author,
            }
            $http.post(
                apiPost, // đường dẫn link API
                newPost // dữ liệu cần thêm
            ).then(function(response) {
                console.log(response);
            })
        }
    }

    // remove
    $scope.remove = function(id) {
        if (confirm("bạn có muốn xóa không")) {
            $http.delete(`${apiPost}/${id}`).then(function(response) {

            })
        } else {
            alert('xóa thành công');
        }

    }

    // edit update
    $scope.edit = function(id) {
        $http.get(`${apiPost}/${id}`).then(function(response) {
            $scope.inputValue = {
                id: response.data.id,
                title: response.data.title,
                author: response.data.author
            }
            console.log($scope.inputValue);
        })
    }

    $scope.update = function(id) {
        let newUpdate = {
            title: $scope.inputValue.title,
            author: $scope.inputValue.author
        }
        $http.put(`${apiPost}/${id}`, newUpdate).then(function(response) {

        })
    }
}