# Portfolio Brief — Samuel Schramm Meurer

## Quem sou

Growth Engineer especializado em Web3 / Crypto / Fintech. Nômade digital baseado em SE Asia (UTC+7). Trabalho atual: El Dorado (Paradigm-backed, Series A), stablecoin cross-border payments em LATAM.

Stack: Python, SQL/BigQuery, Meta & TikTok CAPI, GTM server-side, OpenAI API, GA4, Framer Motion / Next.js.

---

## A frase central

> **"I open markets and build the systems to scale them."**

Essa é a âncora de todo o site. Tudo se organiza em torno dela.

---

## Estrutura narrativa do site

### 1. Hero
- Nome animado (ASCII): Samuel Schramm Meurer
- Título: `growth engineer` · `web3 · crypto · fintech`
- Tagline: *"I open markets and build the systems to scale them."*
- 4 stats de impacto imediato
- 3 fotos de eventos (hackathons Dublin, ETH LATAM)
- Tag: `remote first`

---

### 2. Os Dois Pilares — seção principal (SCROLL-DRIVEN)

A ideia central da seção: dois painéis lado a lado que "acordam" conforme o usuário rola. Enquanto o lado esquerdo está ativo, o direito fica escurecido — e vice-versa. Conteúdo revela progressivamente, bullet por bullet.

**Referências visuais:** ver esboços em:
- `/Users/samuelschramm/agents/neworld/WhatsApp Image 2026-09-22 at 12.36.27.jpeg` (Open Markets)
- `/Users/samuelschramm/agents/neworld/WhatsApp Image 2026-09-22 at 12.36.25.jpeg` (Scale)

#### PILAR 01 — Open Markets

O processo de entrar em mercados novos:

```
Pesquisa de Mercado + Entender Produto Atual
          ↓
   Audience + Proposta de Valor
          ↓
   Diagnóstico → Hypothesis & Tests
          ↓
      Beach Head Market
          ↓
   Táctico & Operational Plan (Define KPIs)
          ↓
        CHANNELS
       /        \
     B2C         B2B
      |            |
   KOLs/Inf     Lead Gen
   Message      ICP Definition
   House        AI Leads
   Briefing     SDR's
   Hook/Body
   CTA
          ↓
     VALIDATE / TOFU
          ↓
     Measure KPIs
```

**Bullets para o site:**
1. On-chain & market data to identify untapped corridors before they're obvious
2. Beach head strategy — local KOL networks, B2C & B2B entry playbooks
3. Demand validation → TOFU activation → GTM execution

**Case anchor:**
> Bolivia · El Dorado · 2025
> **$10K → $700K/mo**
> 10 months · became #1 market

---

#### PILAR 02 — Scale

Depois que o mercado está aberto, como construir a máquina:

```
SCALE — Optimize TOFU por canal:

KOLs/Influencer     ADS           EVENTS          LEADS
      |               |               |               |
 User Journey    Conversion AI   Local Position  ICP Definition
 Assimilação       MMP/Events     Gamification    AI Lead Gen
 Atração          Track Better    GTM Events      Contact Schedule
 Argumentação      Results                         SDR's
 Ação
 Advocacia
      |
 Analyze Data
 Contents
 Optimize
          ↓
       MOFU & BOFU
       GA4 Events · BigQuery
          ↓
   Users Product Clusters:
   App Open Daily · Push Flow
   Growth Loops · Month Campaigns
   Referral Program
          ↓
   AB TESTING
          ↓
   CAC · DAU · Activation · Retention · Virality · LTV · ARPU
```

**Bullets para o site:**
1. Attribution infrastructure — server-side CAPI replacing browser-side fiction
2. Automation — Python + AI agents to eliminate ops overhead
3. Product growth loops — referral design, retention, LTV by acquisition source

**Case anchor:**
> El Dorado · 2025
> **−76% ops · $110K+ recovered**
> +10% CVR · CAPI · Referral

---

### 3. Track Record (números acumulados)

Ao final dos dois pilares, mostrar o track record consolidado — não cases separados, mas os números que provam a narrativa:

| Métrica | Valor | Contexto |
|---|---|---|
| Volume aberto | $700K/mo | Bolivia peak · 10 meses |
| Escala Brazil | 3× | $900K → $2.7M · 4 meses |
| User growth | +145% | Brazil · 3 meses |
| Ops eliminados | −76% | Python + OpenAI agent |
| Revenue recovered | $110K+ | Funnel experiments |
| KOL investment managed | $200K+ | 150+ partnerships · 30M impressions |

---

### 4. Stack
8 categorias de ferramentas: Analytics & Data · Attribution · Growth Systems · Automation & AI · Paid Acquisition · KOL & Partnerships · Web3 & Blockchain · B2B & Events

### 5. Nomad
Strip horizontal de fotos de viagem. Fundo preto, grayscale → colorido no hover.
Texto: `Remote · Nomad` · `Based in SE Asia · Previously Dublin (Ireland), Italy, Croatia`

### 6. Contact
- Foto retrato (Tower Bridge)
- `Open to roles. Remote-first.`
- `Web3 · Crypto · Fintech · Emerging markets`
- `Dubai · Singapore · Europe · Remote global`

---

## Direção de design

- **Estética:** técnica / minimalista. Fundo preto `#0a0a0a`. Fonte mono. Zero gradientes decorativos.
- **Tom:** preciso, direto, confiante. Não um portfolio de designer — um portfolio de alguém que constrói sistemas.
- **Animações:** scroll-driven, com propósito. Nada decorativo. Cada animação serve a narrativa.
- **Paleta:** preto + branco + neutros. Cores acento só onde há dado real (azul para métricas, verde para crescimento).
- **Stack atual:** Next.js 16 · TypeScript · Tailwind · Framer Motion · Aceternity UI

---

## O que está implementado hoje

| Seção | Arquivo | Estado |
|---|---|---|
| Hero | `hero.tsx` | ✅ pronto |
| Dois Pilares | `pillars.tsx` | 🔄 em progresso — scroll-driven, precisa refinamento UX |
| Stack | `stack.tsx` | ✅ pronto |
| Track Record | `milestones.tsx` | ✅ pronto (renomeado para Track Record) |
| Nomad | `nomad.tsx` | ✅ pronto |
| Contact | `contact.tsx` | ✅ pronto |

---

## O que precisa melhorar

A seção dos **Dois Pilares** (`pillars.tsx`) está funcional com animação scroll-driven, mas o usuário quer algo com mais UX, mais criativo, mais impactante visualmente. A lógica de conteúdo está certa — o problema é a forma de apresentar.

**Comportamento desejado:**
- Dois lados que contam uma história à medida que você rola
- Cada bullet aparece progressivamente (não tudo de uma vez)
- Case card aparece no final de cada lado
- Transição clara entre Pilar 01 e Pilar 02
- Linha divisória animada entre os dois lados
- Visual que deixa claro: "esse cara pensa em sistemas, não só em campanhas"

---

## Pendente

- [ ] Refinamento UX da seção Dois Pilares
- [ ] Deploy no Vercel + domínio
