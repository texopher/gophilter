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
       Remove distracted lines
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
1. Remove lines which are started with
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
=========================================
2. Remove lines which are ended with
   specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_line_end_1=hours ago
cut_line_end_2=Advertise with us
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/003-cut-line/filter-02.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__51__45_cut_45_line_47_filter_45__48__50__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
3. Remove lines which are same as
   specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_line_same_1=BBC News Services
cut_line_same_2=Published
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/003-cut-line/filter-03.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__51__45_cut_45_line_47_filter_45__48__51__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
4. Remove lines which contain specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_line_include_1=Climate Video World US
cut_line_include_2=Entertainment & Arts Health
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/003-cut-line/filter-04.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__51__45_cut_45_line_47_filter_45__48__52__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
=========================================
5. Remove lines which match java regex
   pattern to specified text
  -------------------------------------

----- Filter -----
gophilter=yes
cut_line_regex_1=^(By).*$
cut_line_regex_2=^(BBC).*
------------------

Web URL: https://www.bbc.co.uk/news/world-europe-65661251
Filter URL: https://raw.githubusercontent.com/texopher/gophilter/main/help/filtering-gopher-text-tutorial/003-cut-line/filter-05.txt
```
[Open example](http://texopher.com/g?url=gopher://texopher.com/x/w/g/i/https_58__47__47_raw_46_githubusercontent_46_com_47_texopher_47_gophilter_47_main_47_help_47_filtering_45_gopher_45_text_45_tutorial_47__48__48__51__45_cut_45_line_47_filter_45__48__53__46_txt/https_58__47__47_www_46_bbc_46_co_46_uk_47_news_47_world_45_europe_45__54__53__54__54__49__50__53__49_)

```
$
```
