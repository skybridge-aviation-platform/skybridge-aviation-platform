'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function SupabaseTest() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking...')
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test connection by querying a simple table
        const { data, error } = await supabase.from('information_schema.tables').select('*').limit(1)
        
        if (error) {
          setConnectionStatus('❌ Connection Failed')
          setError(error.message)
        } else {
          setConnectionStatus('✅ Connected to Supabase!')
          setData(data)
        }
      } catch (err: any) {
        setConnectionStatus('❌ Error Testing Connection')
        setError(err.message)
      }
    }

    testConnection()
  }, [])

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧭 Skybridge Aviation - Supabase Connection Test</h1>
      
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>
          {connectionStatus}
        </h2>
        
        <p><strong>Project URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
        
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {data && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            <strong>✅ Database connection verified!</strong>
          </div>
        )}
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
        <h3>Next Steps:</h3>
        <ul>
          <li>Create tables in your Supabase dashboard</li>
          <li>Update your app/page.tsx to use Supabase data</li>
          <li>Add more routes and API endpoints</li>
          <li>Deploy to Vercel with environment variables set</li>
        </ul>
      </div>
    </div>
  )
}
