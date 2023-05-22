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
 Remove from specified heading to ending
-----------------------------------------
%
```

```

We can remove from specified heading to ending by using
following properties:

+ cut_head_start_*
+ cut_head_end_*
+ cut_head_same_*
+ cut_head_include_*
+ cut_head_regex_*

+ cut_last_start_*
+ cut_last_end_*
+ cut_last_same_*
+ cut_last_include_*
+ cut_last_regex_*

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
1. Remove from line which is started 
   with specified text to ending
  -------------------------------------

----- Filter -----
gophilter=yes
cut_last_start_1=Related
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/006-cut-last-block/filter-01.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__54__45_cut_45_last_45_block_47_filter_45__48__49__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
2. Remove from line which is ended with 
   specified text to ending
  -------------------------------------

----- Filter -----
gophilter=yes
cut_last_end_1=Topics
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/006-cut-last-block/filter-02.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__54__45_cut_45_last_45_block_47_filter_45__48__50__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
3. Remove from line which is same as 
   specified text to ending
  -------------------------------------

----- Filter -----
gophilter=yes
cut_last_same_1=Related Topics
cut_last_same_2=More on this story
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/006-cut-last-block/filter-03.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__54__45_cut_45_last_45_block_47_filter_45__48__51__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
4. Remove from line which contains 
   specified text to ending
  -------------------------------------

----- Filter -----
gophilter=yes
cut_last_include_1=Related
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/006-cut-last-block/filter-04.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__54__45_cut_45_last_45_block_47_filter_45__48__52__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
5. Remove from line which matches java 
   regex pattern to specified text to
   ending
  -------------------------------------

----- Filter -----
gophilter=yes
cut_last_regex_1=^(Related).*$
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/006-cut-last-block/filter-05.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__54__45_cut_45_last_45_block_47_filter_45__48__53__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
$
```
