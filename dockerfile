FROM oven/bun:alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:alpine AS runner
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lockb ./bun.lockb
RUN bun install --production --frozen-lockfile
CMD ["bun", "./build/index.js"]
EXPOSE 3000
