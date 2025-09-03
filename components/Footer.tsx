'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, Array<{ name: string; href: string; external?: boolean }>> = {
    サービス: [
      { name: '料金プラン', href: '#pricing' },
      { name: 'よくある質問', href: '#faq' },
    ],
    会社情報: [
      { name: '運営会社', href: 'https://www.landbridge.co.jp/', external: true },
      { name: 'プライバシーポリシー', href: 'https://www.landbridge.co.jp/privacy', external: true },
      { name: '利用規約', href: 'https://www.landbridge.co.jp/terms', external: true },
    ],
    サポート: [
      { name: 'お問い合わせ', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 font-noto">
                誰でもエンジニア
              </h3>
              <p className="text-secondary-300 text-sm mb-6 leading-relaxed font-noto">
                超実践型AIコーディングを学び、
                <br />
                次世代のエンジニアを目指そう
              </p>
              
              {/* LINE CTA Button */}
              <motion.a
                href="https://lin.ee/TLbJUF7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
                LINE登録で詳細を確認
              </motion.a>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-4 font-noto">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-300 hover:text-white text-sm transition-colors duration-200 font-noto"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-secondary-300 hover:text-white text-sm transition-colors duration-200 font-noto"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          className="mt-12 pt-8 border-t border-secondary-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-3 text-secondary-400">
            <span className="text-xs font-noto">お支払い方法:</span>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 border border-secondary-600 rounded">VISA</span>
              <span className="text-xs px-2 py-1 border border-secondary-600 rounded">Master</span>
              <span className="text-xs px-2 py-1 border border-secondary-600 rounded">JCB</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary-950 py-4">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-secondary-400 text-xs sm:text-sm">
            <p className="font-noto">
              © {currentYear} 誰でもエンジニア. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}