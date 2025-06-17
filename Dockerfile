# ─── 1) Etap budowania ───────────────────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# Zainstaluj zależności i zbuduj
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ─── 2) Obraz produkcyjny ───────────────────────────────────────────────────────
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Tylko runtime‐owe moduły
COPY --from=builder /app/package*.json ./
RUN npm ci --production

# Skopiuj zbudowane pliki
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000
CMD ["npm", "run", "start"]
