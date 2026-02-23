FROM debian:bookworm-slim AS pogocache-builder
RUN apt-get update && apt-get install -y \
    git gcc g++ make cmake autoconf automake libtool \
    && git clone https://github.com/tidwall/pogocache.git /tmp/pogocache \
    && git clone https://github.com/microsoft/mimalloc.git /tmp/pogocache/deps/mimalloc \
    && git clone https://github.com/jemalloc/jemalloc.git /tmp/pogocache/deps/jemalloc \
    && git clone https://github.com/axboe/liburing.git /tmp/pogocache/deps/liburing \
    && cd /tmp/pogocache \
    && make \
    && cp pogocache /usr/local/bin/pogocache

FROM oven/bun:alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:alpine AS runner
WORKDIR /app

COPY --from=pogocache-builder /usr/local/bin/pogocache /usr/local/bin/pogocache
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock
RUN bun install --production --frozen-lockfile

RUN cat <<'EOF' > /app/start.sh
#!/bin/sh
pogocache --socket /tmp/pogocache.sock &
until [ -S /tmp/pogocache.sock ]; do sleep 0.1; done
exec bun ./build/index.js
EOF
RUN chmod +x /app/start.sh

EXPOSE 3000
CMD ["/app/start.sh"]
