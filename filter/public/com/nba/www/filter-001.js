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
  var stat_HEIGHT = get_player_stat_2(data, 'HEIGHT');
  var stat_WEIGHT = get_player_stat_2(data, 'WEIGHT');
  var stat_AGE = get_player_stat_2(data, 'AGE');
  var stat_BIRTHDATE = get_player_stat_2(data, 'BIRTHDATE');
  var stat_DRAFT = get_player_stat_2(data, 'DRAFT');
  var stat_COUNTRY = get_player_stat_2(data, 'COUNTRY');
  var stat_EXPERIENCE = get_player_stat_2(data, 'EXPERIENCE');
  var stat_LAST_ATTENDED = get_player_stat_2(data, 'LAST ATTENDED');
  
  write_text(data, "=========================================");
  write_text(data, pad_head("PLAYER: " + player_name));
  write_text(data, "  -------------------------------------");
  write_text(data, "");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| TEAM       |" + pad_head_3(team_name, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| NUMBER     |" + pad_head_3(number, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| POSITION   |" + pad_head_3(position, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| PPG        |" + pad_head_3(stat_PPG, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| RPG        |" + pad_head_3(stat_RPG, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| APG        |" + pad_head_3(stat_APG, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| PIE        |" + pad_head_3(stat_PIE, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| HEIGHT     |" + pad_head_3(stat_HEIGHT, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| WEIGHT     |" + pad_head_3(stat_WEIGHT, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| AGE        |" + pad_head_3(stat_AGE, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| BIRTHDATE  |" + pad_head_3(stat_BIRTHDATE, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| DRAFT      |" + pad_head_3(stat_DRAFT, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| COUNTRY    |" + pad_head_3(stat_COUNTRY, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| EXPERIENCE |" + pad_head_3(stat_EXPERIENCE, "---------------------------") + "|");
  write_text(data, "|------------|---------------------------|");
  write_text(data, "| LAST       |" + pad_head_3(stat_LAST_ATTENDED, "---------------------------") + "|");
  write_text(data, "| ATTENDED   |" + pad_head_3('', "---------------------------") + "|");
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

function get_player_stat_2(data, label) {
  var target = '';
  var nodes = get_tags_class_start(data, 'div', 'PlayerSummary_playerInfo__');
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
