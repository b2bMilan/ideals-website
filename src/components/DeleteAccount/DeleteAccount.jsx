import React from 'react';

const DeleteAccount = () => {
  const subheadingStyle = {
    marginTop: '30px',
    color: '#34495e'
  };

  const linkStyle = {
    color: '#2980b9',
    textDecoration: 'none'
  };

  const codeStyle = {
    backgroundColor: '#eee',
    padding: '2px 4px',
    borderRadius: '4px',
    fontFamily: 'monospace'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
      <h1>Delete Your Account and Personal Data</h1>
      <p>
        We value your privacy. If you no longer wish to use the iDeals app, you may request deletion of your account and any personal data we have collected.
      </p>

      <h3>How to Delete Your Account</h3>
      <ul>
        <li>
          <strong>From within the app:</strong> Open the app, go to <em>Accounts</em> &gt; <em>Delete Account</em> and follow the steps.
        </li>
        <li>
          <strong>Or by email:</strong> Send an email to{' '}
          <a href="mailto:b2bmilan@gmail.com" style={linkStyle}>
            b2bmilan@gmail.com
          </a>{' '}
          with the subject line: <code style={codeStyle}>Delete My Account</code>.
        </li>
      </ul>

      <h3>What Happens Next?</h3>
      <p>
        Once we receive your request, we will verify it and delete your account and data within 7 business days.
      </p>

      <h3 style={subheadingStyle}>Need Help?</h3>
      <p>
        Feel free to contact our support team at{' '}
        <a href="mailto:b2bmilan@gmail.com" style={linkStyle}>
          b2bmilan@gmail.com
        </a>.
      </p>

      <p>
        <em>Last updated: June 2025</em>
      </p>
    </div>
  );
};

export default DeleteAccount;
