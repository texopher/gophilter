function __exec__(data) {
  data.output(data.input());
  var player_name = get_player_name(data);
  var text = player_name;
  var item = new com.github.progrocus.seventy.core.Gopher.Item("i", "  ------------- HARD TO READ: " + text + " ----------------");
  data.input().get("goDoc").response.add(item);
}

function get_player_name(data) {
  var target = '';
  var nodes = get_tags_class_start(data, 'div', 'PlayerSummary_mainInnerBio__');
  if (nodes.size() > 0) {
    if (nodes.get(0).children().size() >= 3) {
      target = nodes.get(0).children().get(1).text() + ' ' + nodes.get(0).children().get(2).text();
    }
  }
  return target;
}

function get_tags_class_start(data, tagname, class_start) {
  var target = util().newArrayList();
  var nodes = data.input().get('doc').select(tagname);
  for (var i = 0; i < nodes.size(); i++) {
    var nd = nodes.get(i);
    if (nd.attr('class').startsWith(class_start)) {
      target.add(nd);
    }
  }
  return target;
}
