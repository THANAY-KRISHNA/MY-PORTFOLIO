import { ImageResponse } from 'next/og';

export const alt = 'Thanay Krishna C U | Data Science Engineer & Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #090d16 0%, #0d1527 50%, #050810 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(0,0,0,0) 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#38bdf8',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          <span>THANAY KRISHNA C U</span>
          <span>•</span>
          <span>PORTFOLIO</span>
        </div>

        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '68px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1.5px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Thanay Krishna C U
        </div>

        {/* Subtitle / Role */}
        <div
          style={{
            display: 'flex',
            fontSize: '32px',
            fontWeight: 500,
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Data Science Engineer & Developer
        </div>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          {['Data Science', 'Artificial Intelligence', 'IoT Systems', 'Next.js'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                padding: '8px 18px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#e2e8f0',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#64748b',
            fontSize: '18px',
            fontWeight: 500,
          }}
        >
          <span>github.com/THANAY-KRISHNA</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
