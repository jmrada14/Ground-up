# Ground-Up: a full stack application that attempts to take the politics out of government.

## Partners: Sanjeev Chadeesingh and Juan Rada

## Technologies Used: MERN Stack

## Background:
Sanjeev and Juan wanted to design an application that served two purposes:
1. Spotlight Importance of Local Elections
1. Remove the Subjectivity Now Inherent in Modern Government

## Process:
We first had to find our data. Thankfully, ProPublica now has a data-store, and from it we were able to access all current members of congress, alongside all bills voted upon during the current (116th Congress.) We had to use govtrack.us for the version of data we preferred for the bills that were passed. This information was in CSV format, and we used an open source data translator to transform the information from CSV to JSON format (csvjson.com)