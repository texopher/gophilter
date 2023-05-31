function __exec__(data) {
  data.output(data.input());
  var player_name = get_player_name(data);
  var team_name = get_team_name(data);
  var number = get_number(data);
  var position = get_position(data);
  var stat_PPG = get_player_stat(data, 'PPG');
  var stat_RPG = get_player_stat(data, 'RPG');
  var stat_APG = get_player_stat(data, 'APG');
  var stat_PIE = get_player_stat(data, 'PIE');
  
  write_text(data, "=========================================");
  write_text(data, pad_head("PLAYER: " + player_name));
  write_text(data, "  -------------------------------------");
  write_text(data, "");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| Team       |" + pad_head_3(team_name, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| Number     |" + pad_head_3(number, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| Position   |" + pad_head_3(position, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| PPG        |" + pad_head_3(stat_PPG, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| RPG        |" + pad_head_3(stat_RPG, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| APG        |" + pad_head_3(stat_APG, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| PIE        |" + pad_head_3(stat_PIE, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  
  write_text(data, "");
}

function intPart(text) {
  var idx = lang().newString(text).indexOf('.');
  if (idx >= 0) {
    return parseInt(lang().newString(text).substring(0, idx));
  }
  return parseInt(text);
}

function pad_head_2(text, sample) {
  var head = lang().newString(sample);
  var left = intPart('' + ((head.length() - lang().newString(text).length())/2));
  if (left < 0) {
    left = 0;
  }
  var target = '';
  for (var i = 0; i < left; i++) {
    target = target + ' ';
  }
  target = target + text;
  for (var i = lang().newString(target).length(); i <= head.length(); i++) {
    target = target + ' ';
  }
  return target;
}

function pad_head_3(text, sample) {
  var head = lang().newString(sample);
  var target = ' ' + text;
  for (var i = lang().newString(target).length(); i < head.length(); i++) {
    target = target + ' ';
  }
  return target;
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

function get_player_stat(data, label) {
  var target = '';
  var nodes = get_tags_class_start(data, 'div', 'PlayerSummary_playerStat__');
  if (nodes.size() > 0) {
    for (var i = 0; i < nodes.size(); i++) {
      if (nodes.get(i).children().size() == 2) {
        if (lang().newString(label).equals(nodes.get(i).children().get(0).text().trim())) {
          target = nodes.get(i).children().get(1).text().trim();
          return target;
        }
      }
    }
  }
  return target;
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

function get_team_name(data) {
  var target = '';
  var nodes = get_tags_class_start(data, 'div', 'PlayerSummary_mainInnerBio__');
  if (nodes.size() > 0) {
    if (nodes.get(0).children().size() >= 3) {
      target = nodes.get(0).children().get(0).text().split('\\|')[0].trim();
    }
  }
  return target;
}

function get_number(data) {
  var target = '';
  var nodes = get_tags_class_start(data, 'div', 'PlayerSummary_mainInnerBio__');
  if (nodes.size() > 0) {
    if (nodes.get(0).children().size() >= 3) {
      target = nodes.get(0).children().get(0).text().split('\\|')[1].trim();
    }
  }
  return target;
}

function get_position(data) {
  var target = '';
  var nodes = get_tags_class_start(data, 'div', 'PlayerSummary_mainInnerBio__');
  if (nodes.size() > 0) {
    if (nodes.get(0).children().size() >= 3) {
      target = nodes.get(0).children().get(0).text().split('\\|')[2].trim();
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
