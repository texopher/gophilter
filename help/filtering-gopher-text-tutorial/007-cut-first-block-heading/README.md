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
Remove from beginning to specified heading
-----------------------------------------
%
```

```

We can remove from beginning to specified heading by using
following properties:

+ cut_head_start_*
+ cut_head_end_*
+ cut_head_same_*
+ cut_head_include_*
+ cut_head_regex_*

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

Web URL: https://truyenfull.vn/tao-tac/
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/filter/blank.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_filter_47_blank_46_txt/https_58__47__47_truyenfull_46_vn_47_tao_45_tac_47_)

```
=========================================
1. Remove from begining to heading which is
   started with specified text
  -------------------------------------

When we cut a heading, it is add "~~~~ " to the beginning and is continued to process as text. So, if we need to remove from beginning
to heading, we first need cut heading, then cut first block.

----- Filter -----
gophilter=yes
cut_head_start_1=Thông tin
cut_first_start_1=~~~~~ Thông tin
------------------

Web URL: https://truyenfull.vn/tao-tac/
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/007-cut-first-block-heading/filter-01.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__55__45_cut_45_first_45_block_45_heading_47_filter_45__48__49__46_txt/https_58__47__47_truyenfull_46_vn_47_tao_45_tac_47_)

```
=========================================
2. Remove from beginning to heading which is
   ended with specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_end_1=truyện
cut_first_end_1=truyện
------------------

Web URL: https://truyenfull.vn/tao-tac/
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/007-cut-first-block-heading/filter-02.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__55__45_cut_45_first_45_block_45_heading_47_filter_45__48__50__46_txt/https_58__47__47_truyenfull_46_vn_47_tao_45_tac_47_)

```
=========================================
3. Remove from beginning to heading which is
   same as specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_same_1=Thông tin truyện
cut_first_same_1=~~~~~ Thông tin truyện
------------------

Web URL: https://truyenfull.vn/tao-tac/
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/007-cut-first-block-heading/filter-03.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__55__45_cut_45_first_45_block_45_heading_47_filter_45__48__51__46_txt/https_58__47__47_truyenfull_46_vn_47_tao_45_tac_47_)

```
=========================================
4. Remove from beginning to heading which 
   contains specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_head_include_1=tin
cut_first_include_1=tin
------------------

Web URL: https://truyenfull.vn/tao-tac/
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/007-cut-first-block-heading/filter-04.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__55__45_cut_45_first_45_block_45_heading_47_filter_45__48__52__46_txt/https_58__47__47_truyenfull_46_vn_47_tao_45_tac_47_)

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

Web URL: https://truyenfull.vn/tao-tac/
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/005-cut-first-block/filter-05.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__53__45_cut_45_first_45_block_47_filter_45__48__53__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
$
```
