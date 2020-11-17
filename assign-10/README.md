# data-structures final project

[What influences our apartment temperature?](https://github.com/madhat5/data-structures-20/blob/master/assign-10/img/DS-interface_design.png?raw=true)

- Interactivity:
    - Hover states to provide additional data attributes on plot chart

- Data mapping
    - Data object will have multiple variables. The main ones mapped onto the chart will be actual temperate and roommate guesses. 
    - Accurate guesses will be marked as winners. Rules are based on "The price is right" - the winning temperature guess must be at or under the actual temperature.
    - An accompanying data table will bet created below the chart, to provide a list format of the data

- Data processing:
    - a custom data object will have to be created, wich will aggregate data from multiple sources (sensor API + analog data input)

- View:
    - The default view will be as shown in the design above.

- User/audience:
    - This is aimed at apartment dwellers. Those who wish to get a better understanding of what factors influence apartment temperatures, as well as provide a use-case for how close temperature estimations can be.