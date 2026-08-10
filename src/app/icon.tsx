import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050505',
          border: '1px solid #1a1a1a',
          borderRadius: '6px',
          fontSize: 14,
          fontWeight: 900,
          fontFamily: 'system-ui, sans-serif',
          color: '#FFFFFF',
          letterSpacing: '-0.5px'
        }}
      >
        VK<span style={{ color: '#3b82f6' }}>.</span>
      </div>
    ),
    { ...size }
  );
}
