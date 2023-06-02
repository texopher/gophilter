function __exec__(data) {
  data.output(data.input());
  var url = 'https://txtify.it/' + data.input().get('url');
  
  write_text(data, "=========================================");
  write_text(data, url);
  write_text(data, "  -------------------------------------");
  write_text(data, "");
  
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
