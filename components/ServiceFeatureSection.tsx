'use client';

export default function ServiceFeatureSection() {
  console.log('ServiceFeatureSection is rendering'); // デバッグ用
  
  const features = [
    {
      title: "動画コンテンツ配信",
      description: "ツールのセットアップから作りたいものの仕様決めの方法まで、自分のレベルに合わせた動画で、24時間学習可能。勉強の効率化を図りたい方や、本や活字ではなかなか頭に入ってこない人は動画を見ながら、ハンズオン形式で実際に手を動かして、楽しく学習が可能！"
    },
    {
      title: "Q&Aサポート",
      description: "コメント欄でのQ&A"
    },
    {
      title: "セットアップサポート",
      description: "ツールのセットアップ方法"
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

        {/* 3つのカード - PC用はグリッド、モバイル用はスワイプ可能 */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                border: '2px solid #3B82F6',
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
                lineHeight: '1.6',
                textAlign: 'left'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* モバイル用スワイプ可能なカード */}
        <div 
          className="md:hidden"
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div style={{
            display: 'flex',
            gap: '16px',
            paddingBottom: '10px'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: '80vw',
                  maxWidth: '320px',
                  backgroundColor: 'white',
                  border: '2px solid #3B82F6',
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
                  lineHeight: '1.6',
                  textAlign: 'left'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}