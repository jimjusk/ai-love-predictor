import React from 'react';
import Link from 'next/link';
import { footerLinks, socialLinks } from './data';
import { FooterGroup, SocialLink } from './types';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo 和简介 */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              致力于用AI技术为您找到最适合的伴侣，让每个人都能遇见真爱。
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social: SocialLink) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 链接分组 */}
          {footerLinks.map((group: FooterGroup) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 分隔线和版权信息保持不变 */}
        <div className="border-t border-muted mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Love Predictor. 保留所有权利。
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                隐私政策
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 