# Visual Analytics of Multivariate Event Sequence Data in Racquet Sports 
- Jiang Wu
> https://virtual.ieeevis.org/session_f-papers-event-seq.html

> https://virtual.ieeevis.org/paper_f-vast-1010.html

### intro
-  badminton, tennis, ping pong (popular sports)
    - players A & B
    - each hit = event
    - each rally = event sequence

- domain experts seek high level insights on player strategies
    - hard to analyze high number of sequences in a single match
    - goal is to summarize tactical patterns to reveal strategy

- technique: sequential pattern mining
    - current techniques include SPM-based, MDL-based, Machine Learning
    - above techniques cannot be applied to data because these sports have multiple attributes

### challenge 1: difficult to mine multivariate patterns
- hits are multi variate

- to extract pattern:
    - 2 sequences needed
    - 5 hits in each
    - 2 attributes considered: technique + ball position 

- Difficult to comprehensively evaluate multiple attributes

### challenge 2: comparitive analysis
- each hit is different (technique, player position, etc)
    - multiple attributes complicate hit

- hits can have 5 attributes
    - attributes can have 10 values
    - can have 7000+ distinct events

- consecutive hits can be used for different strategies (groundies, side-to-side, etc)

- domain experts seek to know how/why players adapt and change strategies based on different scenarios 

- patterns can widly vary when comparing 2 multivariate patterns
    - multiple compared attributes = high visual clutter

### solution 1: difficult to mine multivariate patterns
- MDL-based algorithm. 
    - MinDL
    - used to represent original sequences

- Sequences = pattern + corrections
    - functions by extracting common sub-sequences as patterns
    - the left-over events are name corrections

- mapping cost= # of patterns + # corrections
    - lowest mapping cost sequence = well summarize sequence 

- Their team modified MDL to handle mapping multivariate sequences to multivariate patterns 
    - mapping cost calculated for each attribute
    - these are added and weighted to produce multivariate cost

### solution 2: comparitive analysis
- Interactive visual analysis system

- 5 domain experts requirments were collected and summarized, in order to create 5 views
    - Attribute editor: 
        - Domain experts input Domain knowledge to output some similar patterns
    - Merge patterns: 
        - users can group similar values in attribute editor
    - Glyph editor: 
        - to display multiple attribs simultaneously 
        - different encodings applied to different hit attributes, then combined to create the glyph of one hit (customizable by user)
    - Comparison views:
        - scatterplot + pattern comparator (w/ bar chart) to provide multi-level comparison details
    - Instance view: 
        - detailed sequences within a pattern

### evaluation + feedback
- system tested with tennis + badminton

- 4 domain experts from 2 teams
    - each team had professor + phd student
    - used 2 athletes

- feedback
    - customizable attribute editor
    - multi-level comparison
    - glyph editor

- suggestions:
    - adding video links
    - show abnormal patterns automatically