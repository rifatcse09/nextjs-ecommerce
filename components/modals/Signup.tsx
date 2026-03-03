import Image from "next/image";
import Link from "next/link";
export default function Signup() {
  return (
    <div
      className="rbt-default-modal has-rbt-top-folder-shape modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog rbt-register-form-modal modal-dialog-centered">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-login-form rbt-bg-color-white rbt-content-trs-portion">
              <div className="rbt-login-form-inner">
                <div className="rbt-login-form-top">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                  <h6
                    className="rbt-title rbt-text-bold mb--16"
                    id="signupModalLabel"
                  >
                    Create an Account
                  </h6>
                  <p className="description">I want grocery delivery for my:</p>
                  <ul className="rbt-signup-radio-list">
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-1"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-1">
                        <span className="rbt-lable-text">Home</span>
                      </label>
                    </li>
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-2"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-2">
                        <span className="rbt-lable-text">Office</span>
                      </label>
                    </li>
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-3"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-3">
                        <span className="rbt-lable-text">Business</span>
                      </label>
                    </li>
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-4"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-4">
                        <span className="rbt-lable-text">Others</span>
                      </label>
                    </li>
                  </ul>
                  <div className="rbt-tab rbt-round-shape-tab">
                    {/* Start tabs */}
                    <ul
                      className="nav nav-tabs"
                      id="modal_signinTab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="rbt-form-tab-id-3"
                          data-bs-toggle="tab"
                          data-bs-target="#rbt-form-tab-pane-3"
                          type="button"
                          role="tab"
                          aria-controls="rbt-form-tab-pane-3"
                          aria-selected="true"
                        >
                          <i className="fa-sharp fa-regular fa-phone" />
                          Phone Number
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="rbt-form-tab-id-4"
                          data-bs-toggle="tab"
                          data-bs-target="#rbt-form-tab-pane-4"
                          type="button"
                          role="tab"
                          aria-controls="rbt-form-tab-pane-4"
                          aria-selected="false"
                        >
                          <i className="fa-sharp fa-regular fa-envelope" />
                          Email
                        </button>
                      </li>
                    </ul>
                    {/* End tabs */}
                    {/* Start tabs content */}
                    <form>
                      <div className="tab-content" id="modal_signinTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="rbt-form-tab-pane-3"
                          role="tabpanel"
                          aria-labelledby="rbt-form-tab-id-3"
                          tabIndex={0}
                        >
                          <div className="rbt-input-field-grp">
                            <label
                              className="rbt-field-label"
                              htmlFor="modal_register_number"
                            >
                              Your Number
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <input
                              className="rbt-input-field"
                              placeholder="Number"
                              type="text"
                              id="modal_register_number"
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="rbt-form-tab-pane-4"
                          role="tabpanel"
                          aria-labelledby="rbt-form-tab-id-4"
                          tabIndex={0}
                        >
                          <div className="rbt-input-field-grp">
                            <label
                              className="rbt-field-label"
                              htmlFor="modal_register_email"
                            >
                              Your Email
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <input
                              className="rbt-input-field"
                              placeholder="Email"
                              type="email"
                              id="modal_register_email"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 mb--16"
                      >
                        Continue
                      </button>
                      <div className="rbt-check-group">
                        <input
                          id="login_checked2"
                          type="checkbox"
                          name="login"
                        />
                        <label htmlFor="login_checked2">Stay Logged In</label>
                      </div>
                    </form>
                    {/* End tabs content */}
                  </div>
                  {/* Separator */}
                  <div className="d-flex align-items-center justify-content-center mb--24 mt--24">
                    <hr className="rbt-separator rbt-bg-color-gray-light mb--0" />
                    <span className="pl--8 pr--8 b4 rbt-text-medium">OR</span>
                    <hr className="rbt-separator rbt-bg-color-gray-light mb--0" />
                  </div>
                  {/* Start social login button */}
                  <button
                    type="submit"
                    className="rbt-btn rbt-btn-border rbt-social-login-btn d-block w-100 mb--16 rbt-social-login-btn"
                  >
                    <Image
                      className="icon"
                      alt="Icon"
                      src="/assets/images/icons/fb-icon.webp"
                      width={37}
                      height={36}
                    />
                    Continue with Facebook
                  </button>
                  <button
                    type="submit"
                    className="rbt-btn rbt-btn-border rbt-social-login-btn d-block w-100 rbt-social-login-btn"
                  >
                    <Image
                      className="icon"
                      alt="Icon"
                      src="/assets/images/icons/google-icon.webp"
                      width={36}
                      height={36}
                    />
                    Continue with Google
                  </button>
                  {/* End social login button */}
                  <div className="rbt-login-system-switch rbt-link-hover">
                    Already a customer?
                    <button
                      className="rbt-switch-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#signinModal"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span>Sign In</span>
                    </button>
                  </div>
                </div>
                {/* Start slider */}
                <div className="rbt-login-form-bottom rbt-swiper-container-pagination position-relative">
                  <div className="swiper rbt-log-slide-activation pb--40">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="rbt-client-review">
                          <ul className="rbt-rating-icon-list d-flex justify-content-center">
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                          </ul>
                          <p className="rbt-review-text mt--8 mb--12">
                            "The shirt fits great, very good quality of the
                            material. Training in it is pure pleasure."
                          </p>
                          <div className="d-flex flex-wrap justify-content-center rbt-gap--8">
                            <h6 className="mb--0">Szilágyi Erik</h6>
                            <div className="rbt-verified-badge badge-rounded">
                              <i className="fa-sharp fa-solid fa-shield-check" />
                              Verified Reviewer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-client-review">
                          <ul className="rbt-rating-icon-list d-flex justify-content-center">
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                          </ul>
                          <p className="rbt-review-text mt--8 mb--12">
                            "The shirt fits great, very good quality of the
                            material. Training in it is pure pleasure."
                          </p>
                          <div className="d-flex flex-wrap justify-content-center rbt-gap--8">
                            <h6 className="mb--0">Szilágyi Erik</h6>
                            <div className="rbt-verified-badge badge-rounded">
                              <i className="fa-sharp fa-solid fa-shield-check" />
                              Verified Reviewer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-client-review">
                          <ul className="rbt-rating-icon-list d-flex justify-content-center">
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                          </ul>
                          <p className="rbt-review-text mt--8 mb--12">
                            "The shirt fits great, very good quality of the
                            material. Training in it is pure pleasure."
                          </p>
                          <div className="d-flex flex-wrap justify-content-center rbt-gap--8">
                            <h6 className="mb--0">Szilágyi Erik</h6>
                            <div className="rbt-verified-badge badge-rounded">
                              <i className="fa-sharp fa-solid fa-shield-check" />
                              Verified Reviewer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-client-review">
                          <ul className="rbt-rating-icon-list d-flex justify-content-center">
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </li>
                          </ul>
                          <p className="rbt-review-text mt--8 mb--12">
                            "The shirt fits great, very good quality of the
                            material. Training in it is pure pleasure."
                          </p>
                          <div className="d-flex flex-wrap justify-content-center rbt-gap--8">
                            <h6 className="mb--0">Szilágyi Erik</h6>
                            <div className="rbt-verified-badge badge-rounded">
                              <i className="fa-sharp fa-solid fa-shield-check" />
                              Verified Reviewer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination rbt-swiper-progress rbt-swiper-pagination-dot-extend" />
                  </div>
                </div>
                {/* End slider */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
