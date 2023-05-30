function __exec__(data) {
  data.output(data.input());
  var item = new com.github.progrocus.seventy.core.Gopher.Item("i", "  ------------- HARD TO READ ----------------");
  data.input().get("goDoc").response.add(item);
}
