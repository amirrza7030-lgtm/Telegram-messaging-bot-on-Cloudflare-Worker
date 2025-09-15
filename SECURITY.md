# Security Policy# 🛡 Security Policy

## 📣 گزارش آسیب‌پذیری‌ها

اگر آسیب‌پذیری امنیتی در این پروژه پیدا کردید، لطفاً آن را به‌صورت محرمانه گزارش دهید:

**📧 ایمیل تماس:** amirrza7030@gmail.com  
**⏱ زمان پاسخ‌دهی:** حداکثر ۷۲ ساعت پس از دریافت گزارش

لطفاً در گزارش خود موارد زیر را درج کنید:
- شرح دقیق آسیب‌پذیری  
- مراحل بازتولید (reproduce)  
- تأثیر احتمالی  
- پیشنهاد رفع (در صورت امکان)

---

## 🔍 محدوده امنیتی پروژه

این پروژه شامل بخش‌های زیر است که باید از نظر امنیتی بررسی شوند:

- Cloudflare Worker: دریافت داده از کاربران و ارسال به API  
- API ارسال ایمیل: ارتباط با Gmail و مدیریت فایل‌ها  
- KV Storage: ذخیره‌سازی داده‌های کاربران و فایل‌ها  
- پنل کنترل: اجرای دستورات از راه دور توسط ادمین

---

## ✅ اقدامات امنیتی فعلی

- استفاده از App Password برای Gmail به‌جای رمز اصلی  
- ذخیره اطلاعات حساس در فایل `.env` خارج از کد اصلی  
- محدودسازی دسترسی به پنل فقط برای ادمین با `chat_id` مشخص  
- بررسی نوع فایل و محدودسازی حجم قبل از ارسال  
- ارسال مستقیم فایل به ایمیل بدون ذخیره‌سازی در سرور  
- محافظت از API با توکن یا رمز در صورت نیاز

---

## 🚫 موارد ممنوع

- ارسال رمز یا توکن در فایل‌های عمومی  
- اجرای دستورات بدون احراز هویت  
- ذخیره‌سازی اطلاعات کاربران بدون رضایت  
- استفاده از رمز اصلی Gmail در کد

---

## 📆 به‌روزرسانی سیاست امنیتی

این فایل ممکن است در آینده با توجه به گسترش پروژه و دریافت بازخورد، به‌روزرسانی شود.

---

© 2025 GitHub – All rights reserved.

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.
