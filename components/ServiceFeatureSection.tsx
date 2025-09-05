'use client';

export default function ServiceFeatureSection() {
  console.log('ServiceFeatureSection is rendering'); // デバッグ用
  
  const features = [
    {
      title: "自分のタイミングで",
      description: "動画講座で24時間自分のタイミングで学習可能"
    },
    {
      title: "作りたいものが作れる",
      description: "サービス開発の実演講習を定期配信"
    },
    {
      title: "サポートも充実",
      description: "環境立ち上げからリリースまでサポート"
    },
    {
      title: "未経験でもOK",
      description: "感覚的な操作で開発できるようになる"
    }
  ];

  return (
    <section style={{ padding: '64px 24px', backgroundColor: '#f0f9ff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* サービス内容見出し - インラインスタイルで確実に表示 */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '16px',
            display: 'block',
            visibility: 'visible'
          }}>
            サービス内容
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            backgroundColor: '#3B82F6', 
            margin: '0 auto' 
          }} />
        </div>

        {/* 4つのカード */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                border: '2px solid #3B82F6',
                borderRadius: '8px',
                padding: '40px 24px 24px 24px',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '48px',
                height: '48px',
                backgroundColor: '#3B82F6',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#2563EB',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#374151',
                fontSize: '14px',
                lineHeight: '1.5',
                textAlign: 'center'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}