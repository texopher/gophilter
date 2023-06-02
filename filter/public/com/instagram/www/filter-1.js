function __exec__(data) {
  data.output(data.input());

  var url = 'https://txtify.it/' + data.input().get('url');
  
  write_text(data, "");
  write_text(data, "=========================================");
  write_web_link(data, pad_head_2("Txtify.it!", '-------------------------------------'), url);
  write_text(data, "  -------------------------------------");
  write_text(data, "");
  
  var text = scrape_page(url);
  var lines = text.split("\n");
  for (var i = 0; i < lines.length; i++) {
    write_text(data, lines[i]);
  }
  
  write_text(data, "");
}

function scrape_page(url) {
  return org.jsoup.Jsoup.connect(url).timeout(60 * 1000).ignoreHttpErrors(true).ignoreContentType(true).followRedirects(true).execute().body();				
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

function write_web_link(data, label, url) {
  var item = new com.github.progrocus.seventy.core.Gopher.Item("i", label);
  item.type = "h";
  item.selector = url;
  data.input().get("goDoc").response.add(item);
}
