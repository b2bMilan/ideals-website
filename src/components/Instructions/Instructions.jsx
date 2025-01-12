import React from 'react';

const Instructions = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
      <h1>Instructions</h1>

      {/* Section 1: Registering the User */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Registering the User</h2>
        <p>
          Once registered on the mobile page, you will receive an email within 24 hours to verify your email. 
          A confirmation email with activation will be sent from <a href="mailto:b2bmilan@gmail.com">b2bmilan@gmail.com</a>.
        </p>
      </section>

      {/* Section 2: Request to Delete User Data */}
      <section>
        <h2>Request to Delete User Data</h2>
        <p>
          Users can request to delete their personal data by sending an email with the request. 
          The request email will be verified, and all personal data, including name, email, phone, 
          and location details, will be deleted from the system.
        </p>
        <p>
          We do not retain local deals for more than 3 days. This means the data becomes stale or 
          irrelevant after 3 days. User data will be deleted 3 days after the deletion request.
        </p>
      </section>
    </div>
  );
};

export default Instructions;
