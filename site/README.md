# Altverse Site

A Next.js application for the Altverse protocol interface.

## Tech Stack
- Next.js
- React
- TypeScript
- TailwindCSS
- shadcn/ui Components

## Local Development
```bash
# Install dependencies
npm install
# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Suggested File Tree

```
├── app/                  
│   ├── page.tsx         
│   ├── landing.tsx      
│   └── dashboard.tsx    
├── components/          
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── layout/          
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── modals/          
│       ├── Modal.tsx    
│       ├── Swap.tsx
│       ├── Bridge.tsx
│       ├── Earn.tsx
│       ├── Lend.tsx
│       └── Dashboard.tsx
├── lib/                 
│   ├── constants.ts
│   ├── formatters.ts
│   └── utils.ts
├── store/               
│   └── useWallet.ts
└── types/              
    └── index.ts
```