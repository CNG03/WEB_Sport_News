
var xem_them_btn = document.getElementById("xem-them-btn");
var xem_them_div = document.getElementById("xem_them_div");
        xem_them_btn.addEventListener("click", function() {
            xem_them_btn.style.display = "none";
            xem_them_div.style.display = "block";
        });
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const tabs = $$('.tab-item');
        const panes = $$('.tab-pane');
        
        // Hàm hiển thị nội dung của tab được chọn
        function showPane(index) {
            // Ẩn tất cả các tab-panes
            panes.forEach((pane) => {
                pane.style.display = 'none';
            });
        
            // Hiển thị tab-pane tương ứng với tab được chọn
            panes[index].style.display = 'block';
        }
        
        // Bắt sự kiện khi một tab được click
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Hiển thị tab được chọn
                showPane(index);
        
                // Loại bỏ lớp active từ tất cả các tabs
                tabs.forEach((t) => {
                    t.classList.remove('active');
                });
        
                // Thêm lớp active vào tab được chọn
                tab.classList.add('active');
            });
        });
        
        // Hiển thị tab đầu tiên khi trang được tải
        showPane(0);
        tabs[0].classList.add('active');
        