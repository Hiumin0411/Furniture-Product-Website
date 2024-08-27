import React, {useState, useEffect, useRef } from "react";
import './LoginSignup.css';

const API_URL = 'http://localhost:3000/users/register';

const LoginSignup = () => {
  const containerRef = useRef(null);
  const signUpButtonRef = useRef(null);
  const signInButtonRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = signUpButtonRef.current;
    const signInButton = signInButtonRef.current;

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

    return () => {
      signUpButton.removeEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.removeEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    };
  }, []);
  const validateInputs = () => {
    for (const key in formData) {
      if (!formData[key].trim()) {
        alert(`Vui lòng nhập đầy đủ ${key}.`);
        return false;
      }
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return false;
    }
    return true;
  };

  const registerUser = async () => {
    if (validateInputs()) {
      const newUser = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        password: formData.password,
        confirmPassword: formData.confirmPassword // Gửi cả trường confirmPassword
      };

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });

        if (response.ok) {
          alert('Tạo tài khoản thành công!');
        } else {
          const errorData = await response.json();
          alert(`Đã xảy ra lỗi khi tạo tài khoản: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Đã xảy ra lỗi khi thực hiện đăng ký.');
      }
    }
  };
  const loginUser = async () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!email || !password) {
      alert('Vui lòng nhập email và mật khẩu.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        alert('Đăng nhập thành công!');
  
        // Lưu thông tin người dùng (ví dụ: lưu vào localStorage)
        localStorage.setItem('user', JSON.stringify(data.user));
  
        // Chuyển hướng đến trang khác sau khi đăng nhập thành công
        window.location.href = '/'; // Điều chỉnh đường dẫn theo nhu cầu của bạn
      } else {
        const errorData = await response.json();
        alert(`Đăng nhập thất bại: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Đã xảy ra lỗi khi thực hiện đăng nhập.');
    }
  };
  
  return (
    
    <div className="login-signup-container" id="container" ref={containerRef}>
    <div className="login-signup-form-container login-signup-sign-up-container">
      <form action="#">
        <h1>Tạo tài khoản</h1>
        <div className="login-signup-social-container">
          <a href="/" className="social">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/" className="social">
            <i className="fa-brands fa-google-plus-g"></i>
          </a>
        </div>
        <span>Đăng ký bằng email</span>
        <input type="text" placeholder="Họ và tên" id="name" value={formData.name} onChange={handleChange} autoComplete="name" />
        <input type="email" placeholder="Email" id="email" value={formData.email} onChange={handleChange} autoComplete="email" />
        <input type="text" placeholder="Địa chỉ" id="address" value={formData.address} onChange={handleChange} autoComplete="address" />
        <input type={showPassword ? "text" : "password"} placeholder="Mật khẩu" id="password" value={formData.password} onChange={handleChange} autoComplete="new-password" />
        <input type={showPassword ? "text" : "password"} placeholder="Xác nhận mật khẩu" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} autoComplete="new-password" />
        <label>
          <input type="checkbox" checked={showPassword} onChange={toggleShowPassword} /> Hiển thị mật khẩu
        </label>
        <button type="button" onClick={registerUser} className="login-signup-button">Đăng ký</button>
      </form>
    </div>
    <div className="login-signup-form-container login-signup-sign-in-container">
      <form action="#">
        <h1>Đăng nhập vào tài khoản</h1>
        <div className="login-signup-social-container">
          <a href="/" className="social">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/" className="social">
            <i className="fa-brands fa-google-plus-g"></i>
          </a>
        </div>
        <span>Bắt đầu đăng nhập</span>
        <div id="errorMessage"></div>
        <input type="text" id="loginEmail" placeholder="Nhập Email" />
        <input type="password" id="loginPassword" placeholder="Nhập mật khẩu" />
        <a href="./forgot-password.html">Quên mật khẩu ?</a>
        <button type="button" onClick={loginUser} id="loginButton" className="login-signup-button">Đăng nhập</button>
      </form>
    </div>
    <div className="login-signup-overlay-container">
      <div className="login-signup-overlay">
        <div className="login-signup-overlay-panel login-signup-overlay-left">
          <h1>Welcome Back!</h1>
          <p>Để tiếp tục, hãy đăng nhập vào tài khoản của bạn</p>
          <button className="login-signup-button ghost" id="signin" ref={signInButtonRef}>Đăng nhập</button>
        </div>
        <div className="login-signup-overlay-panel login-signup-overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Xin chào, bạn chưa có tài khoản sao?</p>
          <p>Hãy đăng ký tài khoản để tiếp tục mua hàng!</p>
          <button className="login-signup-button ghost" id="signup" ref={signUpButtonRef}>Đăng ký</button>
        </div>
      </div>
    </div>
  </div>
  
  );
};



export default LoginSignup;
