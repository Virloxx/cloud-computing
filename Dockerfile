# 1) Etap build: generujemy klienta Prisma i budujemy Next.js
FROM node:18-alpine AS builder
WORKDIR /app

# 1.1) Kopiujemy manifesty + schema.prisma
COPY package*.json ./
COPY prisma ./prisma

# 1.2) Instalujemy full dependencies i generujemy Prisma Client
RUN npm ci
RUN npx prisma generate

# 1.3) Kopiujemy resztę kodu i budujemy
COPY . .
RUN npm run build

# 2) Etap runtime: **debian-based**, by silnik Prisma pasował do środowiska
FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# 2.1) Instalujemy tylko prod-dependencje
COPY --from=builder /app/package*.json ./
RUN npm ci --production

# 2.2) Kopiujemy wygenerowane binarki Prisma i klienta
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

# 2.3) Kopiujemy zbudowaną aplikację Next.js
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000
CMD ["npm", "run", "start"]
