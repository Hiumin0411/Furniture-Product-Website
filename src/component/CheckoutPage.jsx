import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalAmount } from "../features/cart/cartSlice";
const Checkout =() =>{
  const [isAccountCreationVisible, setAccountCreationVisible] = useState(false);

  const handleAccountCreationToggle = () => {
    setAccountCreationVisible(!isAccountCreationVisible);
  };
  const [isShipDifferentAddressVisible, setShipDifferentAddressVisible] = useState(false);

  const handleShipDifferentAddressToggle = () => {
    setShipDifferentAddressVisible(!isShipDifferentAddressVisible);
  };
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);


     return (
      
         <body style={{ backgroundColor: '#EFF2F1' }} >
    <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
             Về chúng tôi{' '}
              <span clsas="d-block">
                Design Studio
              </span>
            </h1>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
            <Link className="btn btn-secondary me-2" to="/shop">
  Shop now
</Link>

              <Link
                className="btn btn-white-outline"
                href="/"
              >
                Explore
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img
              className="img-fluid"
              src="/img/images/couch.png"
              alt="Couch icon" />
          </div>
        </div>
      </div>
    </div>
    </div>
  


    <div className="untree_co-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="border p-4 rounded" role="alert">
          Khách hàng đã quay lại? <Link href="/">Nhấn vào đây</Link> để đăng nhập
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black">Thông tin thanh toán</h2>
        <div className="p-3 p-lg-5 border bg-white">
          <div className="form-group">
            <label htmlFor="c_country" className="text-black">Tỉnh/Thành phố <span className="text-danger">*</span></label>
            <select id="c_country" className="form-control">
              <option value="1">Chọn tỉnh/thành phố</option>
              <option value="2">Tp.Hồ Chí Minh</option>
              <option value="3">Hà Nội</option>
              <option value="4">Cần Thơ</option>
              <option value="5">Đà Nẵng</option>
              <option value="6">Thừa Thiên Huế</option>
              <option value="7">Bình Dương</option>
              <option value="8">Đồng Nai</option>
              <option value="9">Vũng Tàu</option>
            </select>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="c_fname" className="text-black">Họ <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_fname" name="c_fname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="c_lname" className="text-black">Tên <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_lname" name="c_lname" />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <label htmlFor="c_companyname" className="text-black">Tên doanh nghiệp (nếu có)</label>
              <input type="text" className="form-control" id="c_companyname" name="c_companyname" />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <label htmlFor="c_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Địa chỉ" />
            </div>
          </div>

          <div className="form-group mt-3">
            <input type="text" className="form-control" placeholder="Căn hộ, phòng, v.v. (tuỳ chọn)" />
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="c_state_country" className="text-black">Quận/Huyện <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_state_country" name="c_state_country" />
            </div>
            <div className="col-md-6">
              <label htmlFor="c_postal_zip" className="text-black">Mã bưu điện <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip" />
            </div>
          </div>

          <div className="form-group row mb-5">
            <div className="col-md-6">
              <label htmlFor="c_email_address" className="text-black">Địa chỉ Email <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_email_address" name="c_email_address" />
            </div>
            <div className="col-md-6">
              <label htmlFor="c_phone" className="text-black">Số điện thoại <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Số điện thoại" />
            </div>
          </div>
       
          <div className="form-group">
                <label htmlFor="c_create_account" className="text-black">
                  <input
                    type="checkbox"
                    value="1"
                    id="c_create_account"
                    onChange={handleAccountCreationToggle}
                  /> Tạo tài khoản?
                </label>
                <div
                  id="create_an_account"
                  style={{ display: isAccountCreationVisible ? 'block' : 'none' }}
                >
                  <div className="py-2 mb-4">
                    <p className="mb-3">
                      Tạo tài khoản bằng cách nhập thông tin bên dưới. Nếu bạn là khách hàng quay lại, vui lòng đăng nhập ở đầu trang.
                    </p>
                    <div className="form-group">
                      <label htmlFor="c_account_password" className="text-black">
                        Mật khẩu tài khoản
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="c_account_password"
                        name="c_account_password"
                      />
                    </div>
                  </div>
                </div>
              </div>


             <div className="form-group">
                <label htmlFor="c_ship_different_address" className="text-black">
                  <input
                    type="checkbox"
                    value="1"
                    id="c_ship_different_address"
                    onChange={handleShipDifferentAddressToggle}
                  /> Giao hàng đến địa chỉ khác?
                </label>
                <div
                  id="ship_different_address"
                  style={{ display: isShipDifferentAddressVisible ? 'block' : 'none' }}
                >
                  <div className="py-2">
                    <div className="form-group">
                      <label htmlFor="c_diff_country" className="text-black">Quốc gia <span className="text-danger">*</span></label>
                      <select id="c_diff_country" className="form-control">
                        <option value="1">Chọn quốc gia</option>
                        <option value="2">Bangladesh</option>
                        <option value="3">Algeria</option>
                        <option value="4">Afghanistan</option>
                        <option value="5">Ghana</option>
                        <option value="6">Albania</option>
                        <option value="7">Bahrain</option>
                        <option value="8">Colombia</option>
                        <option value="9">Dominican Republic</option>
                      </select>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="c_diff_fname" className="text-black">Họ <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="c_diff_fname" name="c_diff_fname" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="c_diff_lname" className="text-black">Tên <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="c_diff_lname" name="c_diff_lname" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <label htmlFor="c_diff_companyname" className="text-black">Tên doanh nghiệp</label>
                        <input type="text" className="form-control" id="c_diff_companyname" name="c_diff_companyname" />
                      </div>
                    </div>

                    <div className="form-group row mb-3">
                      <div className="col-md-12">
                        <label htmlFor="c_diff_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="c_diff_address" name="c_diff_address" placeholder="Địa chỉ" />
                      </div>
                    </div>

                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Căn hộ, phòng, v.v. (tuỳ chọn)" />
                    </div>

                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="c_diff_state_country" className="text-black">Quận/Huyện <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="c_diff_state_country" name="c_diff_state_country" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="c_diff_postal_zip" className="text-black">Mã bưu điện <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="c_diff_postal_zip" name="c_diff_postal_zip" />
                      </div>
                    </div>

                    <div className="form-group row mb-5">
                      <div className="col-md-6">
                        <label htmlFor="c_diff_email_address" className="text-black">Địa chỉ Email <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="c_diff_email_address" name="c_diff_email_address" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="c_diff_phone" className="text-black">Số điện thoại <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="c_diff_phone" name="c_diff_phone" placeholder="Số điện thoại" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          <div className="form-group">
            <label htmlFor="c_order_notes" className="text-black">Ghi chú đơn hàng</label>
            <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Ghi chú về đơn hàng của bạn, ví dụ: ghi chú đặc biệt khi giao hàng."></textarea>
          </div>

        </div>
      </div>
      <div className="col-md-6">

        <div className="row mb-5">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Mã giảm giá</h2>
            <div className="p-3 p-lg-5 border bg-white">

              <label htmlFor="c_code" className="text-black mb-3">Nhập mã giảm giá của bạn nếu có</label>
              <div className="input-group w-75">
                <input type="text" className="form-control" id="c_code" placeholder="Mã giảm giá" aria-label="Mã giảm giá" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary btn-sm" type="button" id="button-addon2">Áp dụng</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="h3 mb-3 text-black">Đơn hàng của bạn</h2>
          <div className="p-3 p-lg-5 border bg-white">
            <table className="table site-block-order-table mb-5">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Tổng cộng</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title} <strong className="mx-2">x</strong> {item.quantity}</td>
                    <td>{(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                  </tr>
                ))}
                <tr>
                  <td className="text-black font-weight-bold"><strong>Tổng tiền giỏ hàng</strong></td>
                  <td className="text-black">{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                </tr>
                <tr>
                  <td className="text-black font-weight-bold"><strong>Tổng tiền đơn hàng</strong></td>
                  <td className="text-black font-weight-bold"><strong>{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong></td>
                </tr>
              </tbody>
            </table>

            <div className="border mb-3">
              <h3 className="h6 mb-0">
                <a className="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">
                  Chuyển khoản ngân hàng
                </a>
              </h3>
              <div className="collapse" id="collapsebank">
                <div className="py-2 px-4">
                  <p className="mb-0">Thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã Đơn Hàng của bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ không được vận chuyển cho đến khi tiền đã được chuyển vào tài khoản của chúng tôi.</p>
                </div>
              </div>
            </div>

            <div className="border mb-3">
              <h3 className="h6 mb-0">
                <a className="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">
                  Thanh toán bằng séc
                </a>
              </h3>
              <div className="collapse" id="collapsecheque">
                <div className="py-2 px-4">
                  <p className="mb-0">Vui lòng gửi séc của bạn đến Tên cửa hàng, Địa chỉ cửa hàng, Thành phố cửa hàng, Bang / Tiểu bang cửa hàng, Mã bưu điện cửa hàng.</p>
                </div>
              </div>
            </div>

            <div className="border mb-5">
              <h3 className="h6 mb-0">
                <a className="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">
                  Paypal
                </a>
              </h3>
              <div className="collapse" id="collapsepaypal">
                <div className="py-2 px-4">
                  <p className="mb-0">Thanh toán qua PayPal; bạn có thể thanh toán bằng thẻ tín dụng nếu bạn không có tài khoản PayPal.</p>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-lg btn-block">Đặt hàng</button>
            </div>

          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
</div>

  </body>
      
     )
}
export default Checkout;