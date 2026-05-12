import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Skybridge Aviation Platform</title>
        <meta name="description" content="Airline booking and management platform" />
      </Head>

      <main style={styles.main}>
        <h1>Welcome to Skybridge Aviation Platform</h1>
        <p>A modern airline booking and management platform built with Next.js and Supabase</p>
        
        <div style={styles.features}>
          <div style={styles.card}>
            <h2>✈️ Flight Booking</h2>
            <p>Book flights easily with our intuitive interface</p>
          </div>
          
          <div style={styles.card}>
            <h2>💳 Secure Payments</h2>
            <p>Safe and secure payment processing</p>
          </div>
          
          <div style={styles.card}>
            <h2>👤 Admin Dashboard</h2>
            <p>Manage operations with role-based access</p>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '40px',
    maxWidth: '1200px',
    margin: '40px auto 0'
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
};