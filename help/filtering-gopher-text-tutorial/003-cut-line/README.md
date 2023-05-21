```
                   _     _ _ _            
                  | |   (_) | |           
  __ _  ___  _ __ | |__  _| | |_ ___ _ __ 
 / _` |/ _ \| '_ \| '_ \| | | __/ _ \ '__|
| (_| | (_) | |_) | | | | | | ||  __/ |   
 \__, |\___/| .__/|_| |_|_|_|\__\___|_|   
  __/ |     | |                           
 |___/      |_|                           
-----------------------------------------
       Remove distracted line
-----------------------------------------
%
```

```

When we convert HTML to gopher text, there are some distracted lines 
which user does not need to read them. We can remove these lines by using
following properties:

+ cut_line_start_*
+ cut_line_end_*
+ cut_line_same_*
+ cut_line_include_*
+ cut_line_regex_*

These properties ends with a number (starting from 1).

=========================================
1. Remove line which is started with
   specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_line_start_1=Image source,
cut_line_start_2=Watch: 
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/003-cut-line/filter-01.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__51__45_cut_45_line_47_filter_45__48__49__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
$
```
