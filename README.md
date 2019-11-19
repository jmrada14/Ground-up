# Ground-Up: a full stack application that attempts to take the politics out of government.

## Partners: Sanjeev Chadeesingh and Juan Rada

## Technologies Used: MERN Stack

## The Problem the Application is Attempting to Solve:
Sanjeev and Juan wanted to design an application that solved two initial problems:
1. Put a Spotlight on the Importance of Local Elections
1. Remove the Subjectivity Now Inherent in Modern Government

## Process:
We first had to find data. We wanted to know who each congressman and congresswoman was from both chambers of congress(House of Representatives and the Senate.) Thankfully, ProPublica now has a data-store, and from it we were able to access all current members of congress, alongside all bills voted upon during the current (116th) Congress. We decided to focus on any bills passed that affected the environment. We had to use govtrack.us for the version of data we preferred for bills that were passed. This information was in CSV format, and we used an open source data translator to transform the information from CSV to JSON format (csvjson.com.) 

After successfully transforming all data into JSON format, we set up our Mongo database with the following collections:
1. **Bills:** *20 bills passed during the 116th Congress that impacted the environment.* 
1. **Members:** *All 538 members of congress.*
1. **Users:** *Any and all members that wish to join the application. We provide authentication and protection through PassportJS.*

