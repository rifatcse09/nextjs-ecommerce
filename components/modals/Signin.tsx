import Image from "next/image";
import Link from "next/link";
export default function Signin() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="signinModal"
      tabIndex={-1}
      aria-labelledby="signinModalLabel"
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
                    id="signinModalLabel"
                  >
                    Sign In To Proceed
                  </h6>
                  <div className="rbt-tab rbt-round-shape-tab">
                    {/* Start tabs */}
                    <ul
                      className="nav nav-tabs"
                      id="registerFormTab1"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="rbt-form-tab-id-1"
                          data-bs-toggle="tab"
                          data-bs-target="#rbt-form-tab-pane-1"
                          type="button"
                          role="tab"
                          aria-controls="rbt-form-tab-pane-1"
                          aria-selected="true"
                        >
                          <i className="fa-sharp fa-regular fa-phone" />
                          Phone Number
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="rbt-form-tab-id-2"
                          data-bs-toggle="tab"
                          data-bs-target="#rbt-form-tab-pane-2"
                          type="button"
                          role="tab"
                          aria-controls="rbt-form-tab-pane-2"
                          aria-selected="false"
                        >
                          <i className="fa-sharp fa-regular fa-envelope" />
                          Email
                        </button>
                      </li>
                    </ul>
                    {/* End tabs */}
                    <form>
                      {/* Start tabs content */}
                      <div className="tab-content" id="registerFormTab1Content">
                        <div
                          className="tab-pane fade show active"
                          id="rbt-form-tab-pane-1"
                          role="tabpanel"
                          aria-labelledby="rbt-form-tab-id-1"
                          tabIndex={0}
                        >
                          <div className="rbt-input-field-grp">
                            <label
                              className="rbt-field-label"
                              htmlFor="modal_signin_number"
                            >
                              Your Number
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <input
                              className="rbt-input-field"
                              placeholder="Number"
                              type="text"
                              id="modal_signin_number"
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="rbt-form-tab-pane-2"
                          role="tabpanel"
                          aria-labelledby="rbt-form-tab-id-2"
                          tabIndex={0}
                        >
                          <div className="rbt-input-field-grp">
                            <label
                              className="rbt-field-label"
                              htmlFor="modal_signin_email"
                            >
                              Your Email
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <input
                              className="rbt-input-field"
                              placeholder="Email"
                              type="email"
                              id="modal_signin_email"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End tabs content */}
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 mb--16"
                      >
                        Continue
                      </button>
                      <div className="rbt-check-group">
                        <input
                          id="modal_login_checked1"
                          type="checkbox"
                          name="login"
                        />
                        <label htmlFor="modal_login_checked1">
                          Stay Logged In
                        </label>
                      </div>
                    </form>
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
                    Don't have an account?
                    <button
                      className="rbt-switch-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span>Create an account</span>
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
