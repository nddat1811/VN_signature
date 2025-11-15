# 🇻🇳 VN Signature - Danh Lam Thắng Cảnh Việt Nam

Ứng dụng web giới thiệu các địa danh nổi tiếng của Việt Nam, được xây dựng với Next.js 16, React 19 và TypeScript. Dự án tập trung vào việc khám phá và giới thiệu những danh lam thắng cảnh đặc sắc của Thành phố Hồ Chí Minh với giao diện hiện đại, hỗ trợ đa ngôn ngữ.

## ✨ Tính năng

- 🌍 **Đa ngôn ngữ**: Hỗ trợ 3 ngôn ngữ (Tiếng Việt, Tiếng Anh, Tiếng Trung)
- 🖼️ **Gallery hình ảnh**: Trình bày đẹp mắt với carousel và modal xem ảnh toàn màn hình
- 🌓 **Dark/Light Mode**: Hỗ trợ chuyển đổi theme sáng/tối
- 📱 **Responsive Design**: Tối ưu hóa cho mọi thiết bị (desktop, tablet, mobile)
- ⚡ **Performance**: Xây dựng với Next.js 16 với App Router và Server Components
- 🎨 **Modern UI**: Sử dụng shadcn/ui và Radix UI components
- 🔍 **Image Modal**: Xem ảnh chi tiết với điều hướng bằng phím mũi tên

## 🏗️ Công nghệ sử dụng

### Core Framework
- **Next.js 16.0.3** - React framework với App Router
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **PostCSS** - CSS processing

### UI Components
- **shadcn/ui** - High-quality component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class utilities

### Forms & Validation
- **React Hook Form 7.66.0** - Performant form library
- **Zod 3.25.76** - Schema validation
- **@hookform/resolvers** - React Hook Form resolvers

### Additional Libraries
- **next-themes** - Theme switching
- **date-fns 4.1.0** - Date utilities
- **recharts 2.15.4** - Chart library
- **sonner** - Toast notifications
- **vaul** - Drawer component
- **cmdk** - Command menu
- **embla-carousel-react** - Carousel component

### Development Tools
- **ESLint** - Code linting
- **Autoprefixer** - CSS vendor prefixing

## 📁 Cấu trúc thư mục

```
VN_signature/
├── app/                      # Next.js App Router
│   ├── landmarks/
│   │   └── [id]/            # Dynamic route cho chi tiết địa danh
│   │       └── page.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Trang chủ
│   └── globals.css          # Global styles
├── components/               # React components
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx           # Header component
│   ├── landmark-card.tsx    # Card hiển thị địa danh
│   ├── landmark-list-card.tsx
│   ├── image-modal.tsx      # Modal xem ảnh
│   ├── language-switcher.tsx
│   └── theme-provider.tsx
├── lib/                     # Utility functions
│   ├── translations.ts      # Đa ngôn ngữ
│   └── utils.ts             # Helper functions
├── hooks/                   # Custom React hooks
├── public/                  # Static assets (images, icons)
├── styles/                  # Additional styles
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── pnpm-lock.yaml
```

## 🚀 Cài đặt và chạy

### Yêu cầu
- Node.js >= 20.9.0
- pnpm (recommended) hoặc npm/yarn

### Cài đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd VN_signature
```

2. **Cài đặt dependencies**
```bash
pnpm install
# hoặc
npm install
```

3. **Chạy development server**
```bash
pnpm dev
# hoặc
npm run dev
```

4. **Mở trình duyệt**
```
http://localhost:3000
```

### Scripts khác

```bash
# Build cho production
pnpm build

# Chạy production server
pnpm start

# Lint code
pnpm lint
```

## 🌐 Các ngôn ngữ được hỗ trợ

- 🇻🇳 **Tiếng Việt (vi)** - Ngôn ngữ mặc định
- 🇬🇧 **English (en)** - English language
- 🇨🇳 **中文 (zh)** - Chinese language

Ngôn ngữ có thể được chuyển đổi thông qua:
- URL parameter: `/?lang=en` hoặc `/landmarks/0?lang=vi`
- Language switcher trong header

## 📍 Các địa danh được giới thiệu

Hiện tại, ứng dụng tập trung vào các địa danh nổi tiếng tại **Thành phố Hồ Chí Minh**:

1. **Nhà thờ Đức Bà** (Saigon Notre-Dame Cathedral)
2. **Bảo tàng Mỹ thuật** (Fine Arts Museum)
3. **Dinh Độc Lập** (Reunification Palace)
4. **Bảo tàng Chứng Tích Chiến Tranh** (War Remnants Museum)
5. ... (và nhiều địa danh khác)

Mỗi địa danh bao gồm:
- Tên địa danh (tiếng Việt và tiếng Anh)
- Địa chỉ cụ thể
- Mô tả chi tiết
- Bộ sưu tập hình ảnh

## 🎨 Customization

### Thêm địa danh mới

Chỉnh sửa file `lib/translations.ts` để thêm địa danh mới:

```typescript
{
  name: 'Tên địa danh',
  nameEnglish: 'English Name',
  location: 'Địa chỉ',
  description: 'Mô tả ngắn',
  paragraphs: ['Đoạn văn 1', 'Đoạn văn 2'],
  image: '/path-to-main-image.jpg',
  images: ['/img1.jpg', '/img2.jpg']
}
```

### Thay đổi theme

Theme được quản lý bởi `next-themes`. Có thể tùy chỉnh trong:
- `components/theme-provider.tsx`
- `app/globals.css` (CSS variables)

### Thêm ngôn ngữ mới

Thêm translation mới vào `lib/translations.ts`:

```typescript
const translations: Record<Language, Translations> = {
  // ... existing languages
  newLang: {
    title: 'Title in new language',
    subtitle: 'Subtitle...',
    // ... rest of translations
  }
}
```

## 📦 Build & Deploy

### Build cho production

```bash
pnpm build
```

Output sẽ được tạo trong thư mục `.next/`.

### Deploy lên Netlify

Dự án đã được cấu hình sẵn để deploy lên Netlify với file `netlify.toml`.

#### Cách 1: Deploy qua Netlify UI

1. **Cài đặt Netlify plugin (nếu chưa có)**
   
   Thêm vào `package.json` trong `devDependencies`:
   ```bash
   pnpm add -D @netlify/plugin-nextjs
   ```

2. **Push code lên GitHub**

3. **Truy cập [Netlify](https://app.netlify.com/)**

4. **Import project từ GitHub**
   - Chọn "Add new site" > "Import an existing project"
   - Chọn repository của bạn
   - Netlify sẽ tự động detect cấu hình từ `netlify.toml`

5. **Kiểm tra Build Settings** (tự động từ `netlify.toml`):
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Node version: `20`

6. **Deploy!**

#### Cách 2: Deploy qua Netlify CLI

1. **Cài đặt Netlify CLI**
   ```bash
   pnpm add -g netlify-cli
   ```

2. **Login vào Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

#### ⚠️ Lưu ý quan trọng khi deploy lên Netlify

1. **Đảm bảo có file `netlify.toml`** trong root của project (đã có sẵn)
2. **Cài đặt plugin Netlify**:
   ```bash
   pnpm add -D @netlify/plugin-nextjs
   ```
3. **Kiểm tra Build Command**: Phải là `pnpm build` hoặc `npm run build`
4. **Kiểm tra Publish Directory**: Phải là `.next`
5. **Node Version**: Netlify cần Node 18+ (đã cấu hình trong `netlify.toml`)

#### 🐛 Xử lý lỗi 404 trên Netlify

Nếu gặp lỗi "Page not found" sau khi deploy:

1. **Kiểm tra file `netlify.toml`** có đúng cấu hình redirect không
2. **Đảm bảo plugin `@netlify/plugin-nextjs` đã được cài đặt**
3. **Kiểm tra build logs** trên Netlify Dashboard xem có lỗi gì không
4. **Clear cache và rebuild**:
   - Vào Netlify Dashboard > Site settings > Build & deploy > Clear cache
   - Trigger một deploy mới

### Deploy lên Vercel

Dự án cũng có thể deploy lên Vercel (dễ dàng hơn cho Next.js):

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động detect Next.js và cấu hình

Hoặc sử dụng Vercel CLI:

```bash
pnpm add -g vercel
vercel
```

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này là public project. Mọi quyền được bảo lưu.

## 👨‍💻 Tác giả

Phát triển bởi [Your Name]

## 🙏 Lời cảm ơn

- Next.js team cho framework tuyệt vời
- shadcn cho component library
- Cộng đồng open source

---

**Lưu ý**: Đây là dự án phi thương mại, tập trung vào việc giới thiệu văn hóa và danh lam thắng cảnh Việt Nam đến bạn bè quốc tế.

