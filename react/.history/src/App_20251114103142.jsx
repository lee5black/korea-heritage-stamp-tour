
import './App.css'

const sampleData = [
  { 지역: '공주', 문화재명: '마곡사', 방문여부: 'O', 방문일자: '2025-10-01' },
  { 지역: '논산', 문화재명: '돈암서원', 방문여부: 'O', 방문일자: '2025-10-02' },
  { 지역: '양산', 문화재명: '통도사', 방문여부: '', 방문일자: '' },
  { 지역: '부여', 문화재명: '정림사지', 방문여부: '', 방문일자: '' },
  { 지역: '순천', 문화재명: '송광사', 방문여부: 'O', 방문일자: '2025-10-03' },
]

function App() {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>방문 인증 현황</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 8px #eee' }}>
        <thead style={{ background: '#1976d2', color: 'white' }}>
          <tr>
            <th style={{ padding: 8 }}>지역</th>
            <th style={{ padding: 8 }}>문화재명</th>
            <th style={{ padding: 8 }}>방문 여부</th>
            <th style={{ padding: 8 }}>방문 일자</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row, idx) => (
            <tr key={idx} style={{ background: row.방문여부 === 'O' ? '#e3fcec' : '#fff' }}>
              <td style={{ padding: 8, borderBottom: '1px solid #eee' }}>{row.지역}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #eee' }}>{row.문화재명}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #eee', textAlign: 'center' }}>
                {row.방문여부 === 'O' ? '✅' : ''}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #eee' }}>{row.방문일자}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 24, color: '#666', fontSize: 14 }}>
        <ul>
          <li>✅ : 방문 인증 완료</li>
          <li>초록색 행 : 인증된 문화재</li>
        </ul>
      </div>
    </div>
  )
}

export default App
