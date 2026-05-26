import "./Page.css";

function Page() {
  return (
    <main className="page-shell">
      <section className="account-card">
        <header className="account-header">
          <h2>Account Settings</h2>
        </header>

        <div className="account-body">
          <div className="account-details">
            <div className="profile-section">
              <div className="image-box">
                <img src="/OIP.jpeg" alt="profile" />

                <button
                  className="camera-icon"
                  type="button"
                  aria-label="Change profile photo"
                >
                  <i className="fa-solid fa-camera"></i>
                </button>
              </div>

              <div className="profile-info">
                <h3>Marry Doe</h3>
                <p>Marry@gmail.com</p>
              </div>
            </div>

            <div className="description">
              <p>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
                Magna Aliquyam Erat, Sed Diam
              </p>
            </div>

            <div className="dashed-line" />
          </div>
          <div className="bottom-line" />
        </div>
      </section>
    </main>
  );
}

export default Page;
