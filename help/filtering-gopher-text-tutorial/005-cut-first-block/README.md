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
 Remove from beginning to specified line
-----------------------------------------
%
```

```

We can remove from beginning to specified line by using
following properties:

+ cut_first_start_*
+ cut_first_end_*
+ cut_first_same_*
+ cut_first_include_*
+ cut_first_regex_*

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
1. Remove from begining to line which is
   started with specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_first_start_1=Image source,
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/005-cut-first-block/filter-01.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__53__45_cut_45_first_45_block_47_filter_45__48__49__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
2. Remove from beginning to line which is
   ended with specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_first_end_1=, Reuters
cut_first_end_2=Sam Hancock
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/005-cut-first-block/filter-02.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__53__45_cut_45_first_45_block_47_filter_45__48__50__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
3. Remove from beginning to line which is
   same as specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_first_same_1=Image source, Reuters
cut_first_same_2=By Sam Hancock
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/005-cut-first-block/filter-03.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__53__45_cut_45_first_45_block_47_filter_45__48__51__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
4. Remove from beginning to line which 
   contains specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_first_include_1=, Reuters
cut_first_include_2=Sam Hancock
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/005-cut-first-block/filter-04.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__53__45_cut_45_first_45_block_47_filter_45__48__52__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
5. Remove from beginning to line which 
   matches java regex pattern to 
   specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_first_regex_1=^(Image).*$
cut_first_regex_2=^(By).*
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/005-cut-first-block/filter-05.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__53__45_cut_45_first_45_block_47_filter_45__48__53__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
$
```
