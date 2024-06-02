function sendMessage() {
    // Lấy giá trị từ các ô nhập liệu
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tạo đối tượng chứa thông tin tin nhắn
    const contactMessage = {
        name: name,
        gender: gender,
        email: email,
        message: message,
        time: new Date().toLocaleString()
    };

    // Lưu tin nhắn vào lịch sử liên hệ
    addMessageToHistory(contactMessage);

    // Xóa nội dung các ô nhập liệu sau khi gửi
    document.getElementById('contactForm').reset();

    // Gửi email (thực tế cần sử dụng backend để gửi email)
    alert(`Đã gửi tin nhắn đến: ${email}`);
}

function addMessageToHistory(contactMessage) {
    const historyList = document.getElementById('history-list');

    // Tạo một mục mới trong lịch sử liên hệ
    const newHistoryItem = document.createElement('li');
    newHistoryItem.textContent = `Tên: ${contactMessage.name}, Giới tính: ${contactMessage.gender}, Thời gian: ${contactMessage.time}, Email: ${contactMessage.email}, Tin nhắn: ${contactMessage.message}`;
    
    // Thêm mục mới vào danh sách lịch sử
    historyList.appendChild(newHistoryItem);
}