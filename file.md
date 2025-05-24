Tạo CSDL
- 1 bảng user(Họ tên, sdt, ID)
- 1 bảng tàu( ID)// không thay đổi
- 1 bảng tuyến( thời gian, ID)    // không thay đổi
- 1 bảng trạm()                   //lên web lưu lại, không thay đổi
- 1 bảng vé tàu( giá(tính theo trạm), chi tiết vé( 3 trạm or 4 trạm....))       // không thay đổi
- 1 bảng thẻ RFID ( ID thẻ, loại thẻ(ngày, tháng, guest))         // không thay đổi
- 1 bảng vé của user(ID người dùng, ID vé, thời gian mua, date)
- 1 bảng Vé của RFID (ID vé, ID thẻ,thời gian bắt đầu/kết thức, tên trạm bắt đầu/Kết thúc )

Thông tin đặt vé
- 1 người dùng có thể mua nhiều vé tàu, 1 vé tàu chỉ thuộc 1 người dùng(dùng 1 lần đối với vé guest)
- 1 vé chỉ có 1 thẻ RFID, trong 1 khoảng thời gian thì 1 thẻ RFID thuộc 1 vé.

Chức năng cụ thể web
- Đăng nhập
- Tra cứu thông tin người dùng.
- Thông tin nhà ga
- Đặt vé tàu(gửi mã về người dùng)
- Lưu thông tin trạm ( giờ xuất phát, giờ đến)
- lịch trình từng tuyến ( giờ xuất phát, giờ tới ga)
- Lưu trữ thông tin người dùng
- 