document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Ở đây, bạn sẽ thêm logic xử lý đăng nhập
    console.log('Login attempt:', email, password);
    
    // Ví dụ đơn giản:
    if(email === 'test@example.com' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid credentials');
    }
});
