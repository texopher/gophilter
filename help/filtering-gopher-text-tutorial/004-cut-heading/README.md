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
      Remove distracted heading
-----------------------------------------
%
```

```

When we convert HTML to gopher text, there are some distracted headings 
which user does not need to read them. We can remove these headings by using
following properties:

+ cut_head_start_*
+ cut_head_end_*
+ cut_head_same_*
+ cut_head_include_*
+ cut_head_regex_*

These properties ends with a number (starting from 1).

=========================================
0. Open page with blank filter
  -------------------------------------

----- Filter -----
gophilter=yes
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/filter/blank.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_filter_47_blank_46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
1. Remove headings which are started with
   specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_start_1=More on
cut_head_start_2=Top
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/004-cut-heading/filter-01.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__52__45_cut_45_heading_47_filter_45__48__49__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
2. Remove headings which are ended with
   specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_end_1=Topics
cut_head_end_2=this story
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/004-cut-heading/filter-02.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__52__45_cut_45_heading_47_filter_45__48__50__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
3. Remove headings which are same as
   specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_same_1=Related Topics
cut_head_same_2=More on this story
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/004-cut-heading/filter-03.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__52__45_cut_45_heading_47_filter_45__48__51__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
4. Remove headings which contain specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_include_1=Topics
cut_head_include_2=on this
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/004-cut-heading/filter-04.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__52__45_cut_45_heading_47_filter_45__48__52__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
5. Remove headings which match java regex
   pattern to specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_regex_1=^(Related).*$
cut_head_regex_2=^(More).*
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/004-cut-heading/filter-05.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__52__45_cut_45_heading_47_filter_45__48__53__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
$
```
