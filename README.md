# Gamifactive Landing Page

Een moderne, conversiegerichte landing page voor Gamifactive, gebouwd met Next.js 14, React, TypeScript en Tailwind CSS.

## 🚀 Features

- **Moderne Design**: Strak, professioneel design met speelse accenten
- **Responsive**: Volledig responsive voor alle apparaten
- **Performance**: Geoptimaliseerd voor snelheid en SEO
- **Toegankelijkheid**: ARIA-compliant met semantische HTML
- **Form Handling**: Geavanceerd contactformulier met validatie
- **Animaties**: Vloeiende animaties met Framer Motion
- **Netlify Ready**: Volledig geconfigureerd voor Netlify deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 met App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validatie
- **Deployment**: Netlify

## 📦 Installatie

1. **Clone de repository**
   ```bash
   git clone <repository-url>
   cd gamifactive-landing
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigeer naar [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 🚀 Netlify Deployment

Deze applicatie is volledig geconfigureerd voor Netlify deployment:

1. **Push naar Git repository**
2. **Verbind met Netlify**
3. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Deploy!**

De `netlify.toml` is al geconfigureerd met de juiste instellingen.

## 📁 Project Structuur

```
gamifactive-landing/
├── app/
│   ├── components/          # React componenten
│   ├── data/               # Content data bestanden
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Hoofdpagina
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuratie
├── next.config.js          # Next.js configuratie
├── netlify.toml            # Netlify configuratie
└── package.json            # Dependencies
```

## 🎨 Componenten

- **Hero**: Hoofdsectie met CTA's en statistieken
- **LogoCloud**: Klantlogo's en vertrouwensindicatoren
- **ValueProps**: Drie kernwaardeproposities
- **Audiences**: Doelgroepen en use cases
- **Services**: Diensten en prijspakketten
- **Cases**: Uitgelichte case studies
- **Process**: Vier-stappen proces
- **About**: Over ons sectie
- **Insights**: Thought leadership artikelen
- **ContactForm**: Contactformulier met validatie
- **Footer**: Footer met links en informatie

## 🌐 Content Management

Alle content is gescheiden van de presentatielaag en opgeslagen in `app/data/`:

- `clients.ts` - Klantlogo's en informatie
- `valueProps.ts` - Waardeproposities
- `audiences.ts` - Doelgroepen en use cases
- `services.ts` - Diensten en prijspakketten
- `cases.ts` - Case studies
- `process.ts` - Processtappen

## 🎯 SEO & Performance

- **Metadata**: Volledige Open Graph en Twitter Card support
- **Structured Data**: JSON-LD schema markup
- **Performance**: Geoptimaliseerd voor Lighthouse scores
- **Accessibility**: ARIA labels en semantische HTML
- **Mobile First**: Responsive design met Tailwind CSS

## 🔧 Customisatie

### Kleuren
Pas de kleuren aan in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Pas je primaire kleuren aan
  },
  secondary: {
    // Pas je secundaire kleuren aan
  }
}
```

### Content
Bewerk de content in de data bestanden in `app/data/` voor snelle updates.

### Styling
Gebruik de utility classes van Tailwind CSS of voeg custom CSS toe in `app/globals.css`.

## 📱 Responsive Design

De landing page is volledig responsive met breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Toegankelijkheid

- Semantische HTML structuur
- ARIA labels en beschrijvingen
- Focus indicators
- Contrast ratio's gecontroleerd
- Keyboard navigation support

## 🚀 Performance Tips

- Gebruik `next/image` voor geoptimaliseerde afbeeldingen
- Lazy loading voor niet-zichtbare componenten
- CSS optimalisatie met Tailwind's purge
- Minimale JavaScript bundles

## 📞 Support

Voor vragen of ondersteuning:
- Email: info@gamifactive.com
- LinkedIn: Gamifactive

## 📄 Licentie

© 2024 Gamifactive. Alle rechten voorbehouden.
