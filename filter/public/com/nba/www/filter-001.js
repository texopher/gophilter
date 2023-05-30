function __exec__(data) {
  data.output(data.input());
  var nodes = get_tags_class_start(data, 'div', 'PlayerSummary_mainInnerBio__');
  var text = '';
  if (nodes.size() > 0) {
    text = nodes.get(0).text(); 
  }
  var item = new com.github.progrocus.seventy.core.Gopher.Item("i", "  ------------- HARD TO READ: " + text + " ----------------");
  data.input().get("goDoc").response.add(item);
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
