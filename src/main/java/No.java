import module jdk.httpserver;

void main() throws IOException {
    final CopyOnWriteArrayList<String> reasons = new CopyOnWriteArrayList<>();
    Stream.of(Pattern.compile("\\\\u([0-9a-fA-F]{4})")
            .matcher(Files.readString(Paths.get("reasons.json")))
            .replaceAll((m) -> String.valueOf((char) Integer.parseInt(m.group(1), 16)))
            .split(System.lineSeparator())
    )
            .filter((t) -> !t.startsWith("[") && !t.startsWith("]"))
            .forEach((t) -> reasons.add(t.substring(3, t.length() - 2).trim()));

    final HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
    server.createContext("/no", (final HttpExchange exchange) -> {
        final byte[] response = "{\"reason\":\"%s\"}".formatted(reasons.get(
                ThreadLocalRandom.current().nextInt(reasons.size())
        )).getBytes(StandardCharsets.UTF_8);

        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(200, response.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(response);
        }
    });

    server.setExecutor(null);
    server.start();
    System.getLogger(this.getClass().getName()).log(System.Logger.Level.INFO, "Server started successfully");
}
