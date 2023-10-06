
var checkbox = document.getElementById("menu");
        var myDiv = document.querySelector(".show_menu_full");

        // Kiểm tra trạng thái của checkbox khi trang được tải lại
        window.addEventListener("load", function() {
            var isChecked = localStorage.getItem("menuChecked");
            if (isChecked === "true") {
                checkbox.checked = true;
                myDiv.style.display = "block";
            } else {
                checkbox.checked = false;
                myDiv.style.display = "none";
            }
        });

        // Lắng nghe sự kiện change của checkbox
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                myDiv.style.display = "block";
                localStorage.setItem("menuChecked", "true");
            } else {
                myDiv.style.display = "none";
                localStorage.setItem("menuChecked", "false");
            }
        });

function searchClick() {
    var boxSearch = document.querySelector('.box_search');
    const icon = document.getElementById("exit_search");
    if (boxSearch.style.display === 'none' || boxSearch.style.display === '') {
        boxSearch.style.display = 'block';
        icon.className = 'fa-solid fa-x'; 
    } else {
        boxSearch.style.display = 'none';
        icon.className = 'fa-solid fa-magnifying-glass fa-rotate-90';
    }
};
window.onscroll = function() {
    myFunction();
  };
  
  var navbar = document.getElementById("navbar"); // Lấy phần tử bằng id
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.id = "sticky"; // Thay đổi id của phần tử thành "sticky"
    } else {
      navbar.id = ""; // Xóa id nếu không sticky
    }
  };
const lich_thi_dau = document.getElementById('lich_thi_dau');
const ket_qua_bong_da = document.getElementById('ket_qua_bong_da');
const list_match_schedule = document.getElementById('list_match_schedule');
const list_match_result = document.getElementById('list_match_result');
lich_thi_dau.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn chuyển hướng khi người dùng nhấn vào liên kết
    if (lich_thi_dau.classList.contains('active')) {

      } else {
        lich_thi_dau.classList.add('active');
      }
    ket_qua_bong_da.classList.remove('active');
    list_match_schedule.style.display = 'block'; // Hiển thị khối khác
    list_match_result.style.display = 'none'; // Ẩn khối hiện tại
});
ket_qua_bong_da.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn chuyển hướng khi người dùng nhấn vào liên kết
    lich_thi_dau.classList.remove('active');
    ket_qua_bong_da.classList.add('active');
    list_match_schedule.style.display = 'none'; // Hiển thị khối khác
    list_match_result.style.display = 'block'; // Ẩn khối hiện tại
});

  