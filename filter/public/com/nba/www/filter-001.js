function __exec__(data) {
  data.output(data.input());
  var player_name = get_player_name(data);
  write_text(data, "=========================================");
  write_text(data, pad_head("PLAYER: " + player_name));
  write_text(data, "  -------------------------------------");
  write_text(data, "");

}

function intPart(text) {
  var idx = lang().newString(text).indexOf('.');
  if (idx >= 0) {
    return parseInt(lang().newString(text).substring(0, idx));
  }
  return parseInt(text);
}

function pad_head(text) {
  var head = lang().newString("=========================================");
  var left = intPart('' + ((head.length() - lang().newString(text).length())/2));
  if (left < 0) {
    left = 0;
  }
  var target = '';
  for (var i = 0; i < left; i++) {
    target = target + ' ';
  }
  target = target + text;
  return target;
}

function write_text(data, text) {
  var item = new com.github.progrocus.seventy.core.Gopher.Item("i", text);
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
